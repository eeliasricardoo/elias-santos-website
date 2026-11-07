/**
 * Live sky: the hero banner mirrors the visitor's current weather and time of day.
 *
 * 1. `/api/weather` (Vercel function, uses Vercel's IP geo headers) — city-level.
 * 2. Fallback: the browser's IANA timezone → a representative city → Open-Meteo.
 * 3. Fallback: clear sky; day/night still follows the visitor's local clock.
 *
 * Preview any state with `?sky=clear|partly|cloudy|rain|storm|snow|fog` and `&time=day|night`.
 */

export type SkyWeather = 'clear' | 'partly' | 'cloudy' | 'rain' | 'storm' | 'snow' | 'fog';
export type SkyTime = 'day' | 'night';
export type SkyState = { weather: SkyWeather; time: SkyTime; temp: number | null; live: boolean };

const WEATHERS: SkyWeather[] = ['clear', 'partly', 'cloudy', 'rain', 'storm', 'snow', 'fog'];
const CACHE_KEY = 'er-sky';
const CACHE_MS = 15 * 60 * 1000;

/** WMO weather interpretation codes, as returned by Open-Meteo. */
export function weatherFromCode(code: number): SkyWeather {
    if (code <= 1) return 'clear';
    if (code === 2) return 'partly';
    if (code === 3) return 'cloudy';
    if (code === 45 || code === 48) return 'fog';
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
    if (code >= 95) return 'storm';
    return 'rain'; // 51–67 drizzle/rain, 80–82 showers
}

export function localTime(): SkyTime {
    const h = new Date().getHours();
    return h >= 6 && h < 18 ? 'day' : 'night';
}

// Representative coordinates for common timezones. Coarse on purpose: it only
// has to land in the same weather region as the visitor.
const TZ_COORDS: Record<string, [number, number]> = {
    'America/Sao_Paulo': [-23.55, -46.63],
    'America/Bahia': [-12.97, -38.5],
    'America/Fortaleza': [-3.73, -38.52],
    'America/Recife': [-8.05, -34.88],
    'America/Belem': [-1.46, -48.49],
    'America/Manaus': [-3.12, -60.02],
    'America/Cuiaba': [-15.6, -56.1],
    'America/Campo_Grande': [-20.47, -54.62],
    'America/Porto_Velho': [-8.76, -63.9],
    'America/Rio_Branco': [-9.97, -67.81],
    'America/Noronha': [-3.85, -32.42],
    'America/Argentina/Buenos_Aires': [-34.6, -58.38],
    'America/Montevideo': [-34.9, -56.16],
    'America/Santiago': [-33.45, -70.67],
    'America/Bogota': [4.71, -74.07],
    'America/Lima': [-12.05, -77.04],
    'America/Mexico_City': [19.43, -99.13],
    'America/New_York': [40.71, -74.01],
    'America/Toronto': [43.65, -79.38],
    'America/Chicago': [41.88, -87.63],
    'America/Denver': [39.74, -104.99],
    'America/Phoenix': [33.45, -112.07],
    'America/Los_Angeles': [34.05, -118.24],
    'America/Vancouver': [49.28, -123.12],
    'Europe/London': [51.51, -0.13],
    'Europe/Dublin': [53.35, -6.26],
    'Europe/Lisbon': [38.72, -9.14],
    'Europe/Madrid': [40.42, -3.7],
    'Europe/Paris': [48.86, 2.35],
    'Europe/Amsterdam': [52.37, 4.9],
    'Europe/Brussels': [50.85, 4.35],
    'Europe/Berlin': [52.52, 13.4],
    'Europe/Zurich': [47.38, 8.54],
    'Europe/Rome': [41.9, 12.5],
    'Europe/Stockholm': [59.33, 18.07],
    'Europe/Warsaw': [52.23, 21.01],
    'Europe/Athens': [37.98, 23.73],
    'Europe/Istanbul': [41.01, 28.98],
    'Europe/Kyiv': [50.45, 30.52],
    'Africa/Lagos': [6.52, 3.38],
    'Africa/Johannesburg': [-26.2, 28.05],
    'Africa/Cairo': [30.04, 31.24],
    'Asia/Dubai': [25.2, 55.27],
    'Asia/Kolkata': [28.61, 77.21],
    'Asia/Singapore': [1.35, 103.82],
    'Asia/Shanghai': [31.23, 121.47],
    'Asia/Hong_Kong': [22.32, 114.17],
    'Asia/Tokyo': [35.68, 139.69],
    'Asia/Seoul': [37.57, 126.98],
    'Australia/Sydney': [-33.87, 151.21],
    'Australia/Melbourne': [-37.81, 144.96],
    'Pacific/Auckland': [-36.85, 174.76],
};

type Reading = { code: number; isDay: boolean; temp: number | null };

async function fromVercel(): Promise<Reading | null> {
    const res = await fetch('/api/weather', { headers: { accept: 'application/json' } });
    if (res.status !== 200 || !res.headers.get('content-type')?.includes('json')) return null;
    return (await res.json()) as Reading;
}

async function fromTimezone(): Promise<Reading | null> {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const coords = TZ_COORDS[tz];
    if (!coords) return null;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current=weather_code,temperature_2m&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = (await res.json()) as { current?: { weather_code?: number; temperature_2m?: number } };
    if (typeof data.current?.weather_code !== 'number') return null;
    // Day/night from the visitor's own clock: the representative city may sit at
    // the far end of the timezone.
    return { code: data.current.weather_code, isDay: localTime() === 'day', temp: data.current.temperature_2m ?? null };
}

function override(): SkyState | null {
    const q = new URLSearchParams(window.location.search);
    const w = q.get('sky') as SkyWeather | null;
    const t = q.get('time');
    if (!w && !t) return null;
    return {
        weather: w && WEATHERS.includes(w) ? w : 'clear',
        time: t === 'night' || t === 'day' ? t : localTime(),
        temp: null,
        live: false,
    };
}

/** Synchronous first guess, so night visitors don't see a flash of daylight. */
export function initialSky(): SkyState {
    const forced = override();
    if (forced) return forced;
    try {
        const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY) ?? 'null');
        if (cached && Date.now() - cached.at < CACHE_MS) return cached.state as SkyState;
    } catch {
        /* storage blocked */
    }
    return { weather: 'clear', time: localTime(), temp: null, live: false };
}

export async function fetchSky(): Promise<SkyState | null> {
    if (override()) return null;
    let reading: Reading | null = null;
    try {
        reading = await fromVercel();
    } catch {
        /* not on Vercel (local dev) */
    }
    if (!reading) {
        try {
            reading = await fromTimezone();
        } catch {
            /* offline / blocked */
        }
    }
    if (!reading) return null;
    const state: SkyState = {
        weather: weatherFromCode(reading.code),
        time: reading.isDay ? 'day' : 'night',
        temp: reading.temp,
        live: true,
    };
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), state }));
    } catch {
        /* storage blocked */
    }
    return state;
}

export const SKY_LABEL: Record<SkyWeather, string> = {
    clear: 'Clear',
    partly: 'Partly cloudy',
    cloudy: 'Overcast',
    rain: 'Rain',
    storm: 'Thunderstorm',
    snow: 'Snow',
    fog: 'Fog',
};

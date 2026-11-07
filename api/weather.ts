/**
 * GET /api/weather — current weather at the visitor's approximate location.
 *
 * Location comes from Vercel's own geo headers (derived from the IP at the edge),
 * so the IP is never sent to a third party: only coordinates rounded to ~10 km go
 * to Open-Meteo (free, no key). Responds 204 when no location is available (local
 * dev, unknown IP) and the client falls back to its timezone guess.
 */

export async function GET(request: Request): Promise<Response> {
    const lat = Number(request.headers.get('x-vercel-ip-latitude'));
    const lon = Number(request.headers.get('x-vercel-ip-longitude'));
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || (lat === 0 && lon === 0)) {
        return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
    }

    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude', lat.toFixed(1));
    url.searchParams.set('longitude', lon.toFixed(1));
    url.searchParams.set('current', 'weather_code,is_day,temperature_2m');
    url.searchParams.set('timezone', 'auto');

    try {
        const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
        if (!res.ok) throw new Error(`open-meteo ${res.status}`);
        const data = (await res.json()) as {
            current?: { weather_code?: number; is_day?: number; temperature_2m?: number };
        };
        const c = data.current;
        if (!c || typeof c.weather_code !== 'number') throw new Error('no current weather');

        return Response.json(
            { code: c.weather_code, isDay: c.is_day === 1, temp: c.temperature_2m ?? null },
            {
                // Per-visitor answer: browsers may reuse it briefly, shared caches must not.
                headers: { 'Cache-Control': 'private, max-age=600' },
            },
        );
    } catch {
        return new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });
    }
}

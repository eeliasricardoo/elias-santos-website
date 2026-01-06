import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const GIFS_TO_CONVERT = [
    // High Priority (Huge Files)
    {
        input: 'public/portfolios/framer ui.gif',
        output: 'public/portfolios/framer-ui',
        priority: '🔴 HIGH (30MB)'
    },
    {
        input: 'public/portfolios/oliver.gif',
        output: 'public/portfolios/oliver',
        priority: '🔴 HIGH (21MB)'
    },

    // Medium Priority (Documentation)
    {
        input: 'public/documentation/v11.gif',
        output: 'public/documentation/v11',
        priority: '🟡 MEDIUM (13MB)'
    },
    {
        input: 'public/documentation/v10.gif',
        output: 'public/documentation/v10',
        priority: '🟡 MEDIUM (7.9MB)'
    },

    // Ventus Project
    {
        input: 'public/portfolios/ventus/Modelos personalizado.gif',
        output: 'public/portfolios/ventus/modelos-personalizado',
        priority: '🟡 MEDIUM (5.2MB)'
    },
    {
        input: 'public/portfolios/ventus/video.gif',
        output: 'public/portfolios/ventus/video',
        priority: '🟡 MEDIUM (3.7MB)'
    },

    // Low Priority
    {
        input: 'public/portfolios/ranking.gif',
        output: 'public/portfolios/ranking',
        priority: '🟢 LOW (2.2MB)'
    },
    {
        input: 'public/portfolios/ranking/1_Eqflzr9sr1z_mH6CUvohrQ.gif',
        output: 'public/portfolios/ranking/ranking-demo',
        priority: '🟢 LOW (2.2MB)'
    }
];

// Add Homebrew path to PATH explicitly for this script execution
const env = {
    ...process.env,
    PATH: `/opt/homebrew/bin:/usr/local/bin:${process.env.PATH}`
};

console.log('🎬 Starting GIF to Video Conversion...');
console.log('----------------------------------------');

let savedSpace = 0;

for (const task of GIFS_TO_CONVERT) {
    const inputPath = path.resolve(task.input);

    if (!fs.existsSync(inputPath)) {
        console.warn(`⚠️ Skipped (File not found): ${task.input}`);
        continue;
    }

    const outputMp4 = path.resolve(`${task.output}.mp4`);
    const outputWebm = path.resolve(`${task.output}.webm`);

    const initialSize = fs.statSync(inputPath).size;
    console.log(`\nProcessing ${task.input} (${(initialSize / 1024 / 1024).toFixed(2)} MB)`);

    try {
        // Convert to MP4
        console.log('  Converting to MP4...');
        execSync(`ffmpeg -y -i "${inputPath}" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -crf 23 -preset medium "${outputMp4}"`, { stdio: 'ignore', env });

        // Convert to WebM
        console.log('  Converting to WebM...');
        execSync(`ffmpeg -y -i "${inputPath}" -c:v libvpx-vp9 -b:v 0 -crf 30 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -deadline realtime -cpu-used 4 "${outputWebm}"`, { stdio: 'ignore', env });

        const mp4Size = fs.statSync(outputMp4).size;
        const webmSize = fs.statSync(outputWebm).size;

        console.log(`  ✅ Done!`);
        console.log(`     MP4:  ${(mp4Size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`     WebM: ${(webmSize / 1024 / 1024).toFixed(2)} MB`);

        const saved = initialSize - webmSize;
        savedSpace += saved;
        console.log(`     Saved: ${(saved / 1024 / 1024).toFixed(2)} MB 🚀`);

    } catch (err) {
        console.error(`  ❌ Failed to convert ${task.input}:`, err.message);
    }
}

console.log('----------------------------------------');
console.log(`🎉 Optimization Complete! Total space saved: ${(savedSpace / 1024 / 1024).toFixed(2)} MB`);
console.log('You can now verify the videos and delete the original .gif files.');

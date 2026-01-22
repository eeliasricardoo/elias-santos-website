import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const svgPath = path.join(publicDir, 'favicon.svg');

if (!fs.existsSync(svgPath)) {
    console.error('Error: public/favicon.svg not found!');
    process.exit(1);
}

const svgBuffer = fs.readFileSync(svgPath);

async function generate() {
    console.log('Generating favicons from SVG...');

    // 1. favicon.png (High res for multiple uses)
    await sharp(svgBuffer)
        .resize(512, 512)
        .png()
        .toFile(path.join(publicDir, 'favicon.png'));
    console.log('✓ Created public/favicon.png (512x512)');

    // 2. favicon.ico (32x32 fallback)
    // Note: Writing PNG buffer to .ico extension is widely supported by modern browsers
    await sharp(svgBuffer)
        .resize(32, 32)
        .png()
        .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ Created public/favicon.ico (32x32)');

    // 3. five-icon.png (User mentioned this specific file)
    await sharp(svgBuffer)
        .resize(512, 512)
        .png()
        .toFile(path.join(publicDir, 'five-icon.png'));
    console.log('✓ Created public/five-icon.png (512x512)');

    // 4. apple-touch-icon (Standard name)
    await sharp(svgBuffer)
        .resize(180, 180)
        .png()
        .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Created public/apple-touch-icon.png (180x180)');
}

generate().catch(err => {
    console.error('Failed to generate favicons:', err);
    process.exit(1);
});

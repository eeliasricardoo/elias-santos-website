#!/usr/bin/env node

/**
 * WebP Resize Script
 * Resizes existing WebP images to optimal dimensions for web display
 * 
 * Usage: node scripts/resize-webp.mjs
 */

import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '../public/portfolios');
const MAX_WIDTH = 800; // Optimal width for portfolio card images
const QUALITY = 85; // High quality WebP

async function resizeWebPImage(filePath) {
    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // Only resize if wider than max width
        if (metadata.width && metadata.width > MAX_WIDTH) {
            const originalSize = (await stat(filePath)).size;

            // Create temp file
            const tempPath = filePath + '.temp';

            await image
                .resize(MAX_WIDTH, null, {
                    fit: 'inside',
                    withoutEnlargement: true,
                })
                .webp({ quality: QUALITY })
                .toFile(tempPath);

            const newSize = (await stat(tempPath)).size;
            const savings = originalSize - newSize;
            const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
            const savingsKB = (savings / 1024).toFixed(1);

            // Replace original with resized
            await rename(tempPath, filePath);

            console.log(`✅ Resized ${filePath}`);
            console.log(`   ${metadata.width}px → ${MAX_WIDTH}px`);
            console.log(`   Saved: ${savingsKB} KB (${savingsPercent}% reduction)\n`);

            return { savings, savingsPercent };
        } else {
            console.log(`⏭️  Skipped ${filePath} (already optimal: ${metadata.width}px)\n`);
            return { savings: 0, savingsPercent: 0 };
        }
    } catch (error) {
        console.error(`❌ Error resizing ${filePath}:`, error.message);
        return { savings: 0, savingsPercent: 0 };
    }
}

async function processDirectory(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    let totalSavings = 0;
    let filesProcessed = 0;

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            const result = await processDirectory(fullPath);
            totalSavings += result.totalSavings;
            filesProcessed += result.filesProcessed;
        } else if (entry.isFile() && entry.name.endsWith('.webp')) {
            const result = await resizeWebPImage(fullPath);
            totalSavings += result.savings;
            if (result.savings > 0) filesProcessed++;
        }
    }

    return { totalSavings, filesProcessed };
}

async function main() {
    console.log('🖼️  Resizing oversized WebP images...\n');
    console.log(`Target width: ${MAX_WIDTH}px`);
    console.log(`Quality: ${QUALITY}\n`);

    const { totalSavings, filesProcessed } = await processDirectory(PUBLIC_DIR);

    console.log('═══════════════════════════════════════');
    console.log('✨ Resize complete!');
    console.log(`📊 Files resized: ${filesProcessed}`);
    console.log(`💾 Total saved: ${(totalSavings / 1024).toFixed(1)} KB`);
    console.log('═══════════════════════════════════════');
}

main().catch(console.error);

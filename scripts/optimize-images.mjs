#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts and optimizes images for better web performance
 * 
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '../public');
const OPTIMIZED_DIR = join(PUBLIC_DIR, 'optimized');

// Image optimization settings
const SIZES = {
    hero: { width: 256, quality: 85 }, // Profile photo
    portfolio: { width: 800, quality: 80 }, // Portfolio images
    thumbnail: { width: 400, quality: 75 }, // Thumbnails
};

/**
 * Optimize a single image
 */
async function optimizeImage(inputPath, outputPath, options = {}) {
    const { width = 1920, quality = 80, format = 'webp' } = options;

    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();

        // Skip if already optimized or too small
        if (metadata.width <= width && metadata.format === format) {
            console.log(`⏭️  Skipping ${inputPath} (already optimized)`);
            return;
        }

        // Create output directory if it doesn't exist
        await mkdir(dirname(outputPath), { recursive: true });

        // Optimize and convert
        await image
            .resize(width, null, {
                fit: 'inside',
                withoutEnlargement: true,
            })
        [format]({ quality })
            .toFile(outputPath);

        const stats = await stat(outputPath);
        const originalStats = await stat(inputPath);
        const savings = ((1 - stats.size / originalStats.size) * 100).toFixed(1);

        console.log(
            `✅ Optimized ${inputPath} → ${outputPath} (${savings}% smaller)`
        );
    } catch (error) {
        console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    }
}

/**
 * Process all images in a directory
 */
async function processDirectory(dir, options = {}) {
    try {
        const entries = await readdir(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = join(dir, entry.name);

            if (entry.isDirectory()) {
                await processDirectory(fullPath, options);
            } else if (entry.isFile()) {
                const ext = extname(entry.name).toLowerCase();

                if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                    const outputPath = fullPath.replace(
                        /\.(jpg|jpeg|png)$/i,
                        `.${options.format || 'webp'}`
                    );

                    await optimizeImage(fullPath, outputPath, options);
                }
            }
        }
    } catch (error) {
        console.error(`❌ Error processing directory ${dir}:`, error.message);
    }
}

/**
 * Main execution
 */
async function main() {
    console.log('🖼️  Starting image optimization...\n');

    // Optimize profile photo
    console.log('📸 Optimizing profile photo...');
    const profilePhotoPath = join(PUBLIC_DIR, 'profile-photo.jpg');

    try {
        // Create WebP version
        await optimizeImage(
            profilePhotoPath,
            join(PUBLIC_DIR, 'profile-photo.webp'),
            { ...SIZES.hero, format: 'webp' }
        );

        // Create AVIF version (better compression)
        await optimizeImage(
            profilePhotoPath,
            join(PUBLIC_DIR, 'profile-photo.avif'),
            { ...SIZES.hero, format: 'avif' }
        );
    } catch (error) {
        console.error('❌ Error optimizing profile photo:', error.message);
    }

    // Optimize portfolio images
    console.log('\n📁 Optimizing portfolio images...');
    const portfoliosDir = join(PUBLIC_DIR, 'portfolios');

    try {
        await processDirectory(portfoliosDir, {
            ...SIZES.portfolio,
            format: 'webp',
        });
    } catch (error) {
        console.error('❌ Error optimizing portfolio images:', error.message);
    }

    console.log('\n✨ Image optimization complete!');
}

main().catch(console.error);

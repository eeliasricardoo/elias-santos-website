#!/usr/bin/env node

/**
 * Image Optimization Script
 * Automatically optimizes all images in the public directory
 * 
 * This script:
 * 1. Finds large images (>100KB)
 * 2. Converts them to modern formats (WebP, AVIF)
 * 3. Generates responsive sizes
 * 4. Reports file size savings
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, relative, dirname, extname, basename } from 'path';
import { existsSync } from 'fs';

const PUBLIC_DIR = './public';
const OPTIMIZED_DIR = './public/optimized';
const MAX_WIDTH = 1920; // Maximum width for images
const QUALITY = 80; // Quality for WebP/AVIF
const SIZES = [640, 750, 828, 1080, 1200, 1920]; // Responsive sizes

// File size threshold (5KB)
const SIZE_THRESHOLD = 5 * 1024;

async function getAllImages(dir) {
    const images = [];
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = join(dir, entry.name);

        if (entry.isDirectory()) {
            // Skip node_modules and optimized directory
            if (entry.name === 'node_modules' || entry.name === 'optimized') {
                continue;
            }
            images.push(...(await getAllImages(fullPath)));
        } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
            const stats = await stat(fullPath);
            if (stats.size > SIZE_THRESHOLD) {
                images.push({
                    path: fullPath,
                    size: stats.size,
                    name: entry.name,
                });
            }
        }
    }

    return images;
}

async function optimizeImage(imagePath) {
    console.log(`\n📷 Optimizing: ${relative(PUBLIC_DIR, imagePath)}`);

    const ext = extname(imagePath);
    const base = basename(imagePath, ext);
    const relativeDir = dirname(relative(PUBLIC_DIR, imagePath));
    const outputDir = join(OPTIMIZED_DIR, relativeDir);

    // Create output directory if it doesn't exist
    if (!existsSync(outputDir)) {
        await mkdir(outputDir, { recursive: true });
    }

    const image = sharp(imagePath);
    const metadata = await image.metadata();

    console.log(`  Original: ${(metadata.size / 1024).toFixed(0)}KB (${metadata.width}x${metadata.height})`);

    let totalSaved = metadata.size || 0;
    let optimizedCount = 0;

    // Generate WebP version
    try {
        const webpPath = join(outputDir, `${base}.webp`);
        await image
            .resize(MAX_WIDTH, null, {
                withoutEnlargement: true,
                fit: 'inside',
            })
            .webp({ quality: QUALITY })
            .toFile(webpPath);

        const webpStats = await stat(webpPath);
        console.log(`  ✓ WebP: ${(webpStats.size / 1024).toFixed(0)}KB (${((1 - webpStats.size / (metadata.size || 1)) * 100).toFixed(0)}% smaller)`);
        totalSaved -= webpStats.size;
        optimizedCount++;
    } catch (error) {
        console.error(`  ✗ Failed to create WebP:`, error.message);
    }

    // Generate AVIF version (best compression)
    try {
        const avifPath = join(outputDir, `${base}.avif`);
        await image
            .resize(MAX_WIDTH, null, {
                withoutEnlargement: true,
                fit: 'inside',
            })
            .avif({ quality: QUALITY })
            .toFile(avifPath);

        const avifStats = await stat(avifPath);
        console.log(`  ✓ AVIF: ${(avifStats.size / 1024).toFixed(0)}KB (${((1 - avifStats.size / (metadata.size || 1)) * 100).toFixed(0)}% smaller)`);
        optimizedCount++;
    } catch (error) {
        console.error(`  ✗ Failed to create AVIF:`, error.message);
    }

    // Generate responsive sizes for WebP
    for (const size of SIZES) {
        if ((metadata.width || 0) > size) {
            try {
                const responsivePath = join(outputDir, `${base}-${size}w.webp`);
                await sharp(imagePath)
                    .resize(size, null, {
                        withoutEnlargement: true,
                        fit: 'inside',
                    })
                    .webp({ quality: QUALITY })
                    .toFile(responsivePath);

                optimizedCount++;
            } catch (error) {
                // Silently skip failed responsive images
            }
        }
    }

    return {
        original: metadata.size || 0,
        saved: totalSaved,
        count: optimizedCount,
    };
}

async function main() {
    console.log('🚀 Starting image optimization...\n');
    console.log(`📁 Scanning: ${PUBLIC_DIR}`);
    console.log(`💾 Output: ${OPTIMIZED_DIR}\n`);

    const images = await getAllImages(PUBLIC_DIR);

    if (images.length === 0) {
        console.log('✅ No large images found (all images are < 100KB)');
        return;
    }

    console.log(`Found ${images.length} large images to optimize:\n`);

    let totalOriginalSize = 0;
    let totalSaved = 0;
    let totalOptimized = 0;

    for (const image of images) {
        try {
            const result = await optimizeImage(image.path);
            totalOriginalSize += result.original;
            totalSaved += result.saved;
            totalOptimized += result.count;
        } catch (error) {
            console.error(`❌ Failed to optimize ${image.name}:`, error.message);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 Optimization Summary:');
    console.log('='.repeat(60));
    console.log(`  Images processed: ${images.length}`);
    console.log(`  Versions created: ${totalOptimized}`);
    console.log(`  Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Space saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
    console.log(`  Reduction: ${((totalSaved / totalOriginalSize) * 100).toFixed(0)}%`);
    console.log('='.repeat(60));
    console.log('\n✅ Optimization complete!');
    console.log('\n💡 Tips:');
    console.log('  1. Use the optimized images in /public/optimized/');
    console.log('  2. Update your <img> tags to use <picture> with WebP/AVIF');
    console.log('  3. Consider using the OptimizedImage component');
}

main().catch(console.error);

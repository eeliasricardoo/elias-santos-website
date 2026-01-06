import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const filesToOptimize = [
    { input: 'public/profile-photo.jpg', output: 'public/profile-photo.webp', width: 400 },
    { input: 'public/images/WhatsApp Image 2025-07-18 at 02.01.50_8d26a9db.jpg', output: 'public/images/profile-alt.webp', width: 800 },

    // Ranking
    { input: 'public/portfolios/ranking/Alice.png', output: 'public/portfolios/ranking/Alice.webp', width: 800 },
    { input: 'public/portfolios/ranking/Bob.png', output: 'public/portfolios/ranking/Bob.webp', width: 800 },
    { input: 'public/portfolios/ranking/Carla.png', output: 'public/portfolios/ranking/Carla.webp', width: 800 },

    // Fila Atendimento
    { input: 'public/portfolios/fila-atendimento/8.png', output: 'public/portfolios/fila-atendimento/8.webp', width: 1200 },
    { input: 'public/portfolios/fila-atendimento/9.png', output: 'public/portfolios/fila-atendimento/9.webp', width: 1200 },
    { input: 'public/portfolios/fila-atendimento/10.png', output: 'public/portfolios/fila-atendimento/10.webp', width: 1200 },

    // Ventus
    { input: 'public/portfolios/ventus/Imge.png', output: 'public/portfolios/ventus/Imge.webp', width: 1200 },
    { input: 'public/portfolios/ventus/v10.png', output: 'public/portfolios/ventus/v10.webp', width: 1200 },
    { input: 'public/portfolios/ventus/v4.png', output: 'public/portfolios/ventus/v4.webp', width: 1200 },
];

async function optimize() {
    console.log('Starting optimization...');

    for (const file of filesToOptimize) {
        try {
            const inputPath = path.resolve(process.cwd(), file.input);
            const outputPath = path.resolve(process.cwd(), file.output);

            // Check if input exists
            try {
                await fs.access(inputPath);
            } catch {
                console.warn(`⚠️ Skipped: ${file.input} (not found)`);
                continue;
            }

            console.log(`Optimizing ${file.input} -> ${file.output}`);

            await sharp(inputPath)
                .resize(file.width, null, {
                    fit: 'inside',
                    withoutEnlargement: true
                })
                .webp({ quality: 80 })
                .toFile(outputPath);

            console.log(`✅ Generated ${file.output}`);

        } catch (error) {
            console.error(`❌ Error optimizing ${file.input}:`, error);
        }
    }
}

optimize();

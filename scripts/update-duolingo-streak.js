#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Caminho do arquivo
const configPath = path.join(__dirname, '..', 'lib', 'duolingo-streak.ts');

// Lê o arquivo atual
const content = fs.readFileSync(configPath, 'utf8');

// Extrai o número atual
const match = content.match(/CURRENT_DUOLINGO_STREAK = (\d+)/);
const currentStreak = match ? parseInt(match[1]) : 603;

// Incrementa o streak
const newStreak = currentStreak + 1;

// Atualiza o arquivo
const newContent = content.replace(
  /CURRENT_DUOLINGO_STREAK = \d+/,
  `CURRENT_DUOLINGO_STREAK = ${newStreak}`
);

fs.writeFileSync(configPath, newContent, 'utf8');

console.log(`✅ Streak atualizado: ${currentStreak} → ${newStreak}`); 
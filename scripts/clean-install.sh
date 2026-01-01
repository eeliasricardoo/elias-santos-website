#!/bin/bash

# Script de limpeza profunda para resolver problemas de performance
# Este script limpa todos os caches e reinstala dependências

echo "🧹 Limpando projeto Next.js..."

# 1. Limpar .next
echo "📁 Removendo pasta .next..."
rm -rf .next

# 2. Limpar node_modules
echo "📦 Removendo node_modules..."
rm -rf node_modules

# 3. Limpar pnpm cache
echo "🗑️  Limpando cache do pnpm..."
pnpm store prune

# 4. Limpar Next.js cache
echo "🔄 Limpando cache do Next.js..."
rm -rf .next/cache

# 5. Reinstalar dependências
echo "⬇️  Reinstalando dependências com pnpm..."
pnpm install --prefer-frozen-lockfile

echo "✅ Limpeza concluída!"
echo "💡 Agora execute: pnpm dev"

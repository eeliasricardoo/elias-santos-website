const fs = require('fs');
const path = require('path');

// Função para converter img para Image do Next.js
function convertImgToImage(content) {
  // Adicionar import se não existir
  if (!content.includes("import Image from 'next/image'") && content.includes('<img')) {
    content = content.replace(
      /import React from 'react';/,
      "import React from 'react';\nimport Image from 'next/image';"
    );
  }

  // Converter img para Image com otimizações
  content = content.replace(
    /<img\s+src=['"]([^'"]+)['"]\s+alt=['"]([^'"]+)['"]\s+className=['"]([^'"]+)['"]\s*\/?>/g,
    (match, src, alt, className) => {
      return `<Image
                  src='${src}'
                  alt='${alt}'
                  width={1200}
                  height={800}
                  className='${className.replace('object-fill', 'object-cover')}'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px'
                  quality={85}
                  placeholder='blur'
                  blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
                />`;
    }
  );

  return content;
}

// Função para processar arquivos recursivamente
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('<img')) {
          console.log(`Processando: ${filePath}`);
          const optimizedContent = convertImgToImage(content);
          fs.writeFileSync(filePath, optimizedContent);
          console.log(`✅ Otimizado: ${filePath}`);
        }
      } catch (error) {
        console.error(`❌ Erro ao processar ${filePath}:`, error.message);
      }
    }
  });
}

// Executar otimização
const componentsDir = path.join(__dirname, '..', 'components', 'portfolio');
console.log('🚀 Iniciando otimização de imagens...');
processDirectory(componentsDir);
console.log('✅ Otimização concluída!'); 
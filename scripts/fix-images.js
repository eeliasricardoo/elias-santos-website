const fs = require('fs');
const path = require('path');

// Função para corrigir imagens nos componentes do portfolio
function fixImages(content) {
  // Remover placeholder e blurDataURL que podem estar causando problemas
  content = content.replace(
    /placeholder='blur'[\s\S]*?blurDataURL='[^']*'/g,
    ''
  );
  
  // Trocar object-cover por object-contain
  content = content.replace(
    /className='[^']*object-cover[^']*'/g,
    (match) => {
      return match.replace('object-cover', 'object-contain');
    }
  );
  
  // Adicionar priority={false} se não existir
  content = content.replace(
    /quality={85}(?![\s\S]*?priority)/g,
    'quality={85}\n                  priority={false}'
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
        
        if (content.includes('object-cover') || content.includes('placeholder=\'blur\'')) {
          console.log(`Corrigindo: ${filePath}`);
          const fixedContent = fixImages(content);
          fs.writeFileSync(filePath, fixedContent);
          console.log(`✅ Corrigido: ${filePath}`);
        }
      } catch (error) {
        console.error(`❌ Erro ao processar ${filePath}:`, error.message);
      }
    }
  });
}

// Executar correção
const componentsDir = path.join(__dirname, '..', 'components', 'portfolio');
console.log('🔧 Iniciando correção das imagens...');
processDirectory(componentsDir);
console.log('✅ Correção concluída!'); 
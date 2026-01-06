# 🎬 Guia de Conversão de GIFs para Vídeos

## ⚠️ Situação Atual

O sistema não possui `ffmpeg` instalado, que é a ferramenta recomendada para converter GIFs para vídeos.

## 🛠️ Opção 1: Instalar ffmpeg (RECOMENDADO)

### Via Homebrew (macOS):
```bash
# Instalar Homebrew primeiro (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Depois instalar ffmpeg
brew install ffmpeg
```

### Depois de instalar, execute o script automático:
```bash
node scripts/convert-gifs.mjs
```

---

## 🌐 Opção 2: Converter Online (Rápido, mas manual)

Use um desses serviços gratuitos:

### CloudConvert (Recomendado):
1. Acesse: https://cloudconvert.com/gif-to-mp4
2. Faça upload dos GIFs
3. Configure:
   - Format: MP4
   - Quality: Medium (suficiente)
   - Video Codec: H.264
   - Audio: Remove (GIFs não têm áudio)
4. Baixe os vídeos convertidos

### EZGIF.com:
1. Acesse: https://ezgif.com/gif-to-mp4
2. Upload do GIF
3. Convert to MP4
4. Download

---

## 📋 GIFs para Converter (em ordem de prioridade):

### 🔴 Prioridade ALTA (53MB total):
1. `public/portfolios/framer ui.gif` - **30MB**
   - Converter para: `public/portfolios/framer-ui.mp4`
   - Economia esperada: ~27MB (→ 2-3MB)

2. `public/portfolios/oliver.gif` - **21MB**
   - Converter para: `public/portfolios/oliver.mp4`
   - Economia esperada: ~19MB (→ 1-2MB)

### 🟡 Prioridade MÉDIA (21MB total):
3. `public/documentation/v11.gif` - **13MB**
   - Converter para: `public/documentation/v11.mp4`
   - Economia esperada: ~12MB (→ 1MB)

4. `public/documentation/v10.gif` - **7.9MB**
   - Converter para: `public/documentation/v10.mp4`
   - Economia esperada: ~7MB (→ 0.8MB)

### 🟢 Prioridade BAIXA (2.2MB):
5. `public/portfolios/ranking.gif` - **2.2MB**
   - Converter para: `public/portfolios/ranking.mp4`
   - Economia esperada: ~2MB (→ 0.2MB)

**ECONOMIA TOTAL ESPERADA: ~67MB → ~5-8MB (-88%)**

---

## 🎯 Opção 3: Comando ffmpeg Manual (depois de instalar)

Para cada GIF, execute:

```bash
# Converter para MP4 (compatibilidade máxima)
ffmpeg -i "public/portfolios/framer ui.gif" \
  -movflags faststart \
  -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -crf 23 \
  -preset medium \
  public/portfolios/framer-ui.mp4

# Converter para WebM (melhor qualidade/tamanho)
ffmpeg -i "public/portfolios/framer ui.gif" \
  -c:v libvpx-vp9 \
  -b:v 0 \
  -crf 30 \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  public/portfolios/framer-ui.webm
```

Parâmetros explicados:
- `-movflags faststart`: Permite streaming antes do download completo
- `-pix_fmt yuv420p`: Compatibilidade com todos navegadores
- `-vf "scale=..."`: Garante dimensões pares (requerido por alguns codecs)
- `-crf 23`: Qualidade (18-28, menor = melhor qualidade)
- `-preset medium`: Balanço velocidade/compressão

---

## 🔄 Depois da Conversão:

### 1. Atualizar os componentes para usar `<video>` ao invés de `<img>`:

**ANTES:**
```tsx
<img src="/portfolios/framer ui.gif" alt="Demo" />
```

**DEPOIS:**
```tsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="w-full h-auto"
>
  <source src="/portfolios/framer-ui.webm" type="video/webm" />
  <source src="/portfolios/framer-ui.mp4" type="video/mp4" />
  {/* Fallback para navegadores muito antigos */}
  Seu navegador não suporta vídeos.
</video>
```

### 2. Testar no build:
```bash
pnpm build
pnpm preview
```

### 3. Deletar GIFs antigos (depois de confirmar que tudo funciona):
```bash
rm "public/portfolios/framer ui.gif"
rm public/portfolios/oliver.gif
rm public/documentation/v11.gif
rm public/documentation/v10.gif
rm public/portfolios/ranking.gif
```

---

## 📊 Impacto Esperado:

| Métrica | Antes | Depois | Melhoria |
|---------|-------|--------|----------|
| **Tamanho total de mídia** | ~74MB | ~7MB | **-67MB (-90%)** 🚀 |
| **Tempo de carregamento** | ~15-30s | ~1-2s | **-90%** ⚡ |
| **First Contentful Paint** | 6-8s | 2-3s | **-60%** |
| **Performance Score** | 40-60 | 80-95 | **+50-100%** |

---

## ✅ Checklist de Ação:

- [ ] Instalar ffmpeg (`brew install ffmpeg`) OU usar conversor online
- [ ] Converter `framer ui.gif` → `.mp4` e `.webm`
- [ ] Converter `oliver.gif` → `.mp4` e `.webm`  
- [ ] Converter `v11.gif` → `.mp4` e `.webm`
- [ ] Converter `v10.gif` → `.mp4` e `.webm`
- [ ] Converter `ranking.gif` → `.mp4` e `.webm`
- [ ] Atualizar componentes para usar `<video>` tags
- [ ] Testar build e preview
- [ ] Deletar GIFs antigos
- [ ] Fazer commit das mudanças

---

**Quer que eu:**
1. 🔧 Crie o script de conversão automático (precisa instalar ffmpeg)
2. 📝 Mostre exatamente quais arquivos precisam ser atualizados
3. 🌐 Forneça instruções detalhadas para conversão online

Escolha uma opção!

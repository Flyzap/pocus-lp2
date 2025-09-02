# 🖼️ Sistema de Gerenciamento de Imagens

## Como Alterar as Imagens da Landing Page

Agora você pode facilmente alterar todas as imagens da sua landing page através de uma interface administrativa simples e intuitiva.

### 🚀 Acesso Rápido

1. **Via URL**: Acesse diretamente: `http://localhost:5173/admin`
2. **Via Footer**: No rodapé da landing page, clique em "Painel Admin" (canto inferior direito)

### 📸 Imagens Disponíveis

O sistema permite alterar 3 imagens principais:

1. **Imagem Principal (Hero)** - A imagem de destaque no topo da página
2. **Foto do Instrutor** - Foto de perfil do instrutor
3. **Imagem de Transformação** - Ilustra a transformação profissional

### 🔧 Como Usar

1. **Acesse o Painel Admin** através de uma das formas acima
2. **Selecione uma nova imagem** clicando em "Selecionar Nova Imagem"
3. **Visualize o preview** da nova imagem antes de confirmar
4. **Confirme a alteração** clicando em "Confirmar Alteração"
5. **Pronto!** A imagem foi atualizada na landing page

### ✅ Formatos Aceitos

- **JPG/JPEG** (recomendado para fotos)
- **PNG** (ideal para imagens com transparência)
- **WebP** (formato otimizado)
- **Tamanho máximo**: 10MB por imagem (aumentado para melhor qualidade)

### 📐 Dimensões Recomendadas (Para Máxima Qualidade)

- **Imagem Principal**: 1920x1280px ou superior (proporção 16:9)
- **Foto do Instrutor**: 1200x1200px ou superior (formato quadrado)
- **Imagem de Transformação**: 1920x1280px ou superior (proporção 16:9)

> 💡 **Dica**: Use dimensões maiores que as recomendadas para garantir nitidez em telas de alta resolução!

### 💾 Armazenamento

- As imagens são salvas **localmente no seu navegador**
- As alterações permanecem até você limpar os dados do navegador
- Para uma solução permanente, substitua os arquivos em `src/assets/`

### 🔄 Restaurar Imagens

- **Restaurar uma imagem**: Use o botão individual em cada seção
- **Restaurar todas**: Use o botão "Restaurar Todas" no topo do painel

### 🛠️ Solução Permanente (Para Desenvolvedores)

Para manter as alterações de forma permanente:

1. Substitua os arquivos na pasta `src/assets/`:
   - `instructor-hero.jpg`
   - `instructor-profile.jpg`
   - `transformation.jpg`

2. Mantenha os mesmos nomes de arquivo para compatibilidade

### 🔍 Melhorando a Qualidade das Imagens

#### Para obter a melhor qualidade possível:

1. **Resolução Alta**: Use imagens com pelo menos o dobro das dimensões recomendadas
2. **Formato Adequado**: 
   - JPG para fotos (menor tamanho, boa qualidade)
   - PNG para imagens com transparência
   - WebP para máxima otimização
3. **Qualidade de Compressão**: Se possível, use compressão mínima (90-100%)
4. **Fonte Original**: Prefira imagens não comprimidas ou de alta qualidade

#### Otimizações Automáticas Aplicadas:

- ✅ Renderização de alta qualidade forçada via CSS
- ✅ Prevenção de blur durante redimensionamento
- ✅ Otimização para telas Retina/4K
- ✅ Carregamento prioritário para imagens importantes

### 💡 Dicas Gerais

- Use imagens de alta qualidade para melhor resultado
- Mantenha as proporções recomendadas para melhor layout
- Teste em diferentes dispositivos para garantir responsividade
- Imagens maiores resultam em melhor qualidade (até 10MB)

---

**Desenvolvido com React + TypeScript + Vite**

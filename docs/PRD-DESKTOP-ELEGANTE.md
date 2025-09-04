# PRD - Reestruturação Desktop Elegante

## 🎯 OBJETIVO
Reestruturar COMPLETAMENTE a versão desktop para ser elegante, proporcional e profissional, removendo todos os elementos gigantescos e organizando o layout de forma sofisticada.

## 🚨 PROBLEMAS IDENTIFICADOS
- ✅ Elementos GIGANTESCOS no desktop
- ✅ Cards muito grandes e desproporcionais  
- ✅ Espaçamentos excessivos
- ✅ Textos muito grandes
- ✅ Layout mal aproveitando espaço
- ✅ Falta de hierarquia visual elegante

## 🎨 NOVA ESTRUTURA DESKTOP

### 1. TAMANHOS PROPORCIONAIS
```
Mobile: Base (text-base = 16px)
Desktop: Refinado (text-lg = 18px máximo para corpo)
```

### 2. CONTAINERS ELEGANTES
```
Mobile: container mx-auto px-4
Desktop: max-w-5xl mx-auto px-8 (não mais max-w-7xl+)
```

### 3. ESPAÇAMENTOS REFINADOS
```
Mobile: py-12 gap-6
Desktop: py-16 gap-8 (não mais py-20+)
```

### 4. HIERARQUIA DE TEXTOS
```
H1 Hero: text-3xl lg:text-4xl (não mais text-6xl+)
H2 Sections: text-2xl lg:text-3xl
H3 Cards: text-lg lg:text-xl
Body: text-base lg:text-lg
Small: text-sm
```

## 📋 SEÇÕES A REESTRUTURAR

### 1. 🏆 BENEFITS SECTION
**PROBLEMA:** Cards gigantescos, muito espaço
**SOLUÇÃO:**
- Grid 3 colunas no desktop (não 2)
- Cards compactos (p-6 não p-8+)
- Ícones menores (w-12 h-12)
- Textos proporcionais

### 2. 📊 SOCIAL PROOF SECTION
**PROBLEMA:** Elementos desproporcionais
**SOLUÇÃO:**
- Testimonials em grid 3 colunas
- Cards menores e elegantes
- Estatísticas em linha horizontal

### 3. 🎯 TRANSFORMATION SECTION
**PROBLEMA:** Antes/Depois muito grande
**SOLUÇÃO:**
- Layout mais compacto
- Textos menores
- Cards side-by-side elegantes

### 4. ❓ FAQ SECTION
**PROBLEMA:** Accordion muito espaçado
**SOLUÇÃO:**
- 2 colunas no desktop
- Espaçamento reduzido
- Textos proporcionais

### 5. 👨‍⚕️ INSTRUCTOR SECTION
**PROBLEMA:** Imagem e texto gigantescos
**SOLUÇÃO:**
- Imagem max 300px
- Texto em 2 colunas equilibradas
- Layout mais compacto

## 🎨 DESIGN SYSTEM DESKTOP

### CONTAINERS
```css
.section-container {
  max-width: 1200px; /* 5xl */
  margin: 0 auto;
  padding: 0 2rem;
}
```

### CARDS
```css
.elegant-card {
  padding: 1.5rem; /* p-6 */
  border-radius: 0.75rem;
  box-shadow: subtle;
}
```

### GRIDS
```css
Benefits: grid-cols-1 lg:grid-cols-3
FAQ: grid-cols-1 lg:grid-cols-2  
Testimonials: grid-cols-1 lg:grid-cols-3
```

### SPACING
```css
Section: py-16 gap-8
Cards: space-y-6
Elements: gap-4
```

## 🛠️ IMPLEMENTAÇÃO

### FASE 1: FOUNDATIONS
1. Criar CSS base para desktop elegante
2. Definir containers proporcionais
3. Estabelecer hierarquia de textos

### FASE 2: SECTIONS
1. BenefitsSection - Grid 3 colunas compacto
2. SocialProofSection - Testimonials elegantes
3. TransformationSection - Layout otimizado
4. FAQSection - 2 colunas desktop
5. InstructorSection - Layout equilibrado

### FASE 3: REFINEMENTS
1. Ajustar espaçamentos
2. Otimizar textos
3. Polir animações
4. Testar responsividade

## 📐 ESPECIFICAÇÕES TÉCNICAS

### BREAKPOINTS
```
sm: 640px
md: 768px  
lg: 1024px (principal desktop)
xl: 1280px (desktop grande)
```

### CONTAINERS POR SEÇÃO
```
Hero: max-w-4xl
Benefits: max-w-5xl
Social Proof: max-w-5xl
Transformation: max-w-4xl
FAQ: max-w-4xl
Instructor: max-w-5xl
```

### GRID SYSTEM
```
1 coluna: mobile
2 colunas: tablet (md:)
3 colunas: desktop (lg:)
```

## ✅ CRITÉRIOS DE SUCESSO

1. **Elegância:** Layout profissional e sofisticado
2. **Proporção:** Elementos bem dimensionados
3. **Hierarquia:** Textos e espaços balanceados
4. **Performance:** Carregamento rápido
5. **Responsividade:** Mobile perfeito mantido

## 🚀 RESULTADO ESPERADO

Uma landing page desktop **ELEGANTE** e **PROPORCIONAL** que:
- Aproveita bem o espaço disponível
- Mantém o usuário engajado
- Transmite profissionalismo
- Facilita a leitura e conversão
- Mantém mobile perfeito

---

**Status:** 🔄 Pronto para implementação
**Prioridade:** 🔥 CRÍTICA - Desktop atual inaceitável
**Timeline:** Implementação imediata necessária

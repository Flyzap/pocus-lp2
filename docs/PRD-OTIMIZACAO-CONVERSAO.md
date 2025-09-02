# 📊 PRD - Otimização de Conversão da Landing Page

**Versão:** 1.0  
**Data:** Janeiro 2025  
**Objetivo:** Transformar landing page em máquina de captura de WhatsApp para ebook gratuito

---

## 🎯 **VISÃO GERAL**

### **Problema Atual**
A landing page está estruturada como venda de curso, mas o objetivo é capturar WhatsApp para distribuição de ebook gratuito. Isso gera confusão na jornada do usuário e baixa conversão.

### **Objetivo Principal**
**Maximizar a captura de números de WhatsApp** através de um ebook irresistível sobre POCUS, criando uma experiência focada e sem fricção.

### **KPIs de Sucesso**
- **Taxa de conversão**: >15% (meta: 25%)
- **Bounce rate**: <40%
- **Time on page**: >2 minutos
- **WhatsApp capturas/dia**: Meta de 50+ leads qualificados

---

## 🏗️ **NOVA ESTRUTURA DA PÁGINA**

### **1. Hero Section Otimizada**
**Objetivo:** Captura imediata above-the-fold

#### **Elementos Principais:**
- **Headline Principal**: Foco no resultado do ebook
- **Subheadline**: Benefício específico e mensurável  
- **Formulário Imediato**: Apenas campo WhatsApp
- **Prova Social**: Contador de downloads
- **Urgência**: Timer ou escassez temporal

#### **Copy Sugerida:**
```
HEADLINE: "Domine POCUS em 7 Dias com o Protocolo Completo"
SUBHEADLINE: "Ebook gratuito + PDF de emergência para usar no plantão hoje mesmo"
URGÊNCIA: "⏰ Disponível apenas até 31/01/2025"
PROVA SOCIAL: "📱 12.847 médicos já baixaram"
```

#### **Formulário Hero:**
- **Campo único**: WhatsApp com máscara brasileira
- **Placeholder**: "(11) 99999-9999"
- **Botão**: "QUERO O EBOOK GRÁTIS AGORA"
- **Garantias**: "✅ Download instantâneo ✅ Sem spam ✅ Dados seguros"

---

### **2. Prova Social + Urgência**
**Objetivo:** Validar a oferta e criar FOMO

#### **Elementos:**
- **Contador de Downloads**: Número dinâmico ou estático alto
- **Testimonials Rápidos**: 3-4 frases curtas de médicos
- **Timer de Urgência**: Countdown para fim da promoção
- **Logos**: Hospitais ou instituições (se disponível)

#### **Layout:**
```
[CONTADOR] "12.847 médicos já baixaram"
[DEPOIMENTOS] 3 cards com fotos + frases curtas
[URGÊNCIA] "Restam apenas 2 dias para download"
```

---

### **3. Benefícios do Ebook (Não do Curso)**
**Objetivo:** Focar nos benefícios imediatos do material gratuito

#### **Estrutura:**
- **Título**: "O que você vai receber GRATUITAMENTE"
- **6-8 benefícios** específicos do ebook
- **Visualização**: Prévia das páginas do PDF

#### **Benefícios Sugeridos:**
1. 📋 **Protocolo FAST** - Passo a passo completo
2. 🚨 **Checklist de Emergência** - Para usar no plantão
3. 📊 **Casos Clínicos Ilustrados** - 10 situações reais
4. ⚡ **Guia Rápido de Interpretação** - Referência instantânea
5. 📱 **Versão Mobile** - PDF otimizado para celular
6. 🎥 **Acesso a Aula Bônus** - Vídeo exclusivo de 30min

---

### **4. Sobre o Instrutor (Simplificada)**
**Objetivo:** Autoridade sem desviar da captura

#### **Conteúdo Reduzido:**
- **Foto profissional** (já otimizada)
- **Credenciais essenciais** (3-4 pontos)
- **Autoridade específica** em POCUS
- **SEM biografia longa**

#### **Layout Compacto:**
```
[FOTO] + [3 CREDENCIAIS] + [CTA SECUNDÁRIO]
```

---

### **5. Superação de Objeções (Ebook)**
**Objetivo:** Remover fricção para download

#### **Objeções Específicas:**
1. **"É realmente grátis?"** → Sim, 100% gratuito
2. **"Vão me enviar spam?"** → Apenas conteúdo de valor
3. **"Preciso de experiência?"** → Do zero ao avançado
4. **"Funciona no meu aparelho?"** → Qualquer ultrassom
5. **"Tenho pouco tempo?"** → Leitura de 15 minutos
6. **"Como recebo?"** → WhatsApp instantâneo

---

### **6. Formulário Sticky Mobile**
**Objetivo:** Captura contínua durante scroll

#### **Especificações:**
- **Posição**: Bottom sticky em mobile
- **Trigger**: Após 50% da página
- **Conteúdo**: Campo WhatsApp + Botão
- **Animação**: Slide up suave

---

### **7. FAQ Focado no Ebook**
**Objetivo:** Responder dúvidas sobre o material gratuito

#### **Perguntas Ajustadas:**
1. Como recebo o ebook?
2. Quanto tempo demora para chegar?
3. É realmente gratuito?
4. Posso compartilhar com colegas?
5. Tem mais conteúdo depois?
6. Como tiro dúvidas?

---

### **8. Formulário Final + Footer**
**Objetivo:** Última chance de captura

#### **Elementos:**
- **CTA final forte**
- **Todos os benefícios resumidos**
- **Formulário completo**
- **Garantias reforçadas**

---

## 🛠️ **ESPECIFICAÇÕES TÉCNICAS**

### **Componentes a Modificar:**
1. `HeroSection.tsx` - Reestruturação completa
2. `LeadMagnetSection.tsx` - Mover para Hero
3. `BenefitsSection.tsx` - Focar no ebook
4. `InstructorSection.tsx` - Simplificar
5. `ObjectionsSection.tsx` - Ajustar para ebook
6. `FAQSection.tsx` - Focar no download
7. `TransformationSection.tsx` - Manter como está

### **Novos Componentes:**
1. `SocialProofSection.tsx` - Contador + testimonials
2. `UrgencySection.tsx` - Timer + escassez
3. `StickyFormMobile.tsx` - Formulário flutuante
4. `EbookPreviewSection.tsx` - Prévia do PDF

---

## 📱 **FORMULÁRIO DE CAPTURA**

### **Campo Principal: WhatsApp**
```typescript
interface WhatsAppForm {
  phone: string; // Formato: (11) 99999-9999
  validation: {
    required: true;
    format: "BR_PHONE";
    minLength: 11;
  };
  placeholder: "(11) 99999-9999";
  mask: "(##) #####-####";
}
```

### **Validações:**
- ✅ Formato brasileiro obrigatório
- ✅ DDD válido (11-85)
- ✅ Número com 9 dígitos
- ✅ Não aceitar números falsos (11111-1111)

### **Estados do Botão:**
- **Default**: "QUERO O EBOOK GRÁTIS"
- **Loading**: "ENVIANDO..." + spinner
- **Success**: "✅ EBOOK ENVIADO!"
- **Error**: "❌ ERRO - TENTE NOVAMENTE"

---

## 🎨 **DESIGN SYSTEM**

### **Cores de Conversão:**
- **Primary CTA**: Vermelho atual (alta urgência)
- **Secondary CTA**: Verde (#22C55E) para "gratuito"
- **Warning**: Amarelo (#F59E0B) para urgência
- **Success**: Verde escuro (#16A34A) para confirmação

### **Hierarquia Visual:**
1. **Headline** - 72px bold
2. **Subheadline** - 24px medium
3. **Benefícios** - 18px com ícones
4. **Formulário** - Campo 56px, botão 64px
5. **Prova Social** - 16px com destaque

### **Animações:**
- **Entrada**: Fade in + slide up (300ms)
- **Hover**: Scale 1.05 nos botões
- **Loading**: Spinner + pulse
- **Success**: Confetti micro-interação

---

## 📊 **TRACKING E ANALYTICS**

### **Eventos para Rastrear:**
```typescript
// Visualizações
'page_view_hero'
'form_view_hero'
'form_view_sticky'

// Interações
'form_focus_whatsapp'
'form_submit_attempt'
'form_submit_success'
'form_submit_error'

// Conversões
'whatsapp_captured'
'ebook_delivered'
'user_engaged' // >2min na página
```

### **A/B Tests Futuros:**
1. **Headlines** diferentes
2. **Cores dos botões** (vermelho vs verde)
3. **Urgência** (timer vs escassez)
4. **Formulário** (sticky vs inline)

---

## 🚀 **PLANO DE IMPLEMENTAÇÃO**

### **Fase 1: Core Changes (Prioridade Alta)**
**Prazo: 3-5 dias**

1. ✅ **Hero Section**
   - Redesign completo focado em captura
   - Formulário WhatsApp único
   - Copy otimizada para ebook

2. ✅ **Formulário Sistema**
   - Validação WhatsApp brasileiro
   - Estados visuais (loading, success, error)
   - Integração backend para captura

3. ✅ **Benefits Section**
   - Focar benefícios do ebook
   - Remover informações do curso
   - Adicionar prévia do PDF

### **Fase 2: Enhancements (Prioridade Média)**
**Prazo: 5-7 dias**

4. ✅ **Social Proof**
   - Contador de downloads
   - Testimonials curtos
   - Timer de urgência

5. ✅ **Sticky Form Mobile**
   - Formulário flutuante
   - Animações suaves
   - Trigger baseado em scroll

6. ✅ **Objections & FAQ**
   - Ajustar para foco no ebook
   - Remover referências ao curso
   - Simplificar respostas

### **Fase 3: Advanced Features (Prioridade Baixa)**
**Prazo: 7-10 dias**

7. ✅ **Exit Intent Popup**
   - Modal de última chance
   - Oferta especial
   - Mobile-friendly

8. ✅ **Analytics Dashboard**
   - Tracking de conversão
   - Heatmaps
   - A/B test framework

9. ✅ **Micro-interactions**
   - Animações suaves
   - Feedback visual
   - Loading states

---

## 📝 **CONTEÚDO E COPYWRITING**

### **Headlines Testáveis:**
1. "Domine POCUS em 7 Dias com o Protocolo Completo"
2. "O Ebook que Todo Médico Precisa Ter no Celular"
3. "De Zero a Expert em POCUS: Ebook Gratuito"
4. "Protocolo de Emergência POCUS - Grátis para Médicos"

### **Subheadlines:**
1. "Ebook + PDF de emergência para usar no plantão hoje mesmo"
2. "Mais de 12.000 médicos já dominam POCUS com nosso método"
3. "Do básico ao avançado: tudo que você precisa saber"

### **CTAs Principais:**
1. "QUERO O EBOOK GRÁTIS AGORA"
2. "BAIXAR PROTOCOLO COMPLETO"
3. "ENVIAR PARA MEU WHATSAPP"
4. "ACESSO IMEDIATO GRÁTIS"

### **CTAs Secundários:**
1. "Sim, quero receber"
2. "Garantir meu ebook"
3. "Download instantâneo"

---

## 🔒 **COMPLIANCE E LGPD**

### **Textos Obrigatórios:**
- ✅ "Seus dados estão 100% seguros"
- ✅ "Não enviamos spam"
- ✅ "Cancele quando quiser"
- ✅ Link para política de privacidade

### **Checkbox Opcional:**
```
☑️ "Aceito receber conteúdos educativos sobre POCUS via WhatsApp"
```

---

## 📱 **ENTREGA DO EBOOK**

### **Fluxo Automatizado:**
1. **Captura WhatsApp** → Formulário
2. **Validação** → Backend
3. **Armazenamento** → Database
4. **Envio Imediato** → WhatsApp API
5. **Follow-up** → Sequência educativa

### **Mensagem WhatsApp:**
```
🎉 Olá [NOME]! 

Aqui está seu EBOOK GRATUITO de POCUS:
📋 Protocolo Completo: [LINK]
🚨 Checklist de Emergência: [LINK]

📱 Salve este chat para receber:
✅ Dicas semanais de POCUS
✅ Casos clínicos exclusivos  
✅ Atualizações do protocolo

Alguma dúvida? É só responder aqui! 👨‍⚕️

--
Dr. Saulo Salgueiro
Especialista em POCUS
```

---

## 📈 **MÉTRICAS DE SUCESSO**

### **Conversão Principal:**
- **Meta**: 20% de taxa de conversão
- **Atual**: A definir após implementação
- **Tracking**: WhatsApp/Visitantes únicos

### **Métricas Secundárias:**
- **Bounce Rate**: <35%
- **Time on Page**: >2:30min
- **Scroll Depth**: >70%
- **Form Completion**: >80% dos que começam

### **Relatórios:**
- 📊 **Diário**: Conversões, sources, devices
- 📈 **Semanal**: Trends, A/B tests, otimizações
- 📉 **Mensal**: ROI, LTV, análise comportamental

---

## 🎯 **PRÓXIMOS PASSOS**

### **Implementação Imediata:**
1. **Criar branch** `feature/conversion-optimization`
2. **Implementar Fase 1** (Hero + Formulário)
3. **Testar localmente** formulário WhatsApp
4. **Deploy staging** para validação

### **Validação:**
1. **Teste responsivo** em todos devices
2. **Validação formulário** com números reais
3. **Performance check** (LCP, CLS, FID)
4. **Accessibility audit** (WCAG 2.1)

### **Go-Live:**
1. **Deploy produção**
2. **Monitorar métricas** primeiras 24h
3. **Ajustes rápidos** baseados em dados
4. **Iniciar Fase 2** após estabilização

---

**✅ PRD aprovado e pronto para desenvolvimento!**

*Última atualização: Janeiro 2025*
*Responsável: Equipe de Desenvolvimento*
*Aprovação: Product Owner*

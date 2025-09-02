import { 
  FileText, 
  AlertTriangle, 
  BookOpen, 
  Zap, 
  Smartphone, 
  Video,
  Download,
  Clock
} from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "📋 Protocolo FAST",
    description: "Passo a passo completo para ultrassom abdominal de emergência com técnica detalhada",
    priority: "high"
  },
  {
    icon: AlertTriangle,
    title: "🚨 Checklist de Emergência",
    description: "Para usar no plantão - protocolo rápido com decisões clínicas fundamentais",
    priority: "high"
  },
  {
    icon: BookOpen,
    title: "📊 Casos Clínicos Ilustrados",
    description: "10 situações reais com imagens e interpretação passo a passo",
    priority: "medium"
  },
  {
    icon: Zap,
    title: "⚡ Guia Rápido de Interpretação",
    description: "Referência instantânea com os principais achados e diagnósticos diferenciais",
    priority: "medium"
  },
  {
    icon: Download,
    title: "💾 Download Instantâneo",
    description: "Receba imediatamente no WhatsApp - sem espera, sem complicação",
    priority: "medium"
  },
  {
    icon: Clock,
    title: "⏱️ Leitura Rápida",
    description: "Conteúdo direto ao ponto para dominar o essencial",
    priority: "low"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que você vai receber <span className="text-primary">GRATUITAMENTE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Material completo de POCUS para transformar sua prática médica hoje mesmo
          </p>
        </div>
        
        {/* Benefícios Principais (High Priority) */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            🎯 <span className="text-primary">Principais Benefícios</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "high").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-8 space-y-6 text-center hover:scale-105 transition-all duration-300 group border-2 border-primary/20"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={40} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Complementares (Medium Priority) */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-center text-foreground mb-6">
            ➕ <span className="text-primary">Benefícios Adicionais</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.filter(benefit => benefit.priority === "medium").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-6 space-y-4 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={32} className="text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Extras (Low Priority) */}
        <div className="mb-12">
          <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
            {benefits.filter(benefit => benefit.priority === "low").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-4 space-y-3 text-center hover:scale-105 transition-all duration-300 group bg-background/50"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ebook Preview */}
        <div className="mt-16 text-center">
          <div className="premium-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              📖 Prévia do Ebook POCUS
            </h3>
            <div className="bg-background/50 rounded-lg p-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-bold text-primary">Capítulo 1-3:</div>
                  <div className="text-muted-foreground">Fundamentos e Técnica Básica</div>
                </div>
                <div className="space-y-2">
                  <div className="font-bold text-primary">Capítulo 4-6:</div>
                  <div className="text-muted-foreground">Protocolo FAST Detalhado</div>
                </div>
                <div className="space-y-2">
                  <div className="font-bold text-primary">Capítulo 7-9:</div>
                  <div className="text-muted-foreground">Casos Clínicos e Emergências</div>
                </div>
              </div>
              <div className="text-green-600 font-bold text-lg">
                ✅ TOTALMENTE GRATUITO ✅
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
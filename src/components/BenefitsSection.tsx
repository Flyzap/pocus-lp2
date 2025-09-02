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
    <section id="beneficios" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
            O que você vai receber <span className="text-primary">GRATUITAMENTE</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4">
            Material completo de POCUS para transformar sua prática médica hoje mesmo
          </p>
        </div>
        
        {/* Benefícios Principais (High Priority) */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-foreground mb-4 sm:mb-6 lg:mb-8">
            🎯 <span className="text-primary">Principais Benefícios</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "high").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-6 text-center hover:scale-105 transition-all duration-300 group border-2 border-primary/20"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
                
                <h3 className="text-sm sm:text-lg md:text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Complementares (Medium Priority) */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-foreground mb-4 sm:mb-6">
            ➕ <span className="text-primary">Benefícios Adicionais</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {benefits.filter(benefit => benefit.priority === "medium").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Extras (Low Priority) */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto">
            {benefits.filter(benefit => benefit.priority === "low").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-2.5 sm:p-3 lg:p-4 space-y-2 sm:space-y-3 text-center hover:scale-105 transition-all duration-300 group bg-background/50"
              >
                <div className="flex items-center justify-center gap-2.5 sm:gap-3 lg:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ebook Preview */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="premium-card p-4 sm:p-6 lg:p-8 max-w-3xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
              📖 Prévia do Ebook POCUS
            </h3>
            <div className="bg-background/50 rounded-lg p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="font-bold text-primary">Capítulo 1-3:</div>
                  <div className="text-muted-foreground">Fundamentos e Técnica Básica</div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="font-bold text-primary">Capítulo 4-6:</div>
                  <div className="text-muted-foreground">Protocolo FAST Detalhado</div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="font-bold text-primary">Capítulo 7-9:</div>
                  <div className="text-muted-foreground">Casos Clínicos e Emergências</div>
                </div>
              </div>
              <div className="text-green-600 font-bold text-sm sm:text-base lg:text-lg">
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
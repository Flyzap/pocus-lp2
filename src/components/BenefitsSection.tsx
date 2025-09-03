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
    <section id="beneficios" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-7 lg:mb-8">
            O que você vai receber <span className="text-primary">GRATUITAMENTE</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-6">
            Material completo de POCUS para transformar sua prática médica hoje mesmo
          </p>
        </div>
        
        {/* Benefícios Principais (High Priority) */}
        <div className="mb-10 sm:mb-14 lg:mb-18">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-6 sm:mb-8 lg:mb-10">
            🎯 <span className="text-primary">Principais Benefícios</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "high").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-6 sm:p-8 lg:p-10 space-y-5 sm:space-y-6 lg:space-y-8 text-center hover:scale-105 transition-all duration-300 group border-2 border-primary/20"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Complementares (Medium Priority) */}
        <div className="mb-10 sm:mb-14 lg:mb-18">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8 lg:mb-10">
            ➕ <span className="text-primary">Benefícios Adicionais</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {benefits.filter(benefit => benefit.priority === "medium").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-5 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 lg:space-y-5 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={24} className="sm:w-7 sm:h-7 lg:w-9 lg:h-9 text-primary" />
                </div>
                
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Extras (Low Priority) */}
        <div className="mb-10 sm:mb-14 lg:mb-18">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 max-w-lg mx-auto">
            {benefits.filter(benefit => benefit.priority === "low").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4 text-center hover:scale-105 transition-all duration-300 group bg-background/50"
              >
                <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ebook Preview */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="premium-card p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-5 sm:mb-6 lg:mb-8">
              📖 Prévia do Ebook POCUS
            </h3>
            <div className="bg-background/50 rounded-lg p-5 sm:p-6 lg:p-8 space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 text-sm sm:text-base lg:text-lg">
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
              <div className="text-green-600 font-bold text-lg sm:text-xl lg:text-2xl">
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
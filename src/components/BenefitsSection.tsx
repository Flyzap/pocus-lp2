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
    <section id="beneficios" className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-6 sm:mb-7 lg:mb-8 xl:mb-10">
            O que você vai receber <span className="text-primary">GRATUITAMENTE</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6">
            Material completo de POCUS para transformar sua prática médica hoje mesmo
          </p>
        </div>
        
        {/* Benefícios Principais (High Priority) */}
        <div className="mb-10 sm:mb-14 lg:mb-18 xl:mb-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            🎯 <span className="text-primary">Principais Benefícios</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-6xl xl:max-w-7xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "high").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-6 sm:p-8 lg:p-10 xl:p-12 space-y-5 sm:space-y-6 lg:space-y-8 xl:space-y-10 text-center hover:scale-105 transition-all duration-300 group border-2 border-primary/20"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-primary" />
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Complementares (Medium Priority) */}
        <div className="mb-10 sm:mb-14 lg:mb-18 xl:mb-20">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            ➕ <span className="text-primary">Benefícios Adicionais</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "medium").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-5 sm:p-6 lg:p-8 xl:p-10 space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 xl:w-20 xl:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={24} className="sm:w-7 sm:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-primary" />
                </div>
                
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground">{benefit.title}</h4>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Secundários (Low Priority) */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            ✨ <span className="text-primary">Benefícios Extras</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 max-w-4xl lg:max-w-5xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "low").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-4 sm:p-5 lg:p-6 xl:p-8 space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-5 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-primary" />
                </div>
                
                <h5 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-foreground">{benefit.title}</h5>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
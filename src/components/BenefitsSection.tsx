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
    <section id="beneficios" className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 bg-background">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
        <div className="text-center mb-12 xl:mb-20 2xl:mb-24 3xl:mb-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-foreground mb-6 lg:mb-10 xl:mb-12">
            O que você vai receber <span className="text-primary">GRATUITAMENTE</span>
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-lg text-muted-foreground max-w-4xl mx-auto">
            Material completo de POCUS para transformar sua prática médica hoje mesmo
          </p>
        </div>
        
        {/* Benefícios Principais (High Priority) */}
        <div className="mb-16 xl:mb-20 2xl:mb-24 3xl:mb-28">
          <h3 className="desktop-heading-2 font-bold text-center text-foreground mb-8 xl:mb-12 2xl:mb-16 3xl:mb-20">
            🎯 <span className="text-primary">Principais Benefícios</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 desktop-spacing max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "high").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card desktop-padding space-y-6 xl:space-y-8 2xl:space-y-10 3xl:space-y-12 text-center hover:scale-105 transition-all duration-300 group border-2 border-primary/20"
              >
                <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={32} className="xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 text-primary" />
                </div>
                
                <h3 className="desktop-heading-2 font-bold text-foreground">{benefit.title}</h3>
                <p className="desktop-body text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Complementares (Medium Priority) */}
        <div className="mb-16 xl:mb-20 2xl:mb-24 3xl:mb-28">
          <h3 className="desktop-heading-2 font-bold text-center text-foreground mb-8 xl:mb-12 2xl:mb-16 3xl:mb-20">
            ➕ <span className="text-primary">Benefícios Adicionais</span>
          </h3>
          <div className="desktop-grid-auto desktop-spacing max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "medium").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card desktop-padding space-y-4 xl:space-y-6 2xl:space-y-8 3xl:space-y-10 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={24} className="xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12 text-primary" />
                </div>
                
                <h4 className="desktop-body font-bold text-foreground">{benefit.title}</h4>
                <p className="desktop-text-scale text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Secundários (Low Priority) */}
        <div>
          <h3 className="desktop-body font-bold text-center text-foreground mb-8 xl:mb-12 2xl:mb-16 3xl:mb-20">
            ✨ <span className="text-primary">Benefícios Extras</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 desktop-spacing max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
            {benefits.filter(benefit => benefit.priority === "low").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card desktop-padding space-y-3 xl:space-y-4 2xl:space-y-5 3xl:space-y-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 3xl:w-18 3xl:h-18 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={20} className="xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-primary" />
                </div>
                
                <h5 className="desktop-text-scale font-bold text-foreground">{benefit.title}</h5>
                <p className="text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-muted-foreground leading-relaxed">
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
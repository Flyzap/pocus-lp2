import { 
  FileText, 
  AlertTriangle, 
  BookOpen, 
  Zap, 
  Download,
  Clock,
  CheckCircle,
  Star,
  Shield,
  Sparkles
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
    <section id="beneficios" className="relative py-8 md:py-16 lg:py-18 overflow-hidden">
      {/* Background Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-premium/30 to-background"></div>
      
      {/* Elementos de parallax sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-16 w-40 h-40 bg-primary/10 rounded-full blur-xl parallax-element" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-24 left-12 w-28 h-28 bg-primary/8 rounded-full blur-lg parallax-element" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/6 rounded-full blur-md parallax-element" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animate-delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-3 md:px-8 lg:px-10">
        {/* Section Header Premium */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-xs md:text-sm font-medium backdrop-blur-sm mb-4 md:mb-6">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="hidden sm:inline">Material Premium Gratuito</span>
            <span className="sm:hidden">Premium Grátis</span>
          </div>
          
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
            Tudo que você vai receber
            <span className="block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              GRATUITAMENTE
            </span>
          </h2>
          
          <p className="text-sm md:text-base text-muted-foreground max-w-sm md:max-w-2xl mx-auto leading-relaxed">
            Material completo e profissional de POCUS para transformar sua prática médica <span className="text-primary font-semibold">hoje mesmo</span>
          </p>
        </div>
        
        {/* Benefícios Principais Premium */}
        <div className="mb-10 md:mb-14">
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Star className="w-4 h-4" />
              <span>Conteúdo Principal</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">
              O que faz a diferença na sua prática
            </h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {benefits.filter(benefit => benefit.priority === "high").map((benefit, index) => (
              <div 
                key={index} 
                className="group relative animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="premium-card p-4 md:p-6 h-full border-primary/20 hover:border-primary/40 transition-all duration-500">
                  {/* Icon Premium */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <benefit.icon size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {benefit.title.replace(/📋|🚨/, '').trim()}
                      </h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  
                  {/* Value Indicator */}
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium">Essencial para emergência</span>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Complementares Premium */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/15 text-sm font-medium text-primary mb-4">
              <Shield className="w-4 h-4" />
              <span>Material Complementar</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">
              Recursos para acelerar seu aprendizado
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.filter(benefit => benefit.priority === "medium").map((benefit, index) => (
              <div 
                key={index} 
                className="group relative animate-fade-in-up hover-lift"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="premium-card p-6 h-full text-center hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon size={20} className="text-primary" />
                  </div>
                  
                  <h4 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title.replace(/📊|⚡|💾/, '').trim()}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-1 text-xs text-green-400">
                    <CheckCircle className="w-3 h-3" />
                    <span>Incluído</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
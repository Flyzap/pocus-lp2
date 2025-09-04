import { 
  FileText, 
  AlertTriangle, 
  BookOpen, 
  Zap, 
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
    <section id="beneficios" className="py-12 lg:py-16 bg-background">
      <div className="container max-w-5xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            O que você vai receber <span className="text-primary">GRATUITAMENTE</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Material completo de POCUS para transformar sua prática médica hoje mesmo
          </p>
        </div>
        
        {/* Benefícios Principais (High Priority) */}
        <div className="mb-12">
          <h3 className="text-lg lg:text-xl font-bold text-center text-foreground mb-6">
            🎯 <span className="text-primary">Principais Benefícios</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {benefits.filter(benefit => benefit.priority === "high").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-6 space-y-4 text-center hover:scale-105 transition-all duration-300 group border-2 border-primary/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={24} className="text-primary" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Complementares (Medium Priority) */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-center text-foreground mb-6">
            ➕ <span className="text-primary">Benefícios Adicionais</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.filter(benefit => benefit.priority === "medium").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-6 space-y-4 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={20} className="text-primary" />
                </div>
                
                <h4 className="text-base font-bold text-foreground">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Secundários (Low Priority) */}
        <div>
          <h3 className="text-base font-bold text-center text-foreground mb-6">
            ✨ <span className="text-primary">Benefícios Extras</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.filter(benefit => benefit.priority === "low").map((benefit, index) => (
              <div 
                key={index} 
                className="premium-card p-4 space-y-3 text-center hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <benefit.icon size={18} className="text-primary" />
                </div>
                
                <h5 className="text-sm font-bold text-foreground">{benefit.title}</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">
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
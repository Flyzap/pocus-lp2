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
    description: "Passo a passo completo para ultrassom abdominal de emergência com técnica detalhada"
  },
  {
    icon: AlertTriangle,
    title: "🚨 Checklist de Emergência",
    description: "Para usar no plantão - protocolo rápido com decisões clínicas fundamentais"
  },
  {
    icon: BookOpen,
    title: "📊 Casos Clínicos Ilustrados",
    description: "10 situações reais com imagens e interpretação passo a passo"
  },
  {
    icon: Zap,
    title: "⚡ Guia Rápido de Interpretação",
    description: "Referência instantânea com os principais achados e diagnósticos diferenciais"
  },
  {
    icon: Smartphone,
    title: "📱 Versão Mobile",
    description: "PDF otimizado para celular - consulte durante o plantão facilmente"
  },
  {
    icon: Video,
    title: "🎥 Acesso a Aula Bônus",
    description: "Vídeo exclusivo de 30min com demonstração prática dos protocolos"
  },
  {
    icon: Download,
    title: "💾 Download Instantâneo",
    description: "Receba imediatamente no WhatsApp - sem espera, sem complicação"
  },
  {
    icon: Clock,
    title: "⏱️ Leitura Rápida",
    description: "Conteúdo direto ao ponto - 15 minutos para dominar o essencial"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
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
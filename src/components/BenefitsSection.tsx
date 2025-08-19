import { 
  Video, 
  FileText, 
  Award, 
  MessageCircle, 
  Clock, 
  Shield,
  Download,
  Smartphone
} from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "+40 Vídeos de Casos Clínicos",
    description: "Casos reais guiados passo a passo, desde o básico até situações complexas de emergência"
  },
  {
    icon: FileText,
    title: "PDFs de Protocolos Prontos",
    description: "Protocolos organizados por especialidade para usar diretamente no plantão"
  },
  {
    icon: Award,
    title: "Certificado de 60 Horas",
    description: "Certificado reconhecido para currículo e especialização médica continuada"
  },
  {
    icon: MessageCircle,
    title: "Suporte com Especialistas",
    description: "Tire dúvidas direto com nossa equipe médica via chat exclusivo"
  },
  {
    icon: Clock,
    title: "Acesso Vitalício",
    description: "Assista quando e onde quiser, no seu tempo, com acesso para sempre"
  },
  {
    icon: Shield,
    title: "Garantia de 7 Dias",
    description: "Teste o curso por 7 dias. Se não gostar, devolvemos 100% do seu dinheiro"
  },
  {
    icon: Download,
    title: "Downloads Offline",
    description: "Baixe as aulas e assista mesmo sem internet, ideal para plantões"
  },
  {
    icon: Smartphone,
    title: "App Mobile Exclusivo",
    description: "Acesse pelo celular ou tablet com nossa plataforma otimizada"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tudo que você vai <span className="text-primary">Receber</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um curso completo com tudo que você precisa para dominar a ultrassonografia point-of-care
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
        
        {/* Total Value */}
        <div className="mt-16 text-center">
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Valor Total do Pacote Completo
            </h3>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">R$ 2.497</div>
              <div className="text-muted-foreground line-through">De R$ 4.500</div>
              <div className="text-primary font-semibold">
                Economia de mais de R$ 2.000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
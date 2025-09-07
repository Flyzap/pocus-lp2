import { PlayCircle, Award, Users, Clock, Smartphone, HeartHandshake, MessageCircle } from "lucide-react";

const benefits = [
  // High priority - principais benefícios (2 col)
  {
    icon: PlayCircle,
    title: "40+ Horas de Conteúdo",
    description: "Curso completo com teoria e prática intensiva para dominar todas as técnicas do POCUS",
    priority: "high"
  },
  {
    icon: Award,
    title: "Certificação Reconhecida",
    description: "Certificado de 40 horas válido para seu currículo e desenvolvimento profissional",
    priority: "high"
  },
  // Medium priority - benefícios adicionais (3 col)
  {
    icon: HeartHandshake,
    title: "Suporte Direto com Instrutor",
    description: "Tire suas dúvidas diretamente com o Dr. Saulo Salgueiro durante todo o curso",
    priority: "medium"
  },
  {
    icon: Smartphone,
    title: "Acesso Mobile + Desktop",
    description: "Estude quando e onde quiser, no computador, tablet ou smartphone",
    priority: "medium"
  },
  {
    icon: Users,
    title: "Casos Clínicos Reais",
    description: "Aprenda com casos reais da prática médica e desenvolvam pensamento crítico",
    priority: "medium"
  },
  // Low priority - benefícios extras (3 col)
  {
    icon: MessageCircle,
    title: "Grupo VIP WhatsApp",
    description: "Networking exclusivo com outros médicos que dominam o POCUS",
    priority: "low"
  },
  {
    icon: Clock,
    title: "Aulas de 15-20 Minutos",
    description: "Formato otimizado para médicos ocupados, sem perder qualidade do conteúdo",
    priority: "low"
  }
];

const SalesBenefitsSection = () => {
  const highPriorityBenefits = benefits.filter(benefit => benefit.priority === "high");
  const mediumPriorityBenefits = benefits.filter(benefit => benefit.priority === "medium");
  const lowPriorityBenefits = benefits.filter(benefit => benefit.priority === "low");

  return (
    <section id="beneficios" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          O Que Você Vai <span className="text-primary">Receber</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Tudo que você precisa para se tornar um especialista em POCUS
        </p>
      </div>

      <div className="space-y-16">
        {/* Principais Benefícios - 2 colunas */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-center text-primary mb-8">
            🔥 Principais Benefícios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {highPriorityBenefits.map((benefit, index) => (
              <div key={index} className="premium-card p-6 lg:p-8 group hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Adicionais - 3 colunas */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-center text-accent mb-8">
            ⚡ Benefícios Adicionais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediumPriorityBenefits.map((benefit, index) => (
              <div key={index} className="premium-card p-6 group hover:border-accent/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Extras - 3 colunas */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-center text-secondary-foreground mb-8">
            ✨ Benefícios Extras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lowPriorityBenefits.map((benefit, index) => (
              <div key={index} className="premium-card p-6 group hover:border-secondary/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-secondary-foreground transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesBenefitsSection;
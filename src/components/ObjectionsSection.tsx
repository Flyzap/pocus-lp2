import { Check } from "lucide-react";

const objections = [
  {
    title: "Mesmo que você nunca tenha usado um aparelho de ultrassom...",
    description: "Nosso método vai do absoluto zero. Começamos com o básico: como ligar o aparelho, ajustar configurações e interpretar as primeiras imagens."
  },
  {
    title: "Mesmo que ainda esteja na residência médica...",
    description: "O curso é especialmente pensado para residentes. Técnicas práticas que você pode aplicar imediatamente no seu plantão."
  },
  {
    title: "Mesmo que não tenha tempo para estudar...",
    description: "Aulas de 10-15 minutos, direto ao ponto. Você aprende no seu ritmo, quando e onde quiser."
  },
  {
    title: "Mesmo que ache ultrassom muito difícil...",
    description: "Método didático comprovado com mais de 5.000 médicos. Se eles conseguiram, você também consegue."
  },
  {
    title: "Mesmo que já tenha tentado aprender antes...",
    description: "Nosso método é diferente: foco na prática clínica real, não apenas teoria. Casos que você vê todo dia."
  },
  {
    title: "Mesmo que o hospital não tenha equipamento...",
    description: "Ensinamos técnicas para qualquer tipo de aparelho, desde os mais simples até os mais modernos."
  }
];

const ObjectionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Não importa</span> seu nível atual
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Este curso foi pensado para funcionar independente da sua experiência prévia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="premium-card p-6 space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={16} className="text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground leading-tight">
                    {objection.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {objection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pare de adiar seu crescimento profissional
            </h3>
            <p className="text-muted-foreground mb-6">
              Cada dia que passa é uma oportunidade perdida de fazer diagnósticos mais precisos e salvar mais vidas.
            </p>
            <div className="text-primary font-bold text-lg">
              Seu futuro médico começa agora! 👨‍⚕️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
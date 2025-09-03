import { Check } from "lucide-react";

const objections = [
  {
    title: "É realmente grátis?",
    description: "Sim, 100% gratuito! O ebook completo."
  },
  {
    title: "Vão me enviar spam no WhatsApp?",
    description: "Jamais! Apenas conteúdo de valor: dicas práticas de POCUS, casos clínicos e atualizações. Você pode cancelar quando quiser."
  },
  {
    title: "Preciso ter experiência prévia?",
    description: "Não! O ebook vai do zero ao avançado. Perfeito tanto para quem nunca usou ultrassom quanto para quem quer aperfeiçoar."
  },
  {
    title: "Funciona no meu aparelho de ultrassom?",
    description: "Sim! Os protocolos funcionam em qualquer marca e modelo. Focamos na técnica e interpretação, não no equipamento específico."
  },
  {
    title: "Tenho pouco tempo para ler...",
    description: "O ebook foi pensado para médicos ocupados: leitura de 15 minutos + checklist rápido para consulta durante o plantão."
  },
  {
    title: "Como vou receber o material?",
    description: "Instantaneamente pelo WhatsApp! Assim que você informar seu número, enviamos os links de download imediatamente."
  }
];

const ObjectionsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 bg-background">
      <div className="desktop-container mx-auto px-4 xl:px-8 2xl:px-12 3xl:px-16">
        <div className="text-center mb-16 xl:mb-20 2xl:mb-24 3xl:mb-28">
          <h2 className="desktop-heading-1 font-bold text-foreground mb-8 xl:mb-12 2xl:mb-16 3xl:mb-20">
            <span className="text-primary">Sem pegadinhas,</span> sem complicação
          </h2>
          <p className="desktop-body-lg text-muted-foreground max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto">
            Respondemos as principais dúvidas sobre nosso ebook gratuito de POCUS
          </p>
        </div>
        
        <div className="desktop-grid-auto desktop-spacing max-w-8xl xl:max-w-9xl 2xl:max-w-[2400px] mx-auto">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="premium-card desktop-padding space-y-6 xl:space-y-8 2xl:space-y-10 3xl:space-y-12 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start desktop-spacing">
                <div className="w-10 h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 xl:mt-2">
                  <Check size={18} className="xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-primary-foreground" />
                </div>
                <div className="space-y-3 xl:space-y-4 2xl:space-y-5 3xl:space-y-6">
                  <h3 className="font-bold desktop-body text-foreground leading-tight">
                    {objection.title}
                  </h3>
                  <p className="desktop-text-scale text-muted-foreground leading-relaxed">
                    {objection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20 xl:mt-24 2xl:mt-28 3xl:mt-32">
          <div className="premium-card desktop-padding max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
            <h3 className="desktop-heading-2 font-bold text-foreground mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12">
              Ainda com dúvidas? É só baixar!
            </h3>
            <p className="desktop-body text-muted-foreground mb-8 xl:mb-10 2xl:mb-12 3xl:mb-16">
              Não perca tempo. O ebook é gratuito e você recebe instantaneamente. Não tem nada a perder!
            </p>
            <div className="text-primary font-bold desktop-body">
              ✅ 100% Gratuito ✅ Download Imediato ✅ Sem Compromisso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
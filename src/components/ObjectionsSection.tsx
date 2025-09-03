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
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
        <div className="text-center mb-16 xl:mb-20 2xl:mb-24 3xl:mb-28">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 lg:mb-10 xl:mb-12">
            <span className="text-primary">Sem pegadinhas,</span> sem complicação
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
            Respondemos as principais dúvidas sobre nosso ebook gratuito de POCUS
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10 max-w-7xl mx-auto">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="premium-card p-4 sm:p-6 lg:p-8 space-y-4 lg:space-y-6 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={14} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg xl:text-xl text-foreground leading-tight">
                    {objection.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
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
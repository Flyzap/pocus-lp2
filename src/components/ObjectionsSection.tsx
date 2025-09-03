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
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-14 sm:mb-18 lg:mb-22 xl:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
            <span className="text-primary">Sem pegadinhas,</span> sem complicação
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6">
            Respondemos as principais dúvidas sobre nosso ebook gratuito de POCUS
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-7xl xl:max-w-8xl mx-auto">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="premium-card p-6 sm:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1 lg:mt-2">
                  <Check size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-primary-foreground" />
                </div>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-5">
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground leading-tight">
                    {objection.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed">
                    {objection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24 xl:mt-28">
          <div className="premium-card p-8 sm:p-10 lg:p-12 xl:p-16 max-w-4xl xl:max-w-5xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
              Ainda com dúvidas? É só baixar!
            </h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
              Não perca tempo. O ebook é gratuito e você recebe instantaneamente. Não tem nada a perder!
            </p>
            <div className="text-primary font-bold text-base sm:text-lg lg:text-xl xl:text-2xl">
              ✅ 100% Gratuito ✅ Download Imediato ✅ Sem Compromisso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
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
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            <span className="text-primary">Sem pegadinhas,</span> sem complicação
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Respondemos as principais dúvidas sobre nosso ebook gratuito de POCUS
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="premium-card p-4 sm:p-6 space-y-3 sm:space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={12} className="sm:w-4 sm:h-4 text-primary-foreground" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-bold text-sm sm:text-base text-foreground leading-tight">
                    {objection.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {objection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="premium-card p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
              Ainda com dúvidas? É só baixar!
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              Não perca tempo. O ebook é gratuito e você recebe instantaneamente. Não tem nada a perder!
            </p>
            <div className="text-primary font-bold text-sm sm:text-base md:text-lg">
              ✅ 100% Gratuito ✅ Download Imediato ✅ Sem Compromisso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
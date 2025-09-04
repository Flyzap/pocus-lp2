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
    <section className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            <span className="text-primary">Sem pegadinhas,</span> sem complicação
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos as principais dúvidas sobre nosso ebook gratuito de POCUS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="premium-card p-6 space-y-4 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check size={14} className="text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-foreground leading-tight">
                    {objection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {objection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="premium-card p-8 max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
              Ainda com dúvidas? É só baixar!
            </h3>
            <p className="text-base text-muted-foreground mb-8">
              Não perca tempo. O ebook é gratuito e você recebe instantaneamente. Não tem nada a perder!
            </p>
            <div className="text-primary font-bold text-base">
              ✅ 100% Gratuito ✅ Download Imediato ✅ Sem Compromisso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
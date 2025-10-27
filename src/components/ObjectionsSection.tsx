import { Check } from "lucide-react";

const objections = [
  {
    title: "Vale mesmo o investimento?",
    description: "Absolutamente! O retorno é imediato: você aplica o conhecimento já no próximo plantão, aumentando sua confiança e precisão diagnóstica."
  },
  {
    title: "E se eu não gostar do curso?",
    description: "Oferecemos garantia incondicional de 7 dias. Se não ficar 100% satisfeito, devolvemos seu dinheiro integralmente, sem questionamentos."
  },
  {
    title: "Preciso ter experiência prévia?",
    description: "Não! O curso foi estruturado do zero ao avançado. Você aprende desde os fundamentos até as técnicas mais avançadas, no seu ritmo."
  },
  {
    title: "Tenho uma agenda muito ocupada...",
    description: "O curso é 100% gravado e você tem acesso vitalício. Estude no seu ritmo, com aulas objetivas e material de consulta rápida para o dia a dia."
  },
  {
    title: "Como são as aulas práticas?",
    description: "Combinamos teoria e prática intensiva, com demonstrações em pacientes reais, simuladores de alta fidelidade e feedback personalizado dos instrutores."
  },
  {
    title: "Quando posso começar?",
    description: "Imediatamente após a confirmação do pagamento! Você recebe acesso à plataforma na hora e pode começar sua jornada de aprendizado agora mesmo."
  }
];

const ObjectionsSection = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
            <span className="text-primary">Ainda em dúvida?</span> Nós entendemos
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-xl mx-auto">
            Respondemos as principais dúvidas sobre o curso completo de POCUS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {objections.map((objection, index) => (
            <div 
              key={index}
              className="premium-card p-5 space-y-3 hover:scale-105 transition-all duration-300"
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
              Ainda tem dúvidas? Fale com nossa equipe!
            </h3>
            <p className="text-base text-muted-foreground mb-8">
              Nossa equipe médica está pronta para esclarecer todas as suas dúvidas sobre o curso. Não perca a oportunidade de transformar sua prática clínica!
            </p>
            <div className="text-primary font-bold text-base">
              ✅ Garantia de 7 dias ✅ Suporte Individual ✅ Acesso Vitalício
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
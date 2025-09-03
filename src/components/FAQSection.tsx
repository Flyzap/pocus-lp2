import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como recebo o ebook?",
    answer: "Assim que você informar seu WhatsApp, enviamos imediatamente os links para download do ebook completo, PDF de emergência e aula bônus. Recebe tudo em segundos!"
  },
  {
    question: "Quanto tempo demora para chegar?",
    answer: "É instantâneo! Nosso sistema automatizado envia os materiais para seu WhatsApp em até 30 segundos após o cadastro."
  },
  {
    question: "É realmente gratuito?",
    answer: "Sim, 100% gratuito! Não cobramos nada pelo ebook, PDF de emergência nem pela aula bônus. É nossa contribuição para melhorar a medicina no Brasil."
  },
  {
    question: "Posso compartilhar com colegas?",
    answer: "Claro! Incentivamos que você compartilhe o conhecimento. Quanto mais médicos dominarem POCUS, melhor para todos os pacientes."
  },
  {
    question: "Tem mais conteúdo depois?",
    answer: "Sim! Após baixar o ebook, você receberá dicas semanais de POCUS, casos clínicos exclusivos e atualizações. Sempre conteúdo de valor, nunca spam."
  },
  {
    question: "Como tiro dúvidas sobre o conteúdo?",
    answer: "Você pode responder no próprio WhatsApp! Nossa equipe médica responde dúvidas sobre POCUS, casos clínicos e aplicação prática em até 24 horas."
  },
  {
    question: "Funciona no meu celular?",
    answer: "Perfeitamente! O PDF é otimizado para leitura em celular. Você pode consultar durante o plantão, salvar na galeria ou imprimir se preferir."
  },
  {
    question: "E se eu não gostar do material?",
    answer: "Como é gratuito, não há risco! Mas temos certeza que você vai amar. Mais de 12.000 médicos já baixaram e aplicam as técnicas diariamente."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 sm:mb-18 lg:mb-22">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10">
              <span className="text-primary">Dúvidas</span> sobre o Ebook
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              Respostas para as principais perguntas sobre o download gratuito
            </p>
          </div>
          
          <div className="premium-card p-6 sm:p-8 lg:p-10">
            <Accordion type="single" collapsible className="space-y-4 sm:space-y-5 lg:space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 sm:px-6 lg:px-8">
                >
                  <AccordionTrigger className="text-left font-semibold text-base sm:text-lg lg:text-xl text-primary hover:text-primary-glow mobile-touch-target">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base lg:text-lg text-muted-foreground pt-4 sm:pt-5 lg:pt-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Still have questions */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 lg:mb-8">
              Ainda tem dúvidas sobre o ebook? Nossa equipe médica está pronta para ajudar!
            </p>
            <a 
              href="https://wa.me/5582981039197" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-semibold text-base sm:text-lg lg:text-xl mobile-touch-target"
            >
              💬 Tire suas dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
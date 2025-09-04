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
    <section id="faq" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            <span className="text-primary">Dúvidas</span> sobre o Ebook
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Respostas para as principais perguntas sobre o download gratuito
          </p>
        </div>
        
        <div className="premium-card p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Primeira coluna */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, 4).map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left font-semibold text-sm lg:text-base text-primary hover:text-primary-glow mobile-touch-target">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs lg:text-sm text-muted-foreground pt-3 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* Segunda coluna */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(4, 8).map((faq, index) => (
                  <AccordionItem 
                    key={index + 4} 
                    value={`item-${index + 4}`}
                    className="border border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left font-semibold text-sm lg:text-base text-primary hover:text-primary-glow mobile-touch-target">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs lg:text-sm text-muted-foreground pt-3 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        
        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-base text-muted-foreground mb-4">
            Ainda tem dúvidas sobre o ebook? Nossa equipe médica está pronta para ajudar!
          </p>
          <a 
            href="https://wa.me/5582981039197" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-semibold text-base mobile-touch-target"
          >
            💬 Tire suas dúvidas no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
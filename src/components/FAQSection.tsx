import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a imersão prática?",
    answer: "São 4 dias intensivos de treinamento presencial, combinando teoria e prática. As aulas acontecem na UNOPAR e as práticas são realizadas em ambiente real na UPA."
  },
  {
    question: "Quantas vagas por turma?",
    answer: "Para garantir a qualidade do aprendizado e atenção individualizada, limitamos as turmas a 12 alunos."
  },
  {
    question: "Preciso ter experiência prévia?",
    answer: "Não! A imersão é aberta a todos os interessados, sem pré-requisitos. O treinamento foi estruturado para atender desde iniciantes até profissionais experientes."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Oferecemos diversas opções: cartão de crédito em até 12x, PIX, boleto à vista, PicPay, Apple Pay e Google Pay."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem questionamentos."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Você terá acesso direto ao número do expert para tirar dúvidas durante e após a imersão, garantindo seu aprendizado completo."
  },
  {
    question: "Onde acontece a imersão?",
    answer: "As aulas teóricas e práticas são realizadas em ambiente hospitalar real, proporcionando experiência hands-on com casos reais."
  },
  {
    question: "Recebo certificado?",
    answer: "Sim, após a conclusão da imersão você recebe um certificado de participação."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            <span className="text-primary">Dúvidas</span> Frequentes
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Respostas para as principais perguntas sobre a imersão
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
            Ainda tem dúvidas sobre a imersão? Nossa equipe está pronta para ajudar!
          </p>
          <a 
            href="https://wa.me/5582981039197" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-semibold text-base mobile-touch-target"
          >
            💬 Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
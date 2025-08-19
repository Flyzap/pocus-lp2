import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo tenho para acessar o curso?",
    answer: "O acesso é vitalício! Uma vez adquirido, você pode assistir as aulas quantas vezes quiser, quando quiser, pelo resto da vida. Todas as atualizações futuras também estão incluídas."
  },
  {
    question: "Preciso ter experiência prévia com ultrassom?",
    answer: "Não! O curso foi desenvolvido para levar você do zero ao avançado. Começamos com o básico: como ligar o aparelho, configurações iniciais, até casos complexos de emergência."
  },
  {
    question: "Funciona para qualquer tipo de aparelho?",
    answer: "Sim! Ensinamos princípios e técnicas que funcionam em qualquer marca e modelo de ultrassom, desde os mais simples até os mais modernos. O foco é na técnica, não no equipamento."
  },
  {
    question: "Quanto tempo demora para aprender?",
    answer: "Muitos alunos já se sentem confiantes nas primeiras semanas. O curso completo tem cerca de 40 horas de conteúdo, mas você pode ir no seu ritmo e aplicar imediatamente no dia a dia."
  },
  {
    question: "Tem certificado reconhecido?",
    answer: "Sim! Oferecemos certificado de 60 horas reconhecido para especialização médica continuada, válido para currículo e processos seletivos."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Você terá acesso a um chat exclusivo com nossa equipe médica para tirar dúvidas sobre casos clínicos, técnicas e interpretações. Resposta em até 24 horas."
  },
  {
    question: "Posso assistir pelo celular?",
    answer: "Claro! Temos app mobile otimizado para iOS e Android. Você pode baixar as aulas e assistir offline, ideal para plantões ou quando não há internet."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">Dúvidas</span> Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Respostas para as principais perguntas sobre o curso
            </p>
          </div>
          
          <div className="premium-card p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-glow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Still have questions */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-semibold"
            >
              💬 Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
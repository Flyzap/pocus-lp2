import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "Acesso vitalício! Você poderá assistir as aulas quantas vezes quiser, para sempre. Sem pressa, no seu ritmo."
  },
  {
    question: "O certificado é válido para meu currículo?",
    answer: "Sim! Certificado de 40 horas válido para seu currículo, residência médica e desenvolvimento profissional contínuo."
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! 3x sem juros no cartão de crédito ou até 12x com juros pelo PagSeguro. Facilidade total para você."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Garantia incondicional. Se não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do valor sem questionamentos."
  },
  {
    question: "Preciso ter experiência prévia com ultrassom?",
    answer: "Não! O curso é desenvolvido do básico ao avançado. Mesmo se nunca tocou num aparelho, você aprenderá tudo do zero."
  },
  {
    question: "Qual a carga horária semanal recomendada?",
    answer: "Flexível! Recomendamos 2-3 horas por semana, mas você pode estudar no seu ritmo. Aulas de 15-20 minutos cada."
  },
  {
    question: "Terei suporte durante o curso?",
    answer: "Sim! Suporte direto com o Dr. Saulo Salgueiro via plataforma e grupo VIP no WhatsApp com outros médicos."
  },
  {
    question: "O curso funciona em dispositivos móveis?",
    answer: "Perfeitamente! Plataforma otimizada para computador, tablet e smartphone. Estude onde e quando quiser."
  }
];

const SalesFAQSection = () => {
  // Dividir as perguntas em duas colunas
  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midPoint);
  const rightColumnFaqs = faqs.slice(midPoint);

  return (
    <section id="faq" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Perguntas Frequentes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa saber sobre o curso de POCUS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Coluna Esquerda */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {leftColumnFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-left-${index}`}
                  className="premium-card px-6 py-2 border-l-4 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Coluna Direita */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {rightColumnFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-right-${index}`}
                  className="premium-card px-6 py-2 border-l-4 border-primary/20 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA de contato */}
        <div className="mt-16 text-center">
          <div className="premium-card p-8 lg:p-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Não encontrou sua pergunta?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Entre em contato pelo WhatsApp e tire todas as suas dúvidas com nossa equipe
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 premium-glow"
            >
              <a 
                href="https://wa.me/5582981039197?text=Olá! Tenho dúvidas sobre o curso de POCUS e gostaria de mais informações."
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Falar Conosco pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesFAQSection;
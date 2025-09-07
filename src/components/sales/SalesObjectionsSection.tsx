import { CheckCircle } from "lucide-react";

const objections = [
  {
    title: "Vale o investimento de R$ 497?",
    description: "O ROI de uma única emergência diagnosticada corretamente já paga o curso inteiro. Sua expertise vale muito mais que isso."
  },
  {
    title: "Não tenho tempo para estudar",
    description: "Aulas de 15-20 minutos que se encaixam na sua rotina. Estude no seu ritmo, quando e onde quiser."
  },
  {
    title: "E se não funcionar para mim?",
    description: "Garantia incondicional de 7 dias. Não gostou? Devolvemos 100% do seu investimento, sem questionamentos."
  },
  {
    title: "É muito técnico para iniciantes?",
    description: "Curso desenvolvido do zero ao avançado. Linguagem didática e passo a passo detalhado para qualquer nível."
  },
  {
    title: "Posso aprender sozinho no YouTube?",
    description: "YouTube é disperso e não estruturado. Aqui você tem um caminho claro, casos práticos e suporte direto do instrutor."
  },
  {
    title: "Já tentei outros cursos e não deu certo",
    description: "Nossa metodologia é diferente: foco na prática, casos reais e suporte contínuo. Mais de 95% de aprovação dos alunos."
  }
];

const SalesObjectionsSection = () => {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Dúvidas Frequentes</span> Sobre o Curso
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Respondemos às principais preocupações dos médicos antes de se inscreverem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {objections.map((objection, index) => (
            <div key={index} className="premium-card p-6 lg:p-8 group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {objection.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {objection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="premium-card p-8 lg:p-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ainda tem dúvidas? Vamos conversar!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Entre em contato conosco pelo WhatsApp e tire todas as suas dúvidas antes de se inscrever
            </p>
            <a 
              href="https://wa.me/5582981039197?text=Olá! Tenho dúvidas sobre o curso de POCUS e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-primary-foreground font-bold rounded-lg transition-all duration-300 premium-glow group"
            >
              <span className="mr-2">💬 Falar com Especialista</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesObjectionsSection;
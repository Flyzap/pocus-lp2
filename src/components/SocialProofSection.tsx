import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ana Beatriz Silva",
    specialty: "Residente R3 - Clínica Médica",
    text: "O curso mudou completamente minha rotina no plantão. Hoje consigo fazer diagnósticos em segundos que antes levavam horas. Incrível!",
    rating: 5
  },
  {
    name: "Dr. Roberto Santos",
    specialty: "Médico Emergencista",
    text: "Método fantástico! As técnicas são muito práticas e os casos clínicos são exatamente o que vemos no dia a dia. Recomendo demais.",
    rating: 5
  },
  {
    name: "Dra. Mariana Costa",
    specialty: "Cardiologista",
    text: "Sempre tive medo do ultrassom, mas o Dr. Carlos ensina de forma tão didática que em 2 semanas já estava confiante. Curso excepcional!",
    rating: 5
  },
  {
    name: "Dr. Felipe Oliveira",
    specialty: "Intensivista",
    text: "Já fiz vários cursos de POCUS, mas esse é o mais completo. Os protocolos de emergência salvaram vidas na minha UTI.",
    rating: 5
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que os <span className="text-primary">Médicos</span> estão falando
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 5.000 profissionais já transformaram sua prática médica. Veja alguns depoimentos:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="premium-card p-6 space-y-4 hover:scale-105 transition-transform duration-300">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.specialty}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">5,000+</div>
            <div className="text-muted-foreground">Médicos Treinados</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Taxa de Satisfação</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">15</div>
            <div className="text-muted-foreground">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dra. Ana Carolina",
    specialty: "Emergencista - Hospital São Luís",
    text: "O ebook me deu confiança para usar POCUS na prática. Protocolo claro e direto ao ponto.",
    rating: 5
  },
  {
    name: "Dr. Roberto Silva",
    specialty: "Intensivista - UTI Cardíaca",
    text: "Excelente material!",
    rating: 5
  },
  {
    name: "Dra. Marina Santos",
    specialty: "Clínica Médica - Santa Casa",
    text: "Ótimo material! Recomendo para todos os colegas.",
    rating: 5
  },
  {
    name: "Dr Lucas Fernandes",
    specialty: "Médico",
    text: "Material didático excepcional.",
    rating: 5
  }
];

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Rotacionar testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="relative py-8 md:py-16 lg:py-18 overflow-hidden">
      {/* Background Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-gray-premium/30"></div>
      
      {/* Animated Background Elements - Parallax */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl parallax-element"></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-primary/15 rounded-full mix-blend-multiply filter blur-xl parallax-element" style={{ animationDelay: '2s' }}></div>
        
        {/* Elementos adicionais de profundidade */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-lg parallax-element" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/8 rounded-full blur-md parallax-element" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-3 md:px-8 lg:px-10">

        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-xs md:text-sm font-medium backdrop-blur-sm mb-4 md:mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
            <span className="hidden sm:inline">Aprovado por Especialistas</span>
            <span className="sm:hidden">Especialistas</span>
          </div>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-3">
            Depoimentos de
            <span className="block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Médicos Especialistas
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-sm md:max-w-xl mx-auto">
            Veja o que profissionais renomados estão falando sobre o material
          </p>
        </div>

        {/* Testimonials Premium */}
        <div className="mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {Array.from({ length: 3 }, (_, index) => {
              const testimonialIndex = (currentTestimonial + index) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              return (
                <div 
                  key={`${currentTestimonial}-${index}`} 
                  className="group relative animate-fade-in-up hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                <div className="premium-card p-4 md:p-5 space-y-2.5 md:space-y-3 h-full border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                  {/* Rating Premium */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="text-4xl text-primary/20 font-serif leading-none mb-2">"</div>
                  
                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {testimonial.text}
                  </p>
                  
                  {/* Author Premium */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.specialty}</div>
                    </div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
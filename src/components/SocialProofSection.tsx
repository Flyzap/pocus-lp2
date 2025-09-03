import { Download, Star, Users, Clock } from "lucide-react";
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
  const [currentDownloads, setCurrentDownloads] = useState(30);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Simular contador dinâmico de downloads
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDownloads(prev => prev + Math.floor(Math.random() * 3));
    }, 30000); // Incrementa a cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  // Rotacionar testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 bg-card">
      <div className="desktop-container mx-auto px-4 xl:px-8 2xl:px-12 3xl:px-16">
        {/* Contador de Downloads */}
        <div className="text-center mb-16 xl:mb-20 2xl:mb-24 3xl:mb-28">
          <div className="premium-card desktop-padding max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
            <div className="flex items-center justify-center desktop-spacing mb-8 xl:mb-12 2xl:mb-16 3xl:mb-20">
              <Download className="text-primary w-12 h-12 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24" />
              <div className="desktop-heading-hero font-bold text-primary">
                {currentDownloads.toLocaleString('pt-BR')}
              </div>
            </div>
            <h3 className="desktop-heading-2 font-bold text-foreground mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12">
              Médicos já baixaram o ebook
            </h3>
            <p className="desktop-body text-muted-foreground">
              Junte-se a milhares de profissionais que já dominam POCUS
            </p>
          </div>
        </div>

        {/* Testimonials Rotativos */}
        <div className="max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
          <h3 className="desktop-heading-2 font-bold text-center text-foreground mb-12 xl:mb-16 2xl:mb-20 3xl:mb-24">
            O que os médicos estão falando sobre o ebook
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 desktop-spacing">
            {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((testimonial, index) => (
              <div 
                key={`${currentTestimonial}-${index}`} 
                className="premium-card desktop-padding space-y-6 xl:space-y-8 2xl:space-y-10 3xl:space-y-12 transition-all duration-500 transform hover:scale-105"
              >
                {/* Rating */}
                <div className="flex gap-2 xl:gap-3 2xl:gap-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="desktop-body text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-6 xl:pt-8 2xl:pt-10 3xl:pt-12">
                  <div className="font-bold desktop-body text-foreground">{testimonial.name}</div>
                  <div className="desktop-text-scale text-muted-foreground">{testimonial.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas Adicionais */}
        <div className="mt-16 xl:mt-20 2xl:mt-24 3xl:mt-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 desktop-spacing max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
            <div className="premium-card desktop-padding text-center">
              <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12">
                <Users className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-primary" />
              </div>
              <div className="desktop-heading-2 font-bold text-foreground mb-4 xl:mb-6 2xl:mb-8">98%</div>
              <div className="desktop-text-scale text-muted-foreground">Satisfação dos usuários</div>
            </div>
            
            <div className="premium-card desktop-padding text-center">
              <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12">
                <Star className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-primary" />
              </div>
              <div className="desktop-heading-2 font-bold text-foreground mb-4 xl:mb-6 2xl:mb-8">4.9/5</div>
              <div className="desktop-text-scale text-muted-foreground">Avaliação média</div>
            </div>
            
            <div className="premium-card desktop-padding text-center">
              <div className="w-16 h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 3xl:w-28 3xl:h-28 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12">
                <Clock className="w-8 h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 3xl:w-14 3xl:h-14 text-primary" />
              </div>
              <div className="desktop-heading-2 font-bold text-foreground mb-4 xl:mb-6 2xl:mb-8">15min</div>
              <div className="desktop-text-scale text-muted-foreground">Tempo médio de leitura</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

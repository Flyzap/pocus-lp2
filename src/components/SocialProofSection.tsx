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
    <section id="depoimentos" className="py-12 lg:py-16 xl:py-20 bg-card">
      <div className="container max-w-7xl mx-auto px-4 lg:px-8 xl:px-12">
        {/* Contador de Downloads */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="premium-card p-4 lg:p-6 max-w-2xl lg:max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mb-4 lg:mb-6">
              <Download className="text-primary w-8 h-8 lg:w-10 lg:h-10" />
              <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">
                {currentDownloads.toLocaleString('pt-BR')}
              </div>
            </div>
            <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-foreground mb-3 lg:mb-4">
              Médicos já baixaram o ebook
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground">
              Junte-se a milhares de profissionais que já dominam POCUS
            </p>
          </div>
        </div>

        {/* Testimonials Rotativos */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-center text-foreground mb-8 lg:mb-12">
            O que os médicos estão falando sobre o ebook
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((testimonial, index) => (
              <div 
                key={`${currentTestimonial}-${index}`} 
                className="premium-card p-4 lg:p-5 space-y-3 lg:space-y-4 transition-all duration-500 transform hover:scale-105"
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

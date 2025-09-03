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
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contador de Downloads */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="premium-card p-8 sm:p-10 lg:p-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 sm:gap-5 lg:gap-6 mb-6">
              <Download className="text-primary w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary">
                {currentDownloads.toLocaleString('pt-BR')}
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Médicos já baixaram o ebook
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
              Junte-se a milhares de profissionais que já dominam POCUS
            </p>
          </div>
        </div>

        {/* Testimonials Rotativos */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-foreground mb-8 sm:mb-10 lg:mb-12">
            O que os médicos estão falando sobre o ebook
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((testimonial, index) => (
              <div 
                key={`${currentTestimonial}-${index}`} 
                className="premium-card p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 lg:space-y-6 transition-all duration-500 transform hover:scale-105"
              >
                {/* Rating */}
                <div className="flex gap-1 sm:gap-1.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4 sm:pt-5 lg:pt-6">
                  <div className="font-bold text-base sm:text-lg lg:text-xl text-foreground">{testimonial.name}</div>
                  <div className="text-sm sm:text-base lg:text-lg text-muted-foreground">{testimonial.specialty}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-6 sm:mt-8 lg:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors mobile-touch-target ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Urgência */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="premium-card p-6 sm:p-8 lg:p-10 max-w-xl mx-auto bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
            <div className="text-yellow-600 font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4">
              ⚡ OFERTA LIMITADA
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-foreground font-semibold">
              Ebook gratuito por tempo limitado
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mt-3 sm:mt-4">
              Garante já o seu antes que volte a ser pago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

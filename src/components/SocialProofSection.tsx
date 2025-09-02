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
    <section className="py-12 sm:py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Contador de Downloads */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="premium-card p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
              <Download className="text-primary w-8 h-8 sm:w-8 sm:h-8" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                {currentDownloads.toLocaleString('pt-BR')}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              Médicos já baixaram o ebook
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Junte-se a milhares de profissionais que já dominam POCUS
            </p>
          </div>
        </div>

        {/* Testimonials Rotativos */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mb-6 sm:mb-8">
            O que os médicos estão falando sobre o ebook
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((testimonial, index) => (
              <div 
                key={`${currentTestimonial}-${index}`} 
                className="premium-card p-4 sm:p-6 space-y-3 sm:space-y-4 transition-all duration-500 transform"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-3 sm:pt-4">
                  <div className="font-bold text-sm sm:text-base text-foreground">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.specialty}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Urgência */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="premium-card p-4 sm:p-6 max-w-lg mx-auto bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
            <div className="text-yellow-600 font-bold text-base sm:text-lg mb-2">
              ⚡ OFERTA LIMITADA
            </div>
            <p className="text-sm sm:text-base text-foreground font-semibold">
              Ebook gratuito por tempo limitado
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Garante já o seu antes que volte a ser pago
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

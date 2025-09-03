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
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 xl:py-28 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Contador de Downloads */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 xl:mb-20">
          <div className="premium-card p-8 sm:p-10 lg:p-12 xl:p-16 max-w-3xl xl:max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8 mb-6 lg:mb-8 xl:mb-10">
              <Download className="text-primary w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-primary">
                {currentDownloads.toLocaleString('pt-BR')}
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-5 xl:mb-6">
              Médicos já baixaram o ebook
            </h3>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground">
              Junte-se a milhares de profissionais que já dominam POCUS
            </p>
          </div>
        </div>

        {/* Testimonials Rotativos */}
        <div className="max-w-6xl xl:max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
            O que os médicos estão falando sobre o ebook
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {testimonials.slice(currentTestimonial, currentTestimonial + 2).map((testimonial, index) => (
              <div 
                key={`${currentTestimonial}-${index}`} 
                className="premium-card p-6 sm:p-8 lg:p-10 xl:p-12 space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 transition-all duration-500 transform hover:scale-105"
              >
                {/* Rating */}
                <div className="flex gap-1 sm:gap-1.5 lg:gap-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4 sm:pt-5 lg:pt-6 xl:pt-8">
                  <div className="font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-foreground">{testimonial.name}</div>
                  <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">{testimonial.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas Adicionais */}
        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-5xl xl:max-w-6xl mx-auto">
            <div className="premium-card p-6 sm:p-8 lg:p-10 xl:p-12 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 lg:mb-3">98%</div>
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">Satisfação dos usuários</div>
            </div>
            
            <div className="premium-card p-6 sm:p-8 lg:p-10 xl:p-12 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 lg:mb-3">4.9/5</div>
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">Avaliação média</div>
            </div>
            
            <div className="premium-card p-6 sm:p-8 lg:p-10 xl:p-12 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 lg:mb-3">15min</div>
              <div className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground">Tempo médio de leitura</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

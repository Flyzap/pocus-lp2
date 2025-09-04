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
    <section id="depoimentos" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Contador de Downloads */}
        <div className="text-center mb-12">
          <div className="premium-card p-6 max-w-lg mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-4">
              <Download className="text-primary w-8 h-8" />
              <div className="text-2xl lg:text-3xl font-bold text-primary">
                {currentDownloads.toLocaleString('pt-BR')}
              </div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
              Médicos já baixaram o ebook
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground">
              Junte-se a milhares de profissionais que já dominam POCUS
            </p>
          </div>
        </div>

        {/* Testimonials Rotativos */}
        <div className="mb-12">
          <h3 className="text-xl lg:text-2xl font-bold text-center text-foreground mb-8">
            O que os médicos estão falando sobre o ebook
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(currentTestimonial, currentTestimonial + 3).map((testimonial, index) => (
              <div 
                key={`${currentTestimonial}-${index}`} 
                className="premium-card p-6 space-y-4 transition-all duration-500 transform hover:scale-105"
              >
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-bold text-sm text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas Adicionais */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="premium-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xl font-bold text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação dos usuários</div>
            </div>
            
            <div className="premium-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Avaliação média</div>
            </div>
            
            <div className="premium-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xl font-bold text-foreground mb-2">15min</div>
              <div className="text-sm text-muted-foreground">Tempo médio de leitura</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
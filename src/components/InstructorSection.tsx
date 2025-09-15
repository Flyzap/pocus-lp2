import { useImageManager } from "@/hooks/useImageManager";
import { Star, Award, BookOpen, Users, MapPin, GraduationCap, CheckCircle, Play, Quote } from "lucide-react";
import { PremiumCard } from "@/components/ui/premium-card";

const INSTRUCTOR_CONFIG = {
  name: "Dr. Saulo Salgueiro",
  title: "Especialista em POCUS",
  subtitle: "Médico • Professor • Especialista em Pocus",
  experience: "4+ anos de experiência",
  specialty: "POCUS",
  location: "Brasil",
  university: "Universidade Federal de Alagoas",
  
  bio: `Médico com sólida experiência em Point-of-Care Ultrasound (POCUS). Graduado pela Universidade Federal de Alagoas, é reconhecido por sua expertise em ultrassonografia à beira-leito e por desenvolver protocolos práticos para emergência médica.`,
  
  highlights: [
    {
      icon: BookOpen,
      title: "POCUS Expert",
      description: "Ampla experiência em ultrassom point-of-care para emergência"
    },
    {
      icon: GraduationCap,
      title: "Professor",
      description: "Dedicado ao ensino e capacitação de profissionais"
    },
    {
      icon: Users,
      title: "Mentor",
      description: "Já capacitou médicos em POCUS"
    }
  ],
  
  credentials: [
    "4+ anos de experiência em POCUS",
    "Professor universitário",
    "Graduado pela UFAL",
    "Especialista em Emergência"
  ]
};

const InstructorSection = () => {
  const { images } = useImageManager();
  
  return (
    <section id="instrutor" className="relative py-8 md:py-12 lg:py-14 overflow-hidden">
      {/* Background Premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-premium/20 to-background"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-float animate-delay-200"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl animate-float animate-delay-700"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-3 md:px-6 lg:px-8">
        
        {/* Section Header Compacto */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-xs font-medium backdrop-blur-sm mb-4">
            <Award className="w-3 h-3 text-primary" />
            <span>Seu Especialista</span>
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">
            Conheça o
            <span className="block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Dr. Saulo Salgueiro
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-4 md:gap-6 items-start mb-4 md:mb-6">
          
          {/* Visual Premium - Mais Compacto */}
          <div className="relative animate-fade-in-left">
            <PremiumCard 
              variant="elevated" 
              animation="float"
              className="relative group overflow-hidden border-primary/20 bg-gradient-to-br from-gray-premium/30 to-black-premium/30 backdrop-blur-xl p-4"
            >
              <div className="relative">
                <img 
                  src={images.instructorProfile} 
                  alt={`${INSTRUCTOR_CONFIG.name} - ${INSTRUCTOR_CONFIG.title}`}
                  className="w-full aspect-square object-cover rounded-xl instructor-image group-hover:scale-105 transition-transform duration-700" 
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Play Overlay Reduzido */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm hover-lift">
                    <Play className="w-4 h-4 text-white ml-0.5 fill-white" />
                  </div>
                </div>
                
                {/* Info Overlay Simplificado */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm rounded-lg p-3">
                  <h3 className="text-white font-bold text-sm mb-1">{INSTRUCTOR_CONFIG.name}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-white/60 text-xs ml-1">Especialista</span>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </div>
          
          {/* Content Premium - Reorganizado */}
          <div className="space-y-6 animate-fade-in-right">
            
            {/* Título e Bio Compactos */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Quote className="w-5 h-5 text-primary/40 flex-shrink-0" />
                <h3 className="text-lg font-bold text-foreground">{INSTRUCTOR_CONFIG.title}</h3>
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent mb-3"></div>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {INSTRUCTOR_CONFIG.bio}
              </p>
            </div>
            
            {/* Highlights Responsivos - Mobile Single Column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INSTRUCTOR_CONFIG.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <highlight.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{highlight.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Credentials Compactas */}
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                <CheckCircle className="w-3 h-3 text-green-400" />
                Credenciais
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {INSTRUCTOR_CONFIG.credentials.map((credential, index) => (
                  <span 
                    key={index} 
                    className="text-xs font-medium text-foreground bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 px-2 py-1 rounded-full hover:border-primary/40 transition-colors duration-300"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
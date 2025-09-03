import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useImageManager } from "@/hooks/useImageManager";

// 👨‍⚕️ PERSONALIZAÇÃO RÁPIDA:
// Para personalizar nome, especialidade e credenciais,
// modifique as constantes abaixo:
const INSTRUCTOR_CONFIG = {
  name: "Dr. Saulo Salgueiro",
  title: "Médico atuante em emergência e na terapia intensiva",
  experience: "4 anos de experiência",
  specialty: "POCUS",
  location: "Brasil",
  
  // 📝 Biografia (pode usar HTML simples para formatação)
  bio: `é médico atuante em emergência e na terapia intensiva com mais de 4 anos de experiência em POCUS. Formado pela Universidade Federal de Alagoas.`,
  
  // 🏆 Credenciais (adicione ou remova itens conforme necessário)
  credentials: [
    "✅ 4+ anos de experiência",
    "✅ Professor universitário"
  ]
};

const InstructorSection = () => {
  const { images } = useImageManager();
  
  return (
    <section id="instrutor" className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl xl:max-w-8xl mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Instructor Photo & Video */}
            <div className="relative order-first lg:order-last xl:col-span-6">
              <div className="relative">
                <img 
                  src={images.instructorProfile} 
                  alt={`${INSTRUCTOR_CONFIG.name} - Especialista em ${INSTRUCTOR_CONFIG.specialty}`}
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[40rem] 2xl:h-[40rem] object-cover rounded-full mx-auto premium-glow instructor-image" 
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
                {/* 🎥 Espaço reservado para vídeo de apresentação (futuro) */}
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 text-center lg:text-left xl:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-foreground">
                Conheça seu <span className="text-primary">Instrutor</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground">
                <p>
                  <strong className="text-primary">{INSTRUCTOR_CONFIG.name}</strong> {INSTRUCTOR_CONFIG.bio}
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 lg:gap-6 xl:gap-8">
                {INSTRUCTOR_CONFIG.credentials.map((credential, index) => (
                  <span 
                    key={index} 
                    className="text-sm sm:text-base lg:text-lg xl:text-xl font-medium text-primary bg-primary/10 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-full"
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
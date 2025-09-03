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
    <section id="instrutor" className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 3xl:py-36 bg-secondary">
      <div className="desktop-container mx-auto px-4 xl:px-8 2xl:px-12 3xl:px-16">
        <div className="max-w-8xl xl:max-w-9xl 2xl:max-w-[2400px] mx-auto">
          <div className="grid lg:grid-cols-2 xl:grid-cols-12 desktop-spacing items-center">
            {/* Instructor Photo & Video */}
            <div className="relative order-first lg:order-last xl:col-span-6 2xl:col-span-5 3xl:col-span-6">
              <div className="relative">
                <img 
                  src={images.instructorProfile} 
                  alt={`${INSTRUCTOR_CONFIG.name} - Especialista em ${INSTRUCTOR_CONFIG.specialty}`}
                  className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] xl:w-[36rem] xl:h-[36rem] 2xl:w-[44rem] 2xl:h-[44rem] 3xl:w-[50rem] 3xl:h-[50rem] object-cover rounded-full mx-auto premium-glow instructor-image" 
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
                {/* 🎥 Espaço reservado para vídeo de apresentação (futuro) */}
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="xl:col-span-6 2xl:col-span-7 3xl:col-span-6 space-y-8 xl:space-y-12 2xl:space-y-16 3xl:space-y-20 text-center lg:text-left">
              <h2 className="desktop-heading-1 font-bold text-foreground">
                Conheça seu <span className="text-primary">Instrutor</span>
              </h2>
              
              <div className="space-y-6 xl:space-y-8 2xl:space-y-10 3xl:space-y-12 desktop-body text-muted-foreground">
                <p>
                  <strong className="text-primary">{INSTRUCTOR_CONFIG.name}</strong> {INSTRUCTOR_CONFIG.bio}
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap justify-center lg:justify-start desktop-spacing">
                {INSTRUCTOR_CONFIG.credentials.map((credential, index) => (
                  <span 
                    key={index} 
                    className="desktop-text-scale font-medium text-primary bg-primary/10 px-6 py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 3xl:px-12 3xl:py-6 rounded-full"
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
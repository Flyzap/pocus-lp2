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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Instructor Photo & Video */}
            <div className="relative">
              <div className="relative">
                <img 
                  src={images.instructorProfile} 
                  alt={`${INSTRUCTOR_CONFIG.name} - Especialista em ${INSTRUCTOR_CONFIG.specialty}`}
                  className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] object-cover rounded-full mx-auto premium-glow instructor-image" 
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
                {/* 🎥 Espaço reservado para vídeo de apresentação (futuro) */}
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Conheça seu <span className="text-primary">Instrutor</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-primary">{INSTRUCTOR_CONFIG.name}</strong> {INSTRUCTOR_CONFIG.bio}
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-4">
                {INSTRUCTOR_CONFIG.credentials.map((credential, index) => (
                  <span 
                    key={index} 
                    className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
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
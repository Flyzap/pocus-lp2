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
    <section id="instrutor" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Instructor Photo & Video */}
          <div className="relative order-first lg:order-last">
            <div className="relative">
              <img 
                src={images.instructorProfile} 
                alt={`${INSTRUCTOR_CONFIG.name} - Especialista em ${INSTRUCTOR_CONFIG.specialty}`}
                className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full mx-auto premium-glow instructor-image" 
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              {/* 🎥 Espaço reservado para vídeo de apresentação (futuro) */}
            </div>
          </div>
          
          {/* Bio Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Conheça seu <span className="text-primary">Instrutor</span>
            </h2>
            
            <div className="space-y-4 text-base text-muted-foreground">
              <p>
                <strong className="text-primary">{INSTRUCTOR_CONFIG.name}</strong> {INSTRUCTOR_CONFIG.bio}
              </p>
            </div>
            
            {/* Credentials */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {INSTRUCTOR_CONFIG.credentials.map((credential, index) => (
                <span 
                  key={index} 
                  className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
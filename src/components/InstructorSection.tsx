import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
// 📸 SUBSTITUIR IMAGEM DO INSTRUTOR:
// Para adicionar sua própria foto, substitua o arquivo "instructor-profile.jpg" 
// na pasta src/assets/ pela sua imagem.
// DIMENSÕES RECOMENDADAS: 800x800px (formato quadrado) ou maior
// FORMATO: JPG, PNG ou WebP
// QUALIDADE: Alta resolução para melhor resultado no premium-glow
import instructorProfile from "@/assets/instructor-profile.jpg";

// 👨‍⚕️ PERSONALIZAÇÃO RÁPIDA:
// Para personalizar nome, especialidade e credenciais,
// modifique as constantes abaixo:
const INSTRUCTOR_CONFIG = {
  name: "Dr. Saulo Salgueiro",
  title: "Médico Emergencista",
  experience: "5 anos de experiência",
  specialty: "POCUS",
  location: "Brasil",
  
  // 📝 Biografia (pode usar HTML simples para formatação)
  bio: `é médico emergencista com mais de 5 anos de experiência em POCUS e já treinou mais de médicos em todo o Brasil.`,
  
  // 🏆 Credenciais (adicione ou remova itens conforme necessário)
  credentials: [
    "✅ 15+ anos de experiência",
    "✅ 5.000+ médicos treinados", 
    "✅ Certificado SBUS",
    "✅ Professor universitário"
  ]
};

const InstructorSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Instructor Photo & Video */}
            <div className="relative">
              <div className="relative">
                <img 
                  src={instructorProfile} 
                  alt={`${INSTRUCTOR_CONFIG.name} - Especialista em ${INSTRUCTOR_CONFIG.specialty}`}
                  className="w-80 h-80 object-cover rounded-full mx-auto premium-glow" 
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
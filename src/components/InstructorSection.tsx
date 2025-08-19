import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import instructorProfile from "@/assets/instructor-profile.jpg";

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
                  alt="Dr. Carlos Medeiros - Especialista em POCUS"
                  className="w-80 h-80 object-cover rounded-full mx-auto premium-glow"
                />
                <Button 
                  size="lg"
                  className="absolute bottom-4 right-1/2 transform translate-x-1/2 bg-primary hover:bg-primary-dark rounded-full w-16 h-16 p-0 premium-glow animate-pulse-glow"
                >
                  <Play size={24} className="text-primary-foreground ml-1" />
                </Button>
              </div>
            </div>
            
            {/* Bio Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Conheça seu <span className="text-primary">Instrutor</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-primary">Dr. Carlos Medeiros</strong> é médico emergencista com mais de{" "}
                  <strong className="text-primary">15 anos de experiência</strong> em POCUS e já treinou mais de{" "}
                  <strong className="text-primary">5.000 médicos</strong> em todo o Brasil.
                </p>
                
                <p>
                  Especialista certificado pela <strong className="text-primary">Sociedade Brasileira de Ultrassonografia</strong>,
                  com MBA em Gestão Hospitalar e pós-graduação em Medicina de Emergência pela USP.
                </p>
                
                <p>
                  Atualmente é <strong className="text-primary">coordenador do setor de ultrassonografia</strong> de um dos 
                  maiores hospitais de São Paulo e professor convidado em diversos congressos nacionais.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-4">
                {[
                  "✅ 15+ anos de experiência",
                  "✅ 5.000+ médicos treinados", 
                  "✅ Certificado SBUS",
                  "✅ Professor universitário"
                ].map((credential, index) => (
                  <div key={index} className="text-primary font-medium">
                    {credential}
                  </div>
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
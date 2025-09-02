import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useImageManager } from "@/hooks/useImageManager";

const HeroSection = () => {
  const { images } = useImageManager();
  
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Domine a</span>{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Ultrassonografia
                </span>{" "}
                <span className="text-foreground">à Beira-leito</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                O curso mais completo de POCUS do Brasil. Transforme sua prática médica com diagnóstico rápido e decisões seguras.
              </p>
            </div>
            
            {/* Mini Video Thumbnails */}
            <div className="flex gap-4 mb-8">
              {['Bastidores', 'Depoimentos', 'Aula Prática'].map((label, index) => (
                <div key={index} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-14 bg-card rounded-lg flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-300 premium-glow">
                    <Play size={20} className="text-primary" />
                  </div>
                  <span className="text-xs mt-2 text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 text-lg premium-glow group"
            >
              Assistir Aula Gratuita
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={images.instructorHero} 
                alt="Instrutor de POCUS ensinando ultrassonografia" 
                className="w-full h-auto rounded-2xl shadow-2xl premium-glow high-quality-image"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
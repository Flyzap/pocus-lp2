import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { PremiumCard } from "@/components/ui/premium-card";
import { ArrowRight, CreditCard, Shield, Clock, Play, Star, Users, Award, CheckCircle, Sparkles, Zap } from "lucide-react";
import { useImageManager } from "@/hooks/useImageManager";

const HeroSection = () => {
  const { images } = useImageManager();

  const handleComprar = () => {
    // Implementar lógica de checkout/pagamento
    console.log("Iniciando processo de compra...");
  };
  
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Premium - Preto original */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-premium to-black-premium"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7c121b]/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#7c121b]/15 rounded-full mix-blend-multiply filter blur-xl animate-float animate-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#7c121b]/10 rounded-full mix-blend-multiply filter blur-xl animate-float animate-delay-400"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-3 md:px-8 lg:px-10 xl:px-12 pt-20 pb-4 md:pt-24 lg:pt-28 lg:pb-8 w-full">
        <div className="grid lg:grid-cols-[1fr,1fr] gap-6 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-3 lg:space-y-3 text-center lg:text-left animate-fade-in-left">
            
            {/* Badge com Melhor Visibilidade */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7c121b]/20 border-2 border-[#7c121b]/40 text-xs md:text-sm font-semibold text-[#7c121b] backdrop-blur-sm shadow-lg">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-[#7c121b] fill-[#7c121b]" />
              <span className="hidden sm:inline">Curso Completo de Ultrassom Point-of-Care</span>
              <span className="sm:hidden">POCUS Completo</span>
            </div>

            {/* Headline Principal - Abordagem Minimalista */}
            <div className="space-y-2 md:space-y-3 lg:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-[0.9] text-center lg:text-left">
                <span className="block text-foreground/90 text-lg sm:text-xl md:text-lg lg:text-lg font-normal mb-2 tracking-wide">
                  Domine a
                </span>
                <span className="block text-[#7c121b] font-extrabold tracking-tighter">
                  ULTRASSONOGRAFIA
                </span>
                <span className="block text-foreground/90 text-lg sm:text-xl md:text-lg lg:text-lg font-normal mt-2 tracking-wide">
                  à beira-leito
                </span>
              </h1>
              
              {/* Subtítulo */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-lg lg:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
                  Aprenda a dominar o POCUS e transforme sua prática médica com o curso mais completo do Brasil
                </p>
              </div>
            </div>


            {/* CTA Desktop */}
            <div className="hidden lg:block">
              <PremiumButton
                onClick={handleComprar}
                variant="cta"
                size="lg"
                glow="subtle"
                shimmer={true}
                icon={<CreditCard className="w-5 h-5" />}
                className="w-full text-base font-bold py-6"
              >
                GARANTIR MINHA VAGA AGORA
              </PremiumButton>
            </div>
          </div>

          {/* CTA Mobile */}
          <div className="lg:hidden w-full px-1">
            <PremiumButton
              onClick={handleComprar}
              variant="cta"
              size="lg"
              glow="subtle"
              shimmer={true}
              icon={<CreditCard className="w-5 h-5" />}
              className="w-full text-base font-bold py-6"
            >
              GARANTIR MINHA VAGA AGORA
            </PremiumButton>
          </div>

          {/* Right Column - Visual Premium */}
          <div className="relative animate-fade-in-right animate-delay-200 flex justify-center lg:justify-end">
            {/* Hero Visual Premium */}
            <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md mx-auto lg:mx-0">
              <PremiumCard 
                variant="elevated" 
                animation="float"
                size="sm"
                className="relative group overflow-hidden border-[#7c121b]/20 bg-gradient-to-br from-gray-premium/50 to-black-premium/50 backdrop-blur-xl"
              >
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src={images.instructorHero} 
                  alt="Dr. Saulo Salgueiro - Especialista em POCUS" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 instructor-image"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Overlay Premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-[#7c121b]/90 rounded-full flex items-center justify-center backdrop-blur-sm hover-lift">
                    <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                  </div>
                </div>
                
                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Dr. Saulo Salgueiro</h3>
                    <p className="text-xs text-white/80">Especialista em POCUS</p>
                    <div className="flex items-center gap-1 text-xs">
                      <div className="flex items-center gap-0.5">
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                        <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#7c121b]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </PremiumCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { PremiumButton } from "@/components/ui/premium-button";
import { PremiumInput } from "@/components/ui/premium-input";
import { PremiumCard } from "@/components/ui/premium-card";
import { ArrowRight, Download, Shield, Clock, Play, Star, Users, Award, CheckCircle } from "lucide-react";
import { useImageManager } from "@/hooks/useImageManager";
import { useState } from "react";
import { formatWhatsApp, validateWhatsApp } from "@/utils/whatsappValidation";

const HeroSection = () => {
  const { images } = useImageManager();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
    // Limpar erro quando usuário digita
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validar nome
    if (!name.trim()) {
      setError("Por favor, insira seu nome");
      return;
    }
    
    // Validar WhatsApp
    const validation = validateWhatsApp(whatsapp);
    if (!validation.isValid) {
      setError(validation.errorMessage || "WhatsApp inválido");
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Aqui você integraria com sua API
      // const response = await fetch('/api/capture-lead', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ 
      //     name: name.trim(), 
      //     whatsapp: validation.formattedNumber 
      //   })
      // });
      
      // Simular envio por enquanto
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      setError("Erro ao enviar. Tente novamente.");
    }
  };
  
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Premium */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-gray-premium to-black-premium"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary/15 rounded-full mix-blend-multiply filter blur-xl animate-float animate-delay-200"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-float animate-delay-400"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 lg:px-10 xl:px-12 pt-16 pb-6 md:pt-20 md:pb-8 w-full">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-6 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-5 text-center lg:text-left animate-fade-in-left">
            
            {/* Badge Premium */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-sm font-medium backdrop-blur-sm">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span>Curso #1 em Ultrassom Point-of-Care</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">Domine a</span>
                <span className="block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent animate-glow-pulse">
                  Ultrassonografia
                </span>
                <span className="block text-foreground">à Beira-leito</span>
              </h1>
              
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Material premium gratuito + <span className="text-primary font-semibold">guia de emergência</span> para usar no plantão hoje mesmo
              </p>
            </div>


            {/* Form Desktop */}
            <div className="hidden lg:block max-w-md xl:max-w-lg space-y-3">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  <PremiumInput
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Seu nome completo"
                    variant="glassmorphism"
                    state={error && !name.trim() ? "error" : "default"}
                    required
                    disabled={isSuccess}
                  />
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-2">
                      <PremiumInput
                        type="tel"
                        value={whatsapp}
                        onChange={handleWhatsAppChange}
                        placeholder="(82) 98103-9197"
                        variant="glassmorphism"
                        state={error && !validateWhatsApp(whatsapp).isValid ? "error" : "default"}
                        required
                        disabled={isSuccess}
                      />
                    </div>
                    <PremiumButton
                      type="submit"
                      variant="cta"
                      size="default"
                      loading={isLoading}
                      disabled={isLoading || isSuccess}
                      glow="subtle"
                      shimmer={!isLoading && !isSuccess}
                      icon={isSuccess ? <CheckCircle className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    >
                      {isSuccess ? "Enviado!" : "QUERO"}
                    </PremiumButton>
                  </div>
                </div>
              </form>
              
              {error && (
                <p className="text-red-400 text-sm font-medium flex items-center gap-2">
                  <span className="w-4 h-4">⚠</span>
                  {error}
                </p>
              )}
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-start gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Download className="w-3 h-3 text-green-400" />
                  <span>Instantâneo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-green-400" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-green-400" />
                  <span>Sem spam</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Mobile - Apenas no mobile, acima da imagem */}
          <div className="lg:hidden mb-6 space-y-3 w-full">
            <form onSubmit={handleSubmit} className="space-y-3">
              <PremiumInput
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Seu nome completo"
                variant="glassmorphism"
                state={error && !name.trim() ? "error" : "default"}
                required
                disabled={isSuccess}
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <PremiumInput
                    type="tel"
                    value={whatsapp}
                    onChange={handleWhatsAppChange}
                    placeholder="(82) 98103-9197"
                    variant="glassmorphism"
                    state={error && !validateWhatsApp(whatsapp).isValid ? "error" : "default"}
                    required
                    disabled={isSuccess}
                  />
                </div>
                <PremiumButton
                  type="submit"
                  variant="cta"
                  size="default"
                  loading={isLoading}
                  disabled={isLoading || isSuccess}
                  glow="subtle"
                  shimmer={!isLoading && !isSuccess}
                  icon={isSuccess ? <CheckCircle className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                  className="sm:col-span-1"
                >
                  {isSuccess ? "Enviado!" : "QUERO"}
                </PremiumButton>
              </div>
            </form>
            
            {error && (
              <p className="text-red-400 text-sm font-medium flex items-center gap-2 justify-center">
                <span className="w-4 h-4">⚠</span>
                {error}
              </p>
            )}
            
            {/* Trust Indicators Mobile */}
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Download className="w-3 h-3 text-green-400" />
                <span>Instantâneo</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-green-400" />
                <span>Seguro</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-green-400" />
                <span>Sem spam</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Premium */}
          <div className="relative animate-fade-in-right animate-delay-200 flex justify-center lg:justify-end">
            {/* Hero Visual Premium */}
            <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md mx-auto lg:mx-0">
              <PremiumCard 
                variant="elevated" 
                animation="float"
                size="sm"
                className="relative group overflow-hidden border-primary/20 bg-gradient-to-br from-gray-premium/50 to-black-premium/50 backdrop-blur-xl"
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
                  <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm hover-lift">
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
                      <span className="text-white/60 ml-1">5.0 • 2.8k+</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </PremiumCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

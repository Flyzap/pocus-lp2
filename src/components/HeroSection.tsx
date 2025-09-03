import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, Shield, Clock } from "lucide-react";
import { useImageManager } from "@/hooks/useImageManager";
import { useState } from "react";
import { formatWhatsApp, validateWhatsApp } from "@/utils/whatsappValidation";

const HeroSection = () => {
  const { images } = useImageManager();
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
      //   body: JSON.stringify({ whatsapp: validation.formattedNumber })
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
    <section className="relative desktop-hero hero-gradient flex items-center justify-center overflow-hidden pt-20 pb-12 xl:pt-24 2xl:pt-28 3xl:pt-32">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[800px] 2xl:h-[800px] 3xl:w-[1000px] 3xl:h-[1000px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[500px] 2xl:h-[500px] 3xl:w-[600px] 3xl:h-[600px] bg-primary/15 rounded-full blur-2xl animate-float"></div>
      
      <div className="desktop-container mx-auto px-4 xl:px-8 2xl:px-12 3xl:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 xl:grid-cols-12 desktop-spacing items-center">
          {/* Content - Expansão inteligente para desktop */}
          <div className="xl:col-span-7 2xl:col-span-8 3xl:col-span-7 space-y-8 xl:space-y-12 2xl:space-y-16 3xl:space-y-20 text-center lg:text-left order-1">
            <div className="space-y-6 xl:space-y-8 2xl:space-y-10 3xl:space-y-12">
              <h1 className="desktop-heading-hero font-bold leading-tight">
                <span className="text-foreground">Domine a</span>{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Ultrassonografia
                </span>{" "}
                <span className="text-foreground">à Beira-leito</span>
              </h1>
              <p className="desktop-body-lg text-muted-foreground max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto lg:mx-0">
                Ebook gratuito + PDF de emergência para usar no plantão hoje mesmo
              </p>
            </div>
            
            {/* Prova Social */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 xl:gap-6 2xl:gap-8 3xl:gap-10 mb-6 xl:mb-10 2xl:mb-12 3xl:mb-16">
              <div className="flex items-center gap-3 xl:gap-4 2xl:gap-5">
                <Download className="text-primary w-5 h-5 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 3xl:w-10 3xl:h-10" />
                <span className="text-foreground font-bold desktop-body">30+ downloads</span>
              </div>
              <div className="hidden sm:block w-2 h-2 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 bg-primary rounded-full"></div>
              <div className="desktop-body text-muted-foreground">Médicos já dominam POCUS</div>
            </div>
          </div>
          
          {/* Hero Image - Aproveitamento máximo desktop */}
          <div className="xl:col-span-5 2xl:col-span-4 3xl:col-span-5 relative order-2 lg:order-2">
            <div className="relative">
              <img 
                src={images.instructorHero} 
                alt="Dr. Saulo Salgueiro - Especialista em POCUS" 
                className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl 4xl:max-w-5xl rounded-xl xl:rounded-2xl 2xl:rounded-3xl shadow-2xl premium-glow high-quality-image mx-auto"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-xl xl:rounded-2xl 2xl:rounded-3xl"></div>
              
              {/* Badge do Instrutor */}
              <div className="absolute bottom-4 xl:bottom-6 2xl:bottom-8 3xl:bottom-10 left-4 xl:left-6 2xl:left-8 3xl:left-10 bg-background/90 backdrop-blur-sm rounded-lg xl:rounded-xl 2xl:rounded-2xl desktop-padding">
                <div className="desktop-body font-bold text-foreground">Dr. Saulo Salgueiro</div>
                <div className="desktop-text-scale text-muted-foreground">Especialista em POCUS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário WhatsApp - Expandido para desktop */}
        <div className="mt-12 xl:mt-16 2xl:mt-20 3xl:mt-24 text-center lg:text-left order-3">
          <div className="xl:max-w-2xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto lg:mx-0">
            <div className="premium-card desktop-padding">
              <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-8 2xl:space-y-10">
                <div className="space-y-3 xl:space-y-4 2xl:space-y-5">
                  <Input 
                    type="tel"
                    value={whatsapp}
                    onChange={handleWhatsAppChange}
                    placeholder="(82) 98103-9197"
                    autoComplete="tel"
                    inputMode="tel"
                    className={`glow-border bg-background/50 text-foreground placeholder:text-muted-foreground h-14 xl:h-16 2xl:h-20 3xl:h-24 desktop-body mobile-input ${
                      error ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    required
                    disabled={isSuccess}
                  />
                  {error && (
                    <p className="text-red-500 desktop-text-scale font-medium">{error}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLoading || isSuccess}
                  className={`w-full font-bold desktop-padding desktop-body premium-glow group h-14 xl:h-16 2xl:h-20 3xl:h-24 mobile-button ${
                    isSuccess 
                      ? 'bg-green-600 hover:bg-green-600' 
                      : error
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-primary hover:bg-primary-dark'
                  } text-primary-foreground`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">ENVIANDO...</span>
                      <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : isSuccess ? (
                    <>✅ EBOOK ENVIADO!</>
                  ) : error ? (
                    <>❌ ERRO - TENTE NOVAMENTE</>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">QUERO O EBOOK GRÁTIS AGORA</span>
                      <ArrowRight size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </Button>
                
                {/* Garantias */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 xl:gap-6 2xl:gap-8 3xl:gap-10 desktop-text-scale text-muted-foreground">
                  <div className="flex items-center justify-center gap-2 xl:gap-3 2xl:gap-4">
                    <Download size={14} className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-green-500" />
                    <span>Download instantâneo</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 xl:gap-3 2xl:gap-4">
                    <Shield size={14} className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-green-500" />
                    <span>Sem spam</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 xl:gap-3 2xl:gap-4">
                    <Clock size={14} className="xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 3xl:w-7 3xl:h-7 text-green-500" />
                    <span>Dados seguros</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
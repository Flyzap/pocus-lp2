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
    <section className="relative min-h-[100vh] sm:min-h-screen hero-gradient flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-18 lg:pt-20">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-float"></div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content - Sempre primeiro em mobile */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-1">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-foreground">Domine a</span>{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Ultrassonografia
                </span>{" "}
                <span className="text-foreground">à Beira-leito</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Ebook gratuito + PDF de emergência para usar no plantão hoje mesmo
              </p>
            </div>
            
            {/* Prova Social */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
              <div className="flex items-center gap-2">
                <Download className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-foreground font-bold text-sm sm:text-base lg:text-lg">30+ downloads</span>
              </div>
              <div className="hidden sm:block w-2 h-2 bg-primary rounded-full"></div>
              <div className="text-sm sm:text-base lg:text-lg text-muted-foreground">Médicos já dominam POCUS</div>
            </div>
          </div>
          
          {/* Hero Image - Entre subheadline e formulário em mobile */}
          <div className="relative order-2 lg:order-2">
            <div className="relative">
              <img 
                src={images.instructorHero} 
                alt="Dr. Saulo Salgueiro - Especialista em POCUS" 
                className="w-full h-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none rounded-xl sm:rounded-2xl shadow-2xl premium-glow high-quality-image mx-auto"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-xl sm:rounded-2xl"></div>
              
              {/* Badge do Instrutor */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-background/90 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 lg:p-3">
                <div className="text-xs sm:text-sm lg:text-base font-bold text-foreground">Dr. Saulo Salgueiro</div>
                <div className="text-xs text-muted-foreground">Especialista em POCUS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário WhatsApp - Sempre por último em mobile */}
        <div className="mt-8 sm:mt-10 lg:mt-14 text-center lg:text-left order-3">
          <div className="premium-card p-4 sm:p-5 lg:p-6 max-w-sm sm:max-w-md mx-auto lg:mx-0">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <Input 
                  type="tel"
                  value={whatsapp}
                  onChange={handleWhatsAppChange}
                  placeholder="(82) 98103-9197"
                  autoComplete="tel"
                  inputMode="tel"
                  className={`glow-border bg-background/50 text-foreground placeholder:text-muted-foreground h-14 sm:h-16 lg:h-18 text-base sm:text-lg lg:text-xl mobile-input ${
                    error ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  required
                  disabled={isSuccess}
                />
                {error && (
                  <p className="text-red-500 text-xs sm:text-sm font-medium">{error}</p>
                )}
              </div>
              
              <Button 
                type="submit"
                size="lg"
                disabled={isLoading || isSuccess}
                                  className={`w-full font-bold px-5 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-base sm:text-lg lg:text-xl premium-glow group h-14 sm:h-16 lg:h-18 mobile-button ${
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
                    <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : isSuccess ? (
                  <>✅ EBOOK ENVIADO!</>
                ) : error ? (
                  <>❌ ERRO - TENTE NOVAMENTE</>
                ) : (
                  <div className="flex items-center justify-center">
                    <span className="mr-2">QUERO O EBOOK GRÁTIS AGORA</span>
                    <ArrowRight size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
              
              {/* Garantias */}
              <div className="flex flex-col sm:flex-row justify-center gap-1.5 sm:gap-2 lg:gap-4 text-xs text-muted-foreground">
                <div className="flex items-center justify-center gap-1">
                  <Download size={10} className="sm:w-3 sm:h-3 text-green-500" />
                  <span>Download instantâneo</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Shield size={10} className="sm:w-3 sm:h-3 text-green-500" />
                  <span>Sem spam</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Clock size={10} className="sm:w-3 sm:h-3 text-green-500" />
                  <span>Dados seguros</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
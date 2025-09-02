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
                Ebook gratuito + PDF de emergência para usar no plantão hoje mesmo
              </p>
            </div>
            
            {/* Prova Social */}
            <div className="flex items-center gap-6 mb-8">
                              <div className="flex items-center gap-2">
                  <Download className="text-primary" size={20} />
                  <span className="text-foreground font-bold">30+ downloads</span>
                </div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="text-sm text-muted-foreground">Médicos já dominam POCUS</div>
            </div>
            
            {/* Formulário WhatsApp */}
            <div className="premium-card p-6 max-w-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    type="tel"
                    value={whatsapp}
                    onChange={handleWhatsAppChange}
                    placeholder="(82) 98103-9197"
                    className={`glow-border bg-background/50 text-foreground placeholder:text-muted-foreground h-14 text-lg ${
                      error ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    required
                    disabled={isSuccess}
                  />
                  {error && (
                    <p className="text-red-500 text-sm font-medium">{error}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isLoading || isSuccess}
                  className={`w-full font-bold px-8 py-4 text-lg premium-glow group h-16 ${
                    isSuccess 
                      ? 'bg-green-600 hover:bg-green-600' 
                      : error
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-primary hover:bg-primary-dark'
                  } text-primary-foreground`}
                >
                  {isLoading ? (
                    <>ENVIANDO... <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
                  ) : isSuccess ? (
                    <>✅ EBOOK ENVIADO!</>
                  ) : error ? (
                    <>❌ ERRO - TENTE NOVAMENTE</>
                  ) : (
                    <>QUERO O EBOOK GRÁTIS AGORA <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </Button>
                
                {/* Garantias */}
                <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Download size={12} className="text-green-500" />
                    <span>Download instantâneo</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield size={12} className="text-green-500" />
                    <span>Sem spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-green-500" />
                    <span>Dados seguros</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={images.instructorHero} 
                alt="Dr. Saulo Salgueiro - Especialista em POCUS" 
                className="w-full h-auto rounded-2xl shadow-2xl premium-glow high-quality-image"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
              
              {/* Badge do Instrutor */}
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm font-bold text-foreground">Dr. Saulo Salgueiro</div>
                <div className="text-xs text-muted-foreground">Especialista em POCUS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
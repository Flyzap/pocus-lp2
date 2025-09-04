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
    <section id="hero" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12 md:py-20 min-h-screen flex items-center">
      <div className="relative w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight">
              <span className="text-foreground">Domine a</span>{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Ultrassonografia
              </span>{" "}
              <span className="text-foreground">à Beira-leito</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-600">
              Ebook gratuito + PDF de emergência para usar no plantão hoje mesmo
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="relative aspect-[4/3] lg:aspect-[5/4]">
            <img 
              src={images.instructorHero} 
              alt="Dr. Saulo Salgueiro - Especialista em POCUS" 
              className="w-full h-full object-contain rounded-xl shadow-2xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Formulário WhatsApp */}
        <div className="mt-12 max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="tel"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              placeholder="(82) 98103-9197"
              autoComplete="tel"
              inputMode="tel"
              className={`flex-1 ${error ? 'border-red-500 focus:border-red-500' : ''}`}
              required
              disabled={isSuccess}
            />
            <Button 
              type="submit"
              disabled={isLoading || isSuccess}
              className="px-6 py-3 text-white font-semibold"
              style={{background:'#ff0033'}}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <span className="mr-2">Enviando...</span>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : isSuccess ? (
                "✅ Enviado!"
              ) : error ? (
                "❌ Erro"
              ) : (
                "Quero o Ebook"
              )}
            </Button>
          </form>
          
          {error && (
            <p className="text-red-500 text-sm font-medium mt-2">{error}</p>
          )}
          
          {/* Garantias */}
          <div className="flex justify-start gap-4 text-sm text-neutral-600 mt-4">
            <div className="flex items-center gap-1">
              <Download size={16} className="text-green-500" />
              <span>Download instantâneo</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield size={16} className="text-green-500" />
              <span>Sem spam</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-green-500" />
              <span>Dados seguros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
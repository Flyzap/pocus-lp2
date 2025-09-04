import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, Shield, Clock } from "lucide-react";
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
    <section id="hero" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 pt-28 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center">
      <div className="relative w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:items-start">
          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
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
          
          {/* Hero Image - Versão Elegante */}
          <div className="relative aspect-[4/3] lg:aspect-[5/4] order-2 lg:order-2 group">
            {/* Container da imagem com efeitos */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-700">
              <img 
                src={images.instructorHero} 
                alt="Dr. Saulo Salgueiro - Especialista em POCUS" 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Texto sobreposto */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold">
                  Dr. Saulo Salgueiro
                </h3>
              </div>
              
              {/* Borda de luz sutil */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
              
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Formulário WhatsApp - Centralizado no mobile, abaixo da imagem */}
        <div className="mt-8 lg:mt-8 max-w-md mx-auto lg:mx-0 order-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input 
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              placeholder="Seu nome completo"
              autoComplete="name"
              className={`${error && !name.trim() ? 'border-red-500 focus:border-red-500' : ''}`}
              required
              disabled={isSuccess}
            />
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="tel"
                value={whatsapp}
                onChange={handleWhatsAppChange}
                placeholder="(82) 98103-9197"
                autoComplete="tel"
                inputMode="tel"
                className={`flex-1 ${error && validateWhatsApp(whatsapp).isValid === false ? 'border-red-500 focus:border-red-500' : ''}`}
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
            </div>
          </form>
          
          {error && (
            <p className="text-red-500 text-sm font-medium mt-2">{error}</p>
          )}
          
          {/* Garantias */}
          <div className="flex justify-center lg:justify-start gap-4 text-sm text-neutral-600 mt-4">
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

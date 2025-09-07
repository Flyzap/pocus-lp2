import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield, Clock, CreditCard } from "lucide-react";
import { useImageManager } from "@/hooks/useImageManager";
import { useState } from "react";
import { formatWhatsApp, validateWhatsApp } from "@/utils/whatsappValidation";

const SalesHeroSection = () => {
  const { images } = useImageManager();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!name.trim()) {
      setError("Por favor, insira seu nome");
      return;
    }
    
    const validation = validateWhatsApp(whatsapp);
    if (!validation.isValid) {
      setError(validation.errorMessage || "WhatsApp inválido");
      return;
    }
    
    setIsLoading(true);
    
    try {
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      setError("Erro ao processar. Tente novamente.");
    }
  };
  
  return (
    <section id="hero" className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 pt-28 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center">
      <div className="relative w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-start">
          {/* Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight">
              <span className="text-foreground">Domine o</span>{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                POCUS Completo
              </span>{" "}
              <span className="text-foreground">em 30 Dias</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-neutral-600">
              Curso completo + Certificação + Casos práticos + Suporte VIP
            </p>

            {/* Preço Box */}
            <div className="mt-6 premium-card p-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-sm text-muted-foreground line-through mb-2">
                  De R$ 997
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  R$ 497
                </div>
                <div className="text-lg text-foreground mb-4">
                  ou 3x de <span className="font-bold">R$ 165</span>
                </div>
              </div>
            </div>
            
            {/* Formulário - Visível apenas no desktop */}
            <div className="hidden lg:block mt-6 max-w-md">
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
                        <span className="mr-2">Processando...</span>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : isSuccess ? (
                      "✅ Sucesso!"
                    ) : error ? (
                      "❌ Erro"
                    ) : (
                      "🔥 GARANTIR MINHA VAGA AGORA"
                    )}
                  </Button>
                </div>
              </form>
              
              {error && (
                <p className="text-red-500 text-sm font-medium mt-2">{error}</p>
              )}
              
              {/* Garantias */}
              <div className="flex justify-start gap-4 text-sm text-neutral-600 mt-4">
                <div className="flex items-center gap-1">
                  <Shield size={16} className="text-green-500" />
                  <span>Garantia 7 dias</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-green-500" />
                  <span>Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard size={16} className="text-green-500" />
                  <span>Parcelamento</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Formulário Mobile */}
          <div className="lg:hidden mt-2 max-w-md mx-auto order-2">
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
                      <span className="mr-2">Processando...</span>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : isSuccess ? (
                    "✅ Sucesso!"
                  ) : error ? (
                    "❌ Erro"
                  ) : (
                    "🔥 GARANTIR VAGA"
                  )}
                </Button>
              </div>
            </form>
            
            {error && (
              <p className="text-red-500 text-sm font-medium mt-2">{error}</p>
            )}
            
            {/* Garantias */}
            <div className="flex justify-center gap-4 text-sm text-neutral-600 mt-4">
              <div className="flex items-center gap-1">
                <Shield size={16} className="text-green-500" />
                <span>Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-green-500" />
                <span>Acesso vitalício</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Versão Elegante */}
          <div className="relative aspect-[2/1] lg:aspect-[5/4] order-3 lg:order-2 group">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-700">
              <img 
                src={images.instructorHero} 
                alt="Dr. Saulo Salgueiro - Especialista em POCUS" 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                fetchPriority="high"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold">
                  Dr. Saulo Salgueiro
                </h3>
                <p className="text-sm text-white/80">
                  Seu instrutor especialista
                </p>
              </div>
              
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesHeroSection;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, X } from "lucide-react";
import { formatWhatsApp, validateWhatsApp } from "@/utils/whatsappValidation";

const StickyFormMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [error, setError] = useState("");

  // Detectar scroll para mostrar o formulário
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Mostrar após 30% da página percorrida (mais cedo para mobile)
      if (scrollPercentage > 30 && !isSuccess) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSuccess]);

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
      // Simular envio por enquanto
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        // Auto-hide após sucesso
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }, 2000);
    } catch (err) {
      setIsLoading(false);
      setError("Erro ao enviar. Tente novamente.");
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop para mobile quando formulário está aberto */}
      {isVisible && !isMinimized && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMinimized(true)}
        />
      )}

      {/* Formulário Sticky */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMinimized ? 'transform translate-y-full' : 'transform translate-y-0'
      }`}>
        {/* Minimized State - apenas ícone */}
        {isMinimized && (
          <div className="flex justify-end p-3 sm:p-4">
            <button
              onClick={() => setIsMinimized(false)}
              className="bg-primary text-primary-foreground rounded-full p-4 sm:p-5 lg:p-6 shadow-lg premium-glow text-sm sm:text-base lg:text-lg font-bold mobile-touch-target"
            >
              📱 EBOOK GRÁTIS
            </button>
          </div>
        )}

        {/* Full Form */}
        {!isMinimized && (
          <div className="bg-background border-t border-border shadow-2xl premium-glow">
            <div className="container mx-auto px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6">
              {/* Header com botão fechar */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground">
                  📱 BAIXE O EBOOK GRÁTIS AGORA
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-muted-foreground hover:text-foreground p-1"
                >
                  <X size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>

              {isSuccess ? (
                // Success State
                <div className="text-center py-4 sm:py-5 lg:py-6">
                  <div className="text-green-600 font-bold text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">
                    ✅ EBOOK ENVIADO!
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                    Verifique seu WhatsApp agora mesmo
                  </p>
                </div>
              ) : (
                // Form State
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="flex gap-3 sm:gap-4 lg:gap-5">
                    <div className="flex-1">
                      <Input
                        type="tel"
                        value={whatsapp}
                        onChange={handleWhatsAppChange}
                        placeholder="(82) 98103-9197"
                        className={`h-12 sm:h-14 lg:h-16 text-base sm:text-lg lg:text-xl mobile-input ${
                          error ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        required
                        disabled={isLoading}
                      />
                      {error && (
                        <p className="text-red-500 text-xs mt-1">{error}</p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className={`font-bold px-5 sm:px-6 lg:px-8 h-12 sm:h-14 lg:h-16 premium-glow whitespace-nowrap text-base sm:text-lg lg:text-xl mobile-button ${
                        error
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-primary hover:bg-primary-dark'
                      } text-primary-foreground`}
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          QUERO!
                          <ArrowRight size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-1" />
                        </>
                      )}
                    </Button>
                  </div>
                  
                  {!error && (
                    <div className="text-sm sm:text-base text-muted-foreground text-center">
                      ✅ Download instantâneo ✅ Sem spam ✅ Dados seguros
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StickyFormMobile;

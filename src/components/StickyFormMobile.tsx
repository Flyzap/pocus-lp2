import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, CreditCard } from "lucide-react";
import LeadCaptureDialog from "@/components/LeadCaptureDialog";

const StickyFormMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(false);

  // Verificar se o usuário já fechou a caixa permanentemente
  useEffect(() => {
    const dismissed = localStorage.getItem('stickyFormDismissed');
    if (dismissed === 'true') {
      setIsPermanentlyDismissed(true);
    }
  }, []);

  // Detectar scroll para mostrar o botão
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Mostrar após 30% da página percorrida
      if (scrollPercentage > 30 && !isPermanentlyDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPermanentlyDismissed]);

  // Função para fechar permanentemente
  const handlePermanentClose = () => {
    localStorage.setItem('stickyFormDismissed', 'true');
    setIsPermanentlyDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isPermanentlyDismissed) return null;

  return (
    <>
      {/* Backdrop para mobile quando botão está expandido */}
      {isVisible && !isMinimized && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMinimized(true)}
        />
      )}

      {/* Botão Sticky */}
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
              <CreditCard className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Expanded State */}
        {!isMinimized && (
          <div className="bg-background border-t border-border shadow-2xl premium-glow">
            <div className="container mx-auto px-4 sm:px-5 lg:px-6 py-4 sm:py-5 lg:py-6">
              {/* Header com botões fechar */}
              <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
                <div className="text-sm sm:text-base lg:text-lg font-bold text-foreground">
                  Garanta sua vaga agora
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 rounded"
                    title="Minimizar"
                  >
                    Minimizar
                  </button>
                  <button
                    onClick={handlePermanentClose}
                    className="text-muted-foreground hover:text-foreground p-1"
                    title="Não mostrar novamente"
                  >
                    <X size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Preço e CTA */}
              <div className="text-center space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary">
                    12x de R$ 441,75
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ou R$ 3.800,00 à vista
                  </div>
                </div>

                <LeadCaptureDialog>
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold h-12 sm:h-14 premium-glow text-base">
                    GARANTIR MINHA VAGA AGORA
                  </Button>
                </LeadCaptureDialog>

                <div className="text-xs text-muted-foreground">
                  ✅ Garantia de 7 dias ✅ Vagas limitadas
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StickyFormMobile;
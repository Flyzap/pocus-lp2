import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { X, Minus, ShoppingCart } from "lucide-react";
import { formatWhatsApp, validateWhatsApp } from "@/utils/whatsappValidation";

const SalesStickyForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isPermanentlyDismissed, setIsPermanentlyDismissed] = useState(false);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    nome: "",
    whatsapp: ""
  });

  // Verificar se foi permanentemente dispensado
  useEffect(() => {
    const dismissed = localStorage.getItem('salesStickyFormDismissed');
    if (dismissed) {
      setIsPermanentlyDismissed(true);
    }
  }, []);

  // Mostrar após scroll de 30%
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 30 && !isSuccess && !isPermanentlyDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSuccess, isPermanentlyDismissed]);

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
    if (errors.nome) {
      setErrors(prev => ({ ...prev, nome: "" }));
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    setWhatsapp(formatted);
    if (errors.whatsapp) {
      setErrors(prev => ({ ...prev, whatsapp: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Resetar erros
    setErrors({ nome: "", whatsapp: "" });
    
    // Validações
    let hasErrors = false;
    
    if (!nome.trim()) {
      setErrors(prev => ({ ...prev, nome: "Nome é obrigatório" }));
      hasErrors = true;
    }
    
    const whatsappValidation = validateWhatsApp(whatsapp);
    if (!whatsappValidation.isValid) {
      setErrors(prev => ({ ...prev, whatsapp: whatsappValidation.errorMessage || "WhatsApp inválido" }));
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    setIsLoading(true);
    
    try {
      // Simular processamento
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        
        // Redirecionar para checkout ou página de agradecimento
        // window.location.href = "/checkout";
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setErrors(prev => ({ ...prev, nome: "Erro ao processar. Tente novamente." }));
    }
  };

  const handlePermanentClose = () => {
    localStorage.setItem('salesStickyFormDismissed', 'true');
    setIsPermanentlyDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isPermanentlyDismissed) {
    return null;
  }

  return (
    <>
      {/* Backdrop para mobile quando aberto */}
      {!isMinimized && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMinimized(true)}
        />
      )}

      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50">
        {/* Formulário minimizado */}
        {isMinimized && (
          <div className="premium-card p-4 bg-primary border-primary">
            <button
              onClick={() => setIsMinimized(false)}
              className="w-full flex items-center justify-between text-primary-foreground hover:bg-primary-dark/20 p-2 rounded transition-colors"
            >
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-bold text-sm">🔥 Garantir Vaga - R$ 497</span>
              </div>
              <div className="text-xs bg-primary-foreground text-primary px-2 py-1 rounded-full">
                3x sem juros
              </div>
            </button>
          </div>
        )}

        {/* Formulário expandido */}
        {!isMinimized && (
          <div className="premium-card bg-card border-primary shadow-2xl">
            {/* Header */}
            <div className="bg-primary p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-primary-foreground" />
                <div>
                  <h3 className="font-bold text-primary-foreground text-sm">
                    🔥 Últimas Vagas Disponíveis
                  </h3>
                  <p className="text-primary-foreground/80 text-xs">
                    R$ 497 ou 3x de R$ 165
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(true)}
                  className="p-1 hover:bg-primary-dark/20 rounded text-primary-foreground"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={handlePermanentClose}
                  className="p-1 hover:bg-primary-dark/20 rounded text-primary-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              {isSuccess ? (
                <div className="text-center py-6">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    Parabéns! Vaga Garantida!
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Você será redirecionado para finalizar sua inscrição
                  </p>
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      value={nome}
                      onChange={handleNomeChange}
                      placeholder="Seu nome completo"
                      className={`${errors.nome ? 'border-destructive focus:border-destructive' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.nome && (
                      <p className="text-destructive text-xs mt-1">{errors.nome}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="tel"
                      value={whatsapp}
                      onChange={handleWhatsAppChange}
                      placeholder="WhatsApp: (82) 98103-9197"
                      className={`${errors.whatsapp ? 'border-destructive focus:border-destructive' : ''}`}
                      disabled={isLoading}
                    />
                    {errors.whatsapp && (
                      <p className="text-destructive text-xs mt-1">{errors.whatsapp}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold premium-glow"
                    style={{ background: '#ff0033' }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2"></div>
                        Processando...
                      </div>
                    ) : (
                      "🔥 COMPRAR AGORA - R$ 497"
                    )}
                  </Button>

                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      ✅ Garantia 7 dias • ✅ 3x sem juros • ✅ Acesso vitalício
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SalesStickyForm;
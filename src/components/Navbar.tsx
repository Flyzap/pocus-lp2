import { useState, useEffect } from "react";
import { Menu, X, Download, Sparkles, BookOpen } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import LeadCaptureDialog from "@/components/LeadCaptureDialog";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4 md:px-8 lg:px-12 transition-all duration-500 ${isScrolled ? 'top-2' : 'top-6'}`}>
      <div className={`glassmorphism-navbar rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-500 ${isScrolled ? 'shadow-premium border-white/30' : ''}`}>
        <div className="flex items-center justify-between h-12 px-4 relative">
          
          {/* Logo Premium */}
          <div className="flex items-center relative z-10 group">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-primary-light rounded-md flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-white font-bold text-sm tracking-wide">
                POCUS
                <span className="text-primary-light font-normal ml-1">INTENSIVE</span>
              </span>
            </div>
            
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Desktop Menu Premium */}
          <div className="hidden md:flex items-center gap-6 relative z-10">
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-white/90 hover:text-white font-medium text-sm transition-all duration-300 relative group"
            >
              Benefícios
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('instrutor')}
              className="text-white/90 hover:text-white font-medium text-sm transition-all duration-300 relative group"
            >
              Instrutor
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button 
              onClick={() => scrollToSection('transformacao')}
              className="text-white/90 hover:text-white font-medium text-sm transition-all duration-300 relative group"
            >
              Método
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>

          {/* Desktop CTA Button Premium */}
          <div className="hidden md:flex items-center relative z-10">
            <LeadCaptureDialog checkoutUrl="https://pay.cakto.com.br/39khjtb_612577">
              <PremiumButton
                variant="cta"
                size="sm"
                glow="subtle"
                shimmer={false}
                icon={<BookOpen className="w-3 h-3" />}
                className="font-semibold text-xs px-4"
              >
                GARANTIR MINHA VAGA AGORA
              </PremiumButton>
            </LeadCaptureDialog>
          </div>

          {/* Mobile Menu Button Premium */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-10 p-2 text-white/90 hover:text-white rounded-lg glassmorphism-button transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu Premium */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 animate-fade-in-up">
            <div className="px-4 py-3 space-y-3">
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="flex items-center gap-3 w-full text-white/90 hover:text-white font-medium text-sm py-2 transition-all duration-300 hover:bg-white/5 rounded-lg px-3 -mx-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('instrutor')}
                className="flex items-center gap-3 w-full text-white/90 hover:text-white font-medium text-sm py-2 transition-all duration-300 hover:bg-white/5 rounded-lg px-3 -mx-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Instrutor
              </button>
              <button 
                onClick={() => scrollToSection('transformacao')}
                className="flex items-center gap-3 w-full text-white/90 hover:text-white font-medium text-sm py-2 transition-all duration-300 hover:bg-white/5 rounded-lg px-3 -mx-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Método
              </button>
              
              <div className="pt-3 border-t border-white/10">
                <LeadCaptureDialog checkoutUrl="https://pay.cakto.com.br/39khjtb_612577">
                  <PremiumButton
                    variant="cta"
                    size="sm"
                    glow="subtle"
                    shimmer={true}
                    icon={<BookOpen className="w-3 h-3" />}
                    className="w-full font-semibold text-xs justify-center"
                  >
                    GARANTIR MINHA VAGA AGORA
                  </PremiumButton>
                </LeadCaptureDialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

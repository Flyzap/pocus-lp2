import { useState } from "react";
import { Menu, X } from "lucide-react";
import logopocusintensive from "@/assets/logopocusintensive.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-border shadow-sm">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logopocusintensive} 
              alt="POCUS INTENSIVE" 
              className="h-8 lg:h-10 xl:h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#beneficios" 
              className="hover:text-neutral-700 text-neutral-900 font-medium"
            >
              Conteúdo
            </a>
            <a 
              href="#instrutor" 
              className="hover:text-neutral-700 text-neutral-900 font-medium"
            >
              Programa
            </a>
            <a 
              href="#faq" 
              className="hover:text-neutral-700 text-neutral-900 font-medium"
            >
              FAQ
            </a>
            <a 
              href="#hero" 
              className="px-4 py-2 rounded-xl text-white font-semibold"
              style={{background:'#ff0033'}}
            >
              Quero saber mais
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 sm:p-3 text-muted-foreground hover:text-primary transition-colors mobile-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="sm:w-7 sm:h-7" />
            ) : (
              <Menu size={24} className="sm:w-7 sm:h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-4 py-5 space-y-4">
              <a 
                href="#beneficios" 
                                 className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 mobile-touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#instrutor" 
                                 className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 mobile-touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Instrutor
              </a>
              <a 
                href="#depoimentos" 
                                 className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 mobile-touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                                 className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2 mobile-touch-target"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

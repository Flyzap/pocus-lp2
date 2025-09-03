import { useState } from "react";
import { Menu, X } from "lucide-react";
import logopocusintensive from "@/assets/logopocusintensive.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="desktop-container mx-auto px-4 xl:px-8 2xl:px-12 3xl:px-16">
        <div className="flex items-center justify-between h-18 sm:h-20 lg:h-24 xl:h-28 2xl:h-32 3xl:h-36">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logopocusintensive} 
              alt="POCUS INTENSIVE" 
              className="h-12 sm:h-14 lg:h-16 xl:h-20 2xl:h-24 3xl:h-28 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 2xl:space-x-16 3xl:space-x-20">
            <a 
              href="#beneficios" 
              className="desktop-text-scale font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </a>
            <a 
              href="#instrutor" 
              className="desktop-text-scale font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Instrutor
            </a>
            <a 
              href="#depoimentos" 
              className="desktop-text-scale font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="desktop-text-scale font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
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

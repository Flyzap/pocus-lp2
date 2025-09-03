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
      <div className="container max-w-6xl mx-auto px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18 xl:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logopocusintensive} 
              alt="POCUS INTENSIVE" 
              className="h-8 lg:h-10 xl:h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            <a 
              href="#beneficios" 
              className="text-sm lg:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Benefícios
            </a>
            <a 
              href="#instrutor" 
              className="text-sm lg:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Instrutor
            </a>
            <a 
              href="#depoimentos" 
              className="text-sm lg:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="text-sm lg:text-base font-medium text-muted-foreground hover:text-primary transition-colors"
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

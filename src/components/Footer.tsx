import { Instagram, MessageCircle, Youtube, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleAdminLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(true);
    setPassword("");
    setError("");
  };

  const handleCheck = () => {
    if (password === "120607") {
      window.location.href = "/admin";
    } else {
      setError("Senha incorreta");
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl lg:text-2xl font-bold text-primary">POCUS Expert</h3>
            <p className="text-sm lg:text-base text-muted-foreground">
              O curso mais completo de ultrassonografia point-of-care do Brasil.
            </p>
            <div className="flex justify-center sm:justify-start gap-3">
              <a 
                href="#" 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group mobile-touch-target"
              >
                <Instagram size={16} className="lg:w-5 lg:h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group mobile-touch-target"
              >
                <Youtube size={16} className="lg:w-5 lg:h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 lg:w-12 lg:h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group mobile-touch-target"
              >
                <MessageCircle size={16} className="lg:w-5 lg:h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-base lg:text-lg text-foreground">Curso</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Conteúdo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Instrutor</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Depoimentos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Certificado</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-base lg:text-lg text-foreground">Suporte</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4 text-center sm:text-left">
            <h4 className="font-semibold text-base lg:text-lg text-foreground">Contato</h4>
            <div className="space-y-3 text-sm lg:text-base">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                <Mail size={14} className="lg:w-4 lg:h-4" />
                <span>contato@pocusexpert.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                <Phone size={14} className="lg:w-4 lg:h-4" />
                <span>(82) 99323-8508</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                <MessageCircle size={14} className="lg:w-4 lg:h-4" />
                <a href="https://wa.me/5582993238508" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp 24h</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs lg:text-sm text-muted-foreground">
              © 2025 POCUS Intensive. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5582993238508" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 lg:w-14 lg:h-14 bg-primary rounded-full flex items-center justify-center premium-glow animate-pulse-glow hover:scale-110 transition-transform mobile-touch-target"
          aria-label="Contato WhatsApp"
        >
          <MessageCircle size={16} className="lg:w-5 lg:h-5 text-primary-foreground" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
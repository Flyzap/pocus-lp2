import { Instagram, MessageCircle, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">POCUS Expert</h3>
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
              O curso mais completo de ultrassonografia point-of-care do Brasil.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-5">
              <a 
                href="#" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group mobile-touch-target"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group mobile-touch-target"
              >
                <Youtube size={16} className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group mobile-touch-target"
              >
                <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl text-foreground">Curso</h4>
            <ul className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm lg:text-base">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Conteúdo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Instrutor</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Depoimentos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Certificado</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl text-foreground">Suporte</h4>
            <ul className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm lg:text-base">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 text-center sm:text-left">
            <h4 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl text-foreground">Contato</h4>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-xs sm:text-sm lg:text-base">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                <Mail size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                <span>contato@pocusexpert.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                <Phone size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground">
                <MessageCircle size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                <span>WhatsApp 24h</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 lg:pt-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-6">
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
              © 2024 POCUS Expert. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
            </p>
            <a 
              href="/admin" 
              className="text-xs sm:text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors opacity-50 hover:opacity-100"
            >
              Painel Admin
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5511999999999" 
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
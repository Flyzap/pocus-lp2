import { Instagram, MessageCircle, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">POCUS Expert</h3>
            <p className="text-muted-foreground text-sm">
              O curso mais completo de ultrassonografia point-of-care do Brasil.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Instagram size={18} className="text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <Youtube size={18} className="text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
              >
                <MessageCircle size={18} className="text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Curso</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Conteúdo</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Instrutor</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Depoimentos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Certificado</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Suporte</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Política de Privacidade</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>contato@pocusexpert.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle size={16} />
                <span>WhatsApp 24h</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 POCUS Expert. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
            </p>
            <a 
              href="/admin" 
              className="text-xs text-muted-foreground hover:text-primary transition-colors opacity-50 hover:opacity-100"
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
          className="w-16 h-16 bg-primary rounded-full flex items-center justify-center premium-glow animate-pulse-glow hover:scale-110 transition-transform"
        >
          <MessageCircle size={28} className="text-primary-foreground" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
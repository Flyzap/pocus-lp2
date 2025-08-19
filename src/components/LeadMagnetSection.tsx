import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, FileText } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-primary">Acesso Imediato</span> à Aula Gratuita
            </h2>
            <p className="text-xl text-muted-foreground">
              + PDF Exclusivo com Protocolo de Emergência para usar no plantão hoje mesmo
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                { icon: Download, text: "Download instantâneo" },
                { icon: FileText, text: "Protocolo completo" },
                { icon: ArrowRight, text: "Acesso vitalício" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-primary">
                  <benefit.icon size={20} />
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Lead Form */}
          <div className="premium-card p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Input 
                  placeholder="Seu nome completo"
                  className="glow-border bg-background/50 text-foreground placeholder:text-muted-foreground"
                />
                <Input 
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="glow-border bg-background/50 text-foreground placeholder:text-muted-foreground"
                />
                <Input 
                  placeholder="WhatsApp (11) 99999-9999"
                  className="glow-border bg-background/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 text-lg premium-glow group"
              >
                Quero Acesso Gratuito Agora
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ✅ Sem spam. ✅ Cancele quando quiser. ✅ Seus dados estão seguros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
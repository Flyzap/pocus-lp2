import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, FileText } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <span className="text-primary">Acesso Imediato</span> ao Ebook Gratuita
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              + PDF Exclusivo com Protocolo de Emergência para usar no plantão hoje mesmo
            </p>
            
            {/* Benefits */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              {[
                { icon: Download, text: "Download instantâneo" },
                { icon: FileText, text: "Protocolo completo" },
                { icon: ArrowRight, text: "Acesso vitalício" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-primary">
                  <benefit.icon size={16} className="sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Lead Form */}
          <div className="premium-card p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <Input 
                  placeholder="Seu nome completo"
                  className="glow-border bg-background/50 text-foreground placeholder:text-muted-foreground h-12 sm:h-14 text-sm sm:text-base"
                />
                <Input 
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="glow-border bg-background/50 text-foreground placeholder:text-muted-foreground h-12 sm:h-14 text-sm sm:text-base"
                />
                <Input 
                  placeholder="WhatsApp (11) 99999-9999"
                  className="glow-border bg-background/50 text-foreground placeholder:text-muted-foreground h-12 sm:h-14 text-sm sm:text-base sm:col-span-2 lg:col-span-1"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg premium-glow group h-12 sm:h-16"
              >
                <span className="mr-2">Quero Acesso Gratuito Agora</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs sm:text-sm text-muted-foreground">
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
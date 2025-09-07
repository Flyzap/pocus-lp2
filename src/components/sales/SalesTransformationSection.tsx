import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Quote, TrendingUp, Clock, CheckCircle } from "lucide-react";

const SalesTransformationSection = () => {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
            <TrendingUp className="text-primary w-6 h-6" />
            <span className="text-primary font-semibold text-base">Sua Transformação Profissional</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            De <span className="text-destructive">Iniciante</span> para <span className="text-primary">Expert Certificado</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como o curso transformará sua prática médica e sua carreira
          </p>
        </div>

        {/* Transformation Flow */}
        <div className="relative mb-12">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-destructive via-yellow-500 to-primary rounded-full hidden lg:block"></div>
          
          <div className="space-y-8">
            {/* Before State */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 lg:pr-8 w-full">
                <div className="premium-card p-6 border-l-4 border-destructive bg-destructive/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                      <Clock className="text-destructive w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-destructive">ANTES DO CURSO</h3>
                      <p className="text-sm text-muted-foreground">Sua situação atual</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-destructive text-lg">❌</span>
                      <span className="text-sm text-muted-foreground">Insegurança para usar ultrassom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive text-base">❌</span>
                      <span className="text-xs text-muted-foreground">Dependência de outros especialistas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive text-base">❌</span>
                      <span className="text-xs text-muted-foreground">Diagnósticos demorados</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive text-base">❌</span>
                      <span className="text-xs text-muted-foreground">Limitação na prática clínica</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Center Arrow */}
              <div className="lg:w-auto w-full flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center premium-glow z-10">
                  <ArrowDown className="text-primary-foreground w-6 h-6 lg:hidden" />
                  <ArrowRight className="text-primary-foreground w-6 h-6 hidden lg:block" />
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-8 w-full">
                <div className="premium-card p-6 border-l-4 border-primary bg-primary/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">APÓS O CURSO</h3>
                      <p className="text-xs text-muted-foreground">Expert certificado</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-lg">✅</span>
                      <span className="text-sm text-foreground font-medium">Confiança total no POCUS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-base">✅</span>
                      <span className="text-xs text-foreground font-medium">Autonomia diagnóstica completa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-base">✅</span>
                      <span className="text-xs text-foreground font-medium">Diagnósticos em segundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-base">✅</span>
                      <span className="text-xs text-foreground font-medium">Certificação profissional</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Quote */}
        <div className="mb-12">
          <div className="relative p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
            <Quote size={32} className="text-primary opacity-30 mx-auto mb-6" />
            <blockquote className="text-lg lg:text-xl font-bold text-foreground mb-6 leading-relaxed">
              "De iniciante a expert em 30 dias.<br />
              <span className="text-primary">Sua carreira nunca mais será a mesma.</span>"
            </blockquote>
            <div className="text-base text-primary font-semibold">
              — A transformação que todo médico merece
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-5">
              Pronto para Sua Transformação Profissional?
            </h3>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos 1.847+ médicos que já se tornaram especialistas em POCUS
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 text-base premium-glow group mobile-button"
            >
              <span className="mr-2">🔥 GARANTIR MINHA VAGA - R$ 497</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex justify-center gap-6 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-1">
                <span>✅</span>
                <span>Garantia 7 dias</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✅</span>
                <span>3x sem juros</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✅</span>
                <span>Acesso vitalício</span>
              </div>
            </div>

            {/* Link para ebook gratuito */}
            <div className="mt-6 pt-4 border-t border-primary/20">
              <p className="text-sm text-center text-muted-foreground mb-2">
                🎁 Quer começar com nosso ebook gratuito?
              </p>
              <a 
                href="/" 
                className="text-primary font-semibold hover:underline text-sm"
              >
                Baixar ebook gratuito primeiro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesTransformationSection;
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Quote, TrendingUp, Clock, CheckCircle } from "lucide-react";

const TransformationSection = () => {
  // Adicione handler
  const handleScrollToHead = () => {
    const el = document.getElementById('head');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="mx-auto max-w-screen-xl px-3 md:px-6 lg:px-8 py-8 md:py-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 md:mb-6">
            <TrendingUp className="text-primary w-4 h-4 md:w-6 md:h-6" />
            <span className="text-primary font-semibold text-sm md:text-base">
              <span className="hidden sm:inline">Sua Jornada de Transformação</span>
              <span className="sm:hidden">Transformação</span>
            </span>
          </div>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">
            De <span className="text-destructive">Inseguro</span> para <span className="text-primary">Especialista</span>
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-muted-foreground max-w-sm md:max-w-xl mx-auto">
            Veja como sua prática médica será transformada com o domínio do POCUS
          </p>
        </div>

        {/* Transformation Flow */}
        <div className="relative mb-6 md:mb-8">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-destructive via-yellow-500 to-primary rounded-full hidden lg:block"></div>
          
          <div className="space-y-4 md:space-y-6">
            {/* Before State */}
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8">
              <div className="lg:w-1/2 lg:pr-8 w-full">
                <div className="premium-card p-4 md:p-5 border-l-4 border-destructive bg-destructive/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                      <Clock className="text-destructive w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-destructive">SITUAÇÃO ATUAL</h3>
                      <p className="text-sm text-muted-foreground">Como você se sente hoje</p>
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
                      <span className="text-xs text-muted-foreground">Diagnósticos demorados e imprecisos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive text-base">❌</span>
                      <span className="text-xs text-muted-foreground">Medo de errar interpretações</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Center Arrow Animado Suave */}
              <div className="lg:w-auto w-full flex justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center premium-glow z-10 hover:scale-105 transition-all duration-500 relative group">
                  {/* Efeito de breathing suave */}
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-[breathing_3s_ease-in-out_infinite]"></div>
                  
                  {/* Setas com movimento suave */}
                  <ArrowDown className="text-primary-foreground w-6 h-6 lg:hidden animate-[float_2s_ease-in-out_infinite] relative z-10" />
                  <ArrowRight className="text-primary-foreground w-6 h-6 hidden lg:block animate-[slideRight_2s_ease-in-out_infinite] relative z-10" />
                  
                  {/* Glow suave */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg group-hover:opacity-80 transition-opacity duration-500"></div>
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
                      <p className="text-xs text-muted-foreground">Sua nova realidade</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-primary text-lg">✅</span>
                      <span className="text-sm text-foreground font-medium">Confiança total no ultrassom</span>
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
                      <span className="text-xs text-foreground font-medium">Interpretações precisas e seguras</span>
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
              "Ultrassom nas suas mãos.<br />
              <span className="text-primary">Diagnóstico rápido.</span><br />
              Decisão segura."
            </blockquote>
            <div className="text-base text-primary font-semibold">
              — A confiança que todo médico merece ter
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-5">
              Pronto para Sua Transformação?
            </h3>
            <p className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se aos médicos que já dominam o POCUS e transformaram sua prática profissional
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 text-base premium-glow group mobile-button"
              onClick={handleScrollToHead}
            >
              <span className="mr-2">Começar Minha Transformação Agora</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
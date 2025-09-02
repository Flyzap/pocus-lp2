import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, TrendingUp, Clock, CheckCircle } from "lucide-react";

const TransformationSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
              <TrendingUp className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-primary font-semibold text-sm sm:text-base">Sua Jornada de Transformação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              De <span className="text-destructive">Inseguro</span> para <span className="text-primary">Especialista</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Veja como sua prática médica será transformada com o domínio do POCUS
            </p>
          </div>

          {/* Transformation Flow */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-destructive via-yellow-500 to-primary rounded-full hidden lg:block"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {/* Before State */}
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="premium-card p-6 sm:p-8 border-l-4 border-destructive bg-destructive/5">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                        <Clock className="text-destructive w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-destructive">SITUAÇÃO ATUAL</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Como você se sente hoje</p>
                      </div>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-destructive text-lg sm:text-xl">❌</span>
                        <span className="text-sm sm:text-base text-muted-foreground">Insegurança para usar ultrassom</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-destructive text-lg sm:text-xl">❌</span>
                        <span className="text-sm sm:text-base text-muted-foreground">Dependência de outros especialistas</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-destructive text-lg sm:text-xl">❌</span>
                        <span className="text-sm sm:text-base text-muted-foreground">Diagnósticos demorados e imprecisos</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-destructive text-lg sm:text-xl">❌</span>
                        <span className="text-sm sm:text-base text-muted-foreground">Medo de errar interpretações</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-destructive text-lg sm:text-xl">❌</span>
                        <span className="text-sm sm:text-base text-muted-foreground">Limitações no atendimento de emergência</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Center Arrow */}
                <div className="lg:w-auto w-full flex justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center premium-glow z-10">
                    <ArrowRight className="text-primary-foreground w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="premium-card p-6 sm:p-8 border-l-4 border-primary bg-primary/5">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">APÓS O CURSO</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">Sua nova realidade</p>
                      </div>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-primary text-lg sm:text-xl">✅</span>
                        <span className="text-sm sm:text-base text-foreground font-medium">Confiança total no ultrassom</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-primary text-lg sm:text-xl">✅</span>
                        <span className="text-sm sm:text-base text-foreground font-medium">Autonomia diagnóstica completa</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-primary text-lg sm:text-xl">✅</span>
                        <span className="text-sm sm:text-base text-foreground font-medium">Diagnósticos em segundos</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-primary text-lg sm:text-xl">✅</span>
                        <span className="text-sm sm:text-base text-foreground font-medium">Interpretações precisas e seguras</span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="text-primary text-lg sm:text-xl">✅</span>
                        <span className="text-sm sm:text-base text-foreground font-medium">Atendimento de excelência</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Quote */}
          <div className="mt-12 lg:mt-16">
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <Quote size={36} className="sm:w-12 sm:h-12 text-primary opacity-30 mx-auto mb-4 sm:mb-6" />
              <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 leading-relaxed">
                "Ultrassom nas suas mãos.<br />
                <span className="text-primary">Diagnóstico rápido.</span><br />
                Decisão segura."
              </blockquote>
              <div className="text-sm sm:text-base md:text-lg text-primary font-semibold">
                — A confiança que todo médico merece ter
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                Pronto para Sua Transformação?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                Junte-se aos médicos que já dominam o POCUS e transformaram sua prática profissional
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg premium-glow group"
              >
                <span className="mr-2">Começar Minha Transformação Agora</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
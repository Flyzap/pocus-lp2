import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, TrendingUp, Clock, CheckCircle } from "lucide-react";

const TransformationSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl xl:max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-28">
            <div className="inline-flex items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-6 bg-primary/10 px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 lg:py-5 xl:py-6 rounded-full mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
              <TrendingUp className="text-primary w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
              <span className="text-primary font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl">Sua Jornada de Transformação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
              De <span className="text-destructive">Inseguro</span> para <span className="text-primary">Especialista</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6">
              Veja como sua prática médica será transformada com o domínio do POCUS
            </p>
          </div>

          {/* Transformation Flow */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-destructive via-yellow-500 to-primary rounded-full hidden lg:block"></div>
            
            <div className="space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24">
              {/* Before State */}
              <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
                <div className="lg:w-1/2 lg:pr-12 w-full">
                  <div className="premium-card p-8 sm:p-10 lg:p-12 border-l-4 border-destructive bg-destructive/5">
                    <div className="flex items-center gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8 lg:mb-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-destructive/20 rounded-full flex items-center justify-center">
                        <Clock className="text-destructive w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-destructive">SITUAÇÃO ATUAL</h3>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">Como você se sente hoje</p>
                      </div>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                        <span className="text-destructive text-xl sm:text-2xl lg:text-3xl">❌</span>
                        <span className="text-base sm:text-lg lg:text-xl text-muted-foreground">Insegurança para usar ultrassom</span>
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
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary rounded-full flex items-center justify-center premium-glow z-10">
                    <ArrowRight className="text-primary-foreground w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-12 w-full">
                  <div className="premium-card p-8 sm:p-10 lg:p-12 border-l-4 border-primary bg-primary/5">
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
                      <li className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                        <span className="text-primary text-xl sm:text-2xl lg:text-3xl">✅</span>
                        <span className="text-base sm:text-lg lg:text-xl text-foreground font-medium">Confiança total no ultrassom</span>
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
          <div className="mt-16 sm:mt-20 lg:mt-24 xl:mt-28">
            <div className="relative p-8 sm:p-10 lg:p-12 xl:p-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <Quote size={48} className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-primary opacity-30 mx-auto mb-6 sm:mb-8 lg:mb-10 xl:mb-12" />
              <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12 leading-relaxed">
                "Ultrassom nas suas mãos.<br />
                <span className="text-primary">Diagnóstico rápido.</span><br />
                Decisão segura."
              </blockquote>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary font-semibold">
                — A confiança que todo médico merece ter
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 sm:p-10 lg:p-12 xl:p-16">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-5 sm:mb-6 lg:mb-8 xl:mb-10">
                Pronto para Sua Transformação?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12 max-w-4xl xl:max-w-5xl mx-auto">
                Junte-se aos médicos que já dominam o POCUS e transformaram sua prática profissional
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 xl:py-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl premium-glow group mobile-button"
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
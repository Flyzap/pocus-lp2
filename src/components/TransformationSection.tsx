import { Button } from "@/components/ui/button";
import { ArrowRight, Quote, TrendingUp, Clock, CheckCircle } from "lucide-react";

const TransformationSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-6">
              <TrendingUp className="text-primary" size={24} />
              <span className="text-primary font-semibold">Sua Jornada de Transformação</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              De <span className="text-destructive">Inseguro</span> para <span className="text-primary">Especialista</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Veja como sua prática médica será transformada com o domínio do POCUS
            </p>
          </div>

          {/* Transformation Flow */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-destructive via-yellow-500 to-primary rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* Before State */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="premium-card p-8 border-l-4 border-destructive bg-destructive/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                        <Clock className="text-destructive" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-destructive">SITUAÇÃO ATUAL</h3>
                        <p className="text-muted-foreground">Como você se sente hoje</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-destructive text-xl">❌</span>
                        <span className="text-muted-foreground">Insegurança para usar ultrassom</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive text-xl">❌</span>
                        <span className="text-muted-foreground">Dependência de outros especialistas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive text-xl">❌</span>
                        <span className="text-muted-foreground">Diagnósticos demorados e imprecisos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive text-xl">❌</span>
                        <span className="text-muted-foreground">Medo de errar interpretações</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive text-xl">❌</span>
                        <span className="text-muted-foreground">Limitações no atendimento de emergência</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Center Arrow */}
                <div className="lg:w-auto w-full flex justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center premium-glow z-10">
                    <ArrowRight className="text-primary-foreground" size={24} />
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="premium-card p-8 border-l-4 border-primary bg-primary/5">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">APÓS O CURSO</h3>
                        <p className="text-muted-foreground">Sua nova realidade</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">✅</span>
                        <span className="text-foreground font-medium">Confiança total no ultrassom</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">✅</span>
                        <span className="text-foreground font-medium">Autonomia diagnóstica completa</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">✅</span>
                        <span className="text-foreground font-medium">Diagnósticos em segundos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">✅</span>
                        <span className="text-foreground font-medium">Interpretações precisas e seguras</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary text-xl">✅</span>
                        <span className="text-foreground font-medium">Atendimento de excelência</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Quote */}
          <div className="mt-16">
            <div className="relative p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 text-center">
              <Quote size={48} className="text-primary opacity-30 mx-auto mb-6" />
              <blockquote className="text-2xl lg:text-3xl font-bold text-foreground mb-6 leading-relaxed">
                "Ultrassom nas suas mãos.<br />
                <span className="text-primary">Diagnóstico rápido.</span><br />
                Decisão segura."
              </blockquote>
              <div className="text-lg text-primary font-semibold">
                — A confiança que todo médico merece ter
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pronto para Sua Transformação?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Junte-se aos médicos que já dominam o POCUS e transformaram sua prática profissional
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 text-lg premium-glow group"
              >
                Começar Minha Transformação Agora
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
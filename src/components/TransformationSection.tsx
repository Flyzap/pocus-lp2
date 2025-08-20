import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
// 📸 SUBSTITUIR IMAGEM DA TRANSFORMAÇÃO:
// Para adicionar sua própria imagem, substitua o arquivo "transformation.jpg" 
// na pasta src/assets/ pela sua imagem.
// DIMENSÕES RECOMENDADAS: 1200x800px (16:9) ou similar
// FORMATO: JPG, PNG ou WebP
// QUALIDADE: Alta resolução para melhor resultado visual
import transformationImage from "@/assets/transformation.jpg";

const TransformationSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sua <span className="text-primary">Transformação</span> Profissional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De médico inseguro com ultrassom para especialista confiante em diagnóstico por imagem
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Transformation Image */}
            <div className="relative">
              <img 
                src={transformationImage}
                alt="Transformação profissional - antes e depois do curso de POCUS"
                className="w-full h-auto rounded-2xl premium-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Transformation Content */}
            <div className="space-y-8">
              {/* Before */}
              <div className="premium-card p-6 border-l-4 border-destructive">
                <h3 className="text-xl font-bold text-destructive mb-3">ANTES</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>❌ Insegurança para usar ultrassom</li>
                  <li>❌ Dependência de outros especialistas</li>
                  <li>❌ Diagnósticos demorados</li>
                  <li>❌ Medo de errar interpretações</li>
                  <li>❌ Limitações no atendimento</li>
                </ul>
              </div>
              
              {/* After */}
              <div className="premium-card p-6 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">DEPOIS</h3>
                <ul className="space-y-2 text-foreground">
                  <li>✅ Confiança total no ultrassom</li>
                  <li>✅ Autonomia diagnóstica</li>
                  <li>✅ Diagnósticos em segundos</li>
                  <li>✅ Interpretações precisas</li>
                  <li>✅ Atendimento de excelência</li>
                </ul>
              </div>
              
              {/* Quote */}
              <div className="relative p-8 bg-primary/5 rounded-2xl border border-primary/20">
                <Quote size={40} className="text-primary opacity-50 absolute top-4 left-4" />
                <blockquote className="text-xl font-medium text-foreground ml-12 leading-relaxed">
                  "Ultrassom nas suas mãos. Diagnóstico rápido. Decisão segura."
                </blockquote>
                <div className="text-primary font-semibold mt-4 ml-12">
                  — A confiança que todo médico merece ter
                </div>
              </div>
              
              {/* CTA */}
              <Button 
                size="lg"
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-4 text-lg premium-glow group"
              >
                Quero Minha Transformação Agora
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
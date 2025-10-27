import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { 
  CreditCard, 
  Shield, 
  Users, 
  Calendar, 
  CheckCircle,
  Building2,
  Stethoscope,
  BadgeCheck,
  MessagesSquare,
  Lock,
  Star
} from "lucide-react";
import { memo } from 'react';

// Componentes memorizados para otimização de performance
const PaymentMethod = memo(({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center p-3 rounded-lg border border-border hover:border-primary/20 transition-colors">
    {children}
  </div>
));
PaymentMethod.displayName = 'PaymentMethod';

import { BenefitCard } from "@/components/ui/benefit-card";
BenefitCard.displayName = 'BenefitCard';

const benefitCards = [
  {
    icon: Calendar,
    title: "4 Dias Intensivos",
    description: "Imersão prática completa",
    highlight: "Exclusivo"
  },
  {
    icon: Building2,
    title: "Ambiente Real",
    description: "Ambiente hospitalar real",
    highlight: "Hands-on"
  },
  {
    icon: Stethoscope,
    title: "Casos Reais",
    description: "Prática com pacientes",
    highlight: "Premium"
  },
  {
    icon: MessagesSquare,
    title: "Suporte VIP",
    description: "Acesso direto ao expert",
    highlight: "Individual"
  }
];

const PricingSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" id="investimento">
      {/* Background com gradiente otimizado */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-gray-premium/30 to-background"
        aria-hidden="true"
      />
      
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho com badge animado */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4"
            role="status"
          >
            <Star className="w-4 h-4" aria-hidden="true" />
            <span>Turma Limitada - 12 Vagas</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Investimento
          </h2>
        </div>

        {/* Grid principal responsivo */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Coluna de Preço - Sticky no desktop */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <PremiumCard>
              <div className="p-8">
                {/* Contador de vagas com animação */}
                <div 
                  className="bg-primary/5 rounded-lg p-4 mb-6 group"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="text-center text-sm font-medium flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                    Apenas <span className="text-primary font-bold">5 vagas</span> disponíveis
                  </div>
                </div>

                {/* Preço */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-primary mb-2">
                    12x de R$ 441,75
                  </div>
                  <div className="text-muted-foreground">
                    ou R$ 3.800,00 à vista
                  </div>
                </div>

                {/* Garantias em grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                    <div className="text-sm font-medium">Garantia de 7 dias</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" aria-hidden="true" />
                    <div className="text-sm font-medium">Turma Limitada</div>
                  </div>
                </div>

                {/* CTA com mensagem de urgência */}
                <div className="space-y-4">
                  <PremiumButton
                    variant="cta"
                    size="lg"
                    className="w-full py-6 text-lg font-bold"
                    glow="subtle"
                    shimmer={false}
                  >
                    <div className="relative z-10">
                      GARANTIR MINHA VAGA AGORA
                      <span className="block text-sm mt-1 font-normal">
                        Últimas vagas disponíveis
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </PremiumButton>

                  {/* Trust badge */}
                  <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
                    <Lock className="w-4 h-4" aria-hidden="true" />
                    <span>Pagamento 100% Seguro</span>
                  </div>
                </div>

                {/* Métodos de pagamento */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-sm text-center text-muted-foreground mb-4">
                    Formas de pagamento aceitas
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    <PaymentMethod>
                      <CreditCard className="w-6 h-6 text-muted-foreground" />
                    </PaymentMethod>
                    <PaymentMethod>PIX</PaymentMethod>
                    <PaymentMethod>Boleto</PaymentMethod>
                    <PaymentMethod>PicPay</PaymentMethod>
                    <PaymentMethod>Apple Pay</PaymentMethod>
                    <PaymentMethod>Google Pay</PaymentMethod>
                  </div>
                </div>
              </div>
            </PremiumCard>
          </div>

          {/* Coluna de Benefícios */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">O que você recebe</h3>
            
            {/* Cards de benefícios */}
            <div className="grid gap-4">
              {benefitCards.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>

            {/* Mini FAQ */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-bold mb-4">Perguntas Frequentes sobre Pagamento</h4>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="font-medium">Como funciona o parcelamento?</div>
                  <p className="text-sm text-muted-foreground">
                    Parcele em até 12x sem juros nos principais cartões de crédito
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">E se eu não gostar do curso?</div>
                  <p className="text-sm text-muted-foreground">
                    Garantia incondicional de 7 dias. Devolução integral do valor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
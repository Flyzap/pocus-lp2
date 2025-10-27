import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
}

const BenefitCard = memo(({ icon: Icon, title, description, highlight }: BenefitCardProps) => (
  <div 
    className="premium-card p-6 hover:scale-[1.02] transition-transform duration-300 group"
    role="article"
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold group-hover:text-primary transition-colors">{title}</h4>
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {highlight}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  </div>
));

BenefitCard.displayName = 'BenefitCard';

export { BenefitCard };
export type { BenefitCardProps };

import { useEffect, useState } from 'react';

interface SectionSeparatorProps {
  variant?: 'default' | 'gradient' | 'dots' | 'wave';
  className?: string;
}

const SectionSeparator = ({ variant = 'default', className = '' }: SectionSeparatorProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef);

    return () => observer.disconnect();
  }, [elementRef]);

  const renderSeparator = () => {
    switch (variant) {
      case 'gradient':
        return (
          <div className="relative h-px w-full">
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        );
      
      case 'dots':
        return (
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 bg-primary/40 rounded-full transition-all duration-500 ${isVisible ? 'animate-pulse' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      
      case 'wave':
        return (
          <div className="relative h-6 w-full overflow-hidden">
            <svg
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              viewBox="0 0 400 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 12C50 12 50 6 100 6C150 6 150 18 200 18C250 18 250 6 300 6C350 6 350 12 400 12"
                stroke="url(#gradient)"
                strokeWidth="1"
                className="animate-[wave_3s_ease-in-out_infinite]"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      
      default:
        return (
          <div className="relative h-px w-full">
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          </div>
        );
    }
  };

  return (
    <div ref={setElementRef} className={`py-8 md:py-12 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-4xl px-4">
        {renderSeparator()}
      </div>
    </div>
  );
};

export default SectionSeparator;

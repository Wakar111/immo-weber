import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import type { LucideProps } from 'lucide-react';

type IconComponent = React.ForwardRefExoticComponent<LucideProps & React.RefAttributes<SVGSVGElement>>;

interface StatProps {
  num: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  subheading: string;
  icon: IconComponent;
}

export const Stat = ({ num, suffix = '', prefix = '', decimals = 0, subheading, icon: Icon }: StatProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(value) {
        if (!ref.current) return;
        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-gold-400" />
      </div>
      <div>
        <p className="text-xl font-bold text-white leading-tight">
          {prefix}<span ref={ref}>0</span>{suffix}
        </p>
        <p className="text-xs text-slate-500">{subheading}</p>
      </div>
    </div>
  );
};

// Legacy export kept for backwards compat
export const CountUpStats = () => null;
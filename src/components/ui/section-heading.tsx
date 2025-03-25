
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading = ({
  overline,
  title,
  description,
  align = 'center',
  className
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {overline && (
        <div className="inline-flex items-center mb-3 text-xs font-medium tracking-wider uppercase text-stellar-blue">
          <span className="mr-2 w-6 h-[1px] bg-stellar-blue/50"></span>
          <span className="animate-fade-in">{overline}</span>
        </div>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-none animate-fade-up">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="max-w-3xl mx-auto text-lg text-white/80 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {description}
        </p>
      )}
    </div>
  );
};

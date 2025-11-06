import { Button } from "@/components/ui/button";
import { theme } from "@/src/styles/theme";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  href?: string;
}

export function CTASection({ 
  title = "Let's make belonging tangible.",
  subtitle,
  href = "/contact"
}: CTASectionProps) {
  return (
    <section 
      className="py-24"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.aqua} 0%, ${theme.colors.coral} 100%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ 
            fontFamily: theme.typography.fontFamily.join(', '),
            color: theme.colors.white,
            lineHeight: theme.typography.lineHeights.snug
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p 
            className="text-lg mb-8 max-w-3xl mx-auto"
            style={{ 
              fontFamily: theme.typography.fontFamily.join(', '),
              color: theme.colors.white,
              lineHeight: theme.typography.lineHeights.normal,
              opacity: 0.9
            }}
          >
            {subtitle}
          </p>
        )}
        <Button 
          variant="primary"
          asChild
          className="min-w-[160px]"
          style={{
            backgroundColor: theme.colors.coral,
            color: theme.colors.white,
            boxShadow: theme.shadow.glowCoral,
            transition: `all ${theme.motion.base}ms ${theme.motion.curve}`
          }}
        >
          <Link href={href}>
            {theme.ctaLabel}
          </Link>
        </Button>
      </div>
    </section>
  );
}

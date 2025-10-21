import { Button } from "@/components/ui/button";
import { theme } from "@/src/styles/theme";
import Image from "next/image";

interface SplitSectionProps {
  title: string;
  body: string;
  image: string;
  reverse?: boolean;
  ctaHref?: string;
  ctaText?: string;
}

export function SplitSection({ 
  title, 
  body, 
  image, 
  reverse = false,
  ctaHref,
  ctaText = "See How It Works"
}: SplitSectionProps) {
  return (
    <section className="py-24" style={{ backgroundColor: theme.colors.white }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ 
                fontFamily: theme.typography.fontFamily.join(', '),
                color: theme.colors.navy,
                lineHeight: theme.typography.lineHeights.snug
              }}
            >
              {title}
            </h2>
            <p 
              className="text-lg mb-8"
              style={{ 
                fontFamily: theme.typography.fontFamily.join(', '),
                color: theme.colors.gray700,
                lineHeight: theme.typography.lineHeights.normal
              }}
            >
              {body}
            </p>
            {ctaHref && (
              <Button 
                variant="secondary"
                href={ctaHref}
                style={{
                  borderColor: theme.colors.aqua,
                  color: theme.colors.aqua,
                  backgroundColor: 'transparent',
                  transition: `all ${theme.motion.base}ms ${theme.motion.curve}`
                }}
              >
                {ctaText}
              </Button>
            )}
          </div>

          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="relative">
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                style={{ boxShadow: theme.shadow.soft }}
              />
              {/* Navy overlay on image */}
              <div 
                className="absolute inset-0 rounded-lg"
                style={{ 
                  backgroundColor: `${theme.colors.navy}`, 
                  opacity: 0.1,
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

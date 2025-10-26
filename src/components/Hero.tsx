import { Button } from "@/components/ui/button";
import { theme } from "@/src/styles/theme";
import Link from "next/link";

interface HeroProps {
  headline: string;
  subhead: string;
  videoSrc: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export function Hero({ 
  headline, 
  subhead, 
  videoSrc, 
  primaryHref = "/contact",
  secondaryHref 
}: HeroProps) {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Navy overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: `${theme.colors.navy}`, opacity: 0.6 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
            style={{ 
              fontFamily: theme.typography.fontFamily.join(', '),
              color: theme.colors.aqua,
              lineHeight: theme.typography.lineHeights.tight
            }}
          >
            {headline}
          </h1>
          <p 
            className="text-lg md:text-xl font-semibold mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: theme.typography.fontFamily.join(', '),
              color: theme.colors.white,
              lineHeight: theme.typography.lineHeights.normal
            }}
          >
            The world doesn't need more merch. It needs more meaning.<br />
            We make that meaning last through connected experiences fans never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
              <Link href={primaryHref}>
                {theme.ctaLabel}
              </Link>
            </Button>
            {secondaryHref && (
              <Button 
                variant="cyan"
                asChild
                className="min-w-[160px]"
                style={{
                  backgroundColor: theme.colors.aqua,
                  color: theme.colors.white,
                  boxShadow: theme.shadow.glowAqua,
                  transition: `all ${theme.motion.base}ms ${theme.motion.curve}`
                }}
              >
                <Link href={secondaryHref}>
                  See How It Works
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

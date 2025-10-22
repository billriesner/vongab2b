import { Hero } from "@/src/components/Hero";
import { SplitSection } from "@/src/components/SplitSection";
import { CardGrid } from "@/src/components/CardGrid";
import { Pillars } from "@/src/components/Pillars";
import { CTASection } from "@/src/components/CTASection";
import { Users, Building2, Heart } from "lucide-react";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vonga",
    "alternateName": "Vonga Live Connected",
    "url": "https://vonga.io",
    "logo": "https://vonga.io/logo.svg",
    "description": "Vonga is the emotional infrastructure for modern fandom and community. We embed simple tech into premium apparel so moments become memories and memories become loyalty.",
    "sameAs": [
      "https://twitter.com/vonga",
      "https://instagram.com/vonga",
      "https://linkedin.com/company/vonga"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "hello@vonga.io"
    }
  };

  const cardGridItems = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Teams & Leagues",
      text: "Turn fandom into loyalty",
      href: "/enterprise"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Universities", 
      text: "Keep pride alive from orientation to alumni reunion",
      href: "/enterprise"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Communities",
      text: "Build belonging at human scale",
      href: "/club"
    }
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main>
        {/* Hero Section */}
        <Hero
          headline="From Moment to Memory."
          subhead="The world doesn't need more merch. It needs more meaning. We make that meaning last through connected experiences fans never forget."
          videoSrc="/Vonga - Hero Video.mp4"
          primaryHref="/intake"
          secondaryHref="/technology"
        />

        {/* Problem Statement */}
        <SplitSection
          title="Emotion is your most valuable asset, but it's the hardest one to measure"
          body="In a world of screens, connection has become transactional. Vonga turns emotion into engagement you can see, feel, and measure, without losing the humanity that makes it matter."
          image="/images/hero/hero-device-showcase.jpg"
          ctaHref="#solutions"
        />

        {/* Solutions Grid */}
        <section id="solutions">
          <CardGrid items={cardGridItems} />
        </section>

        {/* Brand Pillars */}
        <Pillars />

        {/* Our Story */}
        <SplitSection
          title="Our fabric is human connection"
          body="Vonga began with a belief: technology should bring people closer. From racing teams to campuses, we weave meaning into every thread."
          image="/images/how-it-works/tap-interaction.jpg"
          reverse={true}
          ctaHref="/about"
          ctaText="Meet Vonga"
        />

        {/* CTA Section */}
        <CTASection
          title="Let's make belonging tangible"
          subtitle="Start a conversation about how connected apparel can serve your community."
          href="/intake"
        />
      </main>
    </>
  );
}


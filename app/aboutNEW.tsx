import React, { useState } from "react";
import { Heart, TrendingUp, Star } from "lucide-react";
import { Head } from "next/document";

const Button = ({ size = "md", variant = "primary", className = "", children, ...rest }: {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none shadow disabled:opacity-50";
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg"
  };

  const variants = {
    primary: "bg-gradient-to-r from-[#33BECC] to-[#1CA3B4] text-white hover:opacity-90",
    secondary: "bg-white text-[#303E55] ring-1 ring-[#303E55] hover:bg-gray-100"
  };
  return (
    <button {...rest} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const NAV_ITEMS = ["Home", "Solutions", "Platform", "Pricing", "Process", "About", "Contact"];

const CORE_VALUES = [
  {
    icon: Heart,
    title: "People First",
    desc: "We craft experiences that delight customers and empower partners."
  },
  {
    icon: TrendingUp,
    title: "Relentless Improvement",
    desc: "We iterate fast and never stop raising the bar."
  },
  {
    icon: Star,
    title: "Quality Over Quantity",
    desc: "From fabric to code, we choose excellence every time."
  }
];

const TEAM = [
  {
    name: "Bill Riesner",
    title: "Founder & CEO",
    img: "https://via.placeholder.com/300x300?text=Bill"
  },
  {
    name: "James Costa",
    title: "Head of Apparel Design",
    img: "https://via.placeholder.com/300x300?text=James"
  }
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>About Vonga | Premium NFC Apparel & Loyalty Tech</title>
        <meta
          name="description"
          content="Learn about Vonga's mission to fuse sustainable athleisure with NFC technology, creating loyalty touch-points that delight brands and their communities."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vonga, Inc." />
        <meta property="og:title" content="About Vonga | Premium NFC Apparel & Loyalty Tech" />
        <meta property="og:description" content="Learn about Vonga's mission to fuse sustainable athleisure with NFC technology, creating loyalty touch-points that delight brands and their communities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vonga.io/about" />
        <meta property="og:image" content="https://www.vonga.io/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Vonga | Premium NFC Apparel & Loyalty Tech" />
        <meta name="twitter:description" content="Learn about Vonga's mission to fuse sustainable athleisure with NFC technology, creating loyalty touch-points that delight brands and their communities." />
        <meta name="twitter:image" content="https://www.vonga.io/og-image.jpg" />
        <meta name="twitter:creator" content="@vongabrand" />
        <link rel="canonical" href="https://www.vonga.io/about" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-06X8DQTKQM"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', 'G-06X8DQTKQM');
        `}</script>
        /&gt;
      </Head>

      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x600?text=Our+Story')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-2 text-4xl font-bold">Crafting Loyalty Through Every Thread</h1>
          <p className="max-w-2xl text-lg">
            We merge premium, sustainable apparel with NFC technology to turn every logo into an engaging touch-point.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#303E55]">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Vonga, we empower brands to build vibrant communities by combining sustainable fashion and frictionless tech.
            Our NFC-enabled garments unlock immersive loyalty experiences that reward real-world engagement and deepen customer relationships.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center sm:grid-cols-2 lg:grid-cols-3">
          {CORE_VALUES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center space-y-4 rounded-lg bg-white p-8 shadow-lg">
              <Icon className="h-12 w-12 text-[#33BECC]" />
              <h3 className="text-xl font-semibold text-[#303E55]">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#303E55]">Meet the Team</h2>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {TEAM.map(({ name, title, img }) => (
            <div key={name} className="flex flex-col items-center space-y-4 text-center">
              <img src={img} alt={`${name} headshot`} className="h-40 w-40 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="text-lg font-semibold text-[#303E55]">{name}</h4>
                <p className="text-sm text-gray-600">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#303E55] py-16 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Want to Partner with Us?</h2>
        <Button size="lg" variant="secondary">
          Get in Touch
        </Button>
      </section>
    </>
  );
}


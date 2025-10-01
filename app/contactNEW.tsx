import React, { useState } from "react";
import { Heart, TrendingUp, Star } from "lucide-react";
import { Head } from "next/document";

/* -------------------------------------------------------------------------- */
/*                                   Button                                   */
/* -------------------------------------------------------------------------- */
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
    lg: "px-7 py-3 text-lg",
  };
  const variants = {
    primary: "bg-gradient-to-r from-[#33BECC] to-[#1CA3B4] text-white hover:opacity-90",
    secondary: "bg-white text-[#303E55] ring-1 ring-[#303E55] hover:bg-gray-100",
  };
  return (
    <button {...rest} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   Data                                     */
/* -------------------------------------------------------------------------- */
const NAV_ITEMS = ["Home", "Solutions", "Platform", "Pricing", "Process", "About", "Contact"];
const CORE_VALUES = [
  {
    icon: Heart,
    title: "People First",
    desc: "We craft experiences that delight customers and empower partners.",
  },
  {
    icon: TrendingUp,
    title: "Relentless Improvement",
    desc: "We iterate fast and never stop raising the bar.",
  },
  {
    icon: Star,
    title: "Quality Over Quantity",
    desc: "From fabric to code, we choose excellence every time.",
  },
];
const TEAM = [
  {
    name: "Bill Riesner",
    title: "Founder & CEO",
    img: "https://via.placeholder.com/300x300?text=Bill",
  },
  {
    name: "James Costa",
    title: "Head of Apparel Design",
    img: "https://via.placeholder.com/300x300?text=James",
  },
];
const FOOTER_COLUMNS = [
  { h: "Site", items: NAV_ITEMS },
  { h: "Resources", items: ["Blog", "FAQ"] },
  { h: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
  { h: "Follow Us", items: ["Instagram", "Twitter", "LinkedIn"] },
];
const GA_ID = "G-06X8DQTKQM";

/* -------------------------------------------------------------------------- */
/*                                About Page                                  */
/* -------------------------------------------------------------------------- */
export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* ------------------------------- SEO Data ------------------------------- */
  const pageTitle = "About Vonga | Premium NFC Apparel & Loyalty Tech";
  const pageDesc =
    "Discover Vonga’s mission to merge sustainable athleisure with NFC technology, building vibrant brand communities.";
  const pageUrl = "https://www.vonga.io/about";
  const ogImage = "https://www.vonga.io/og-image.jpg";

  return (
    <>
      {/* ------------------------------ SEO & GA ------------------------------ */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Vonga, Inc." />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@vongabrand" />
        <link rel="canonical" href={pageUrl} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</script>
      </Head>

      {/* -------------------------------- Header -------------------------------- */}
      <header className="relative bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-[#303E55]">Vonga</a>
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`h-6 w-6 transition-transform ${menuOpen ? "rotate-90" : ""}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
        <nav
          className={`absolute inset-x-0 top-16 origin-top transform bg-white shadow-md transition-all duration-200 ${
            menuOpen ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-0 opacity-0"
          }`}
        >
          <ul className="space-y-3 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[#303E55] hover:text-[#33BECC]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* -------------------------------- Hero -------------------------------- */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1600x600?text=Our+Story')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-2 text-4xl font-bold">Crafting Loyalty Through Every Thread</h1>
          <p className="max-w-2xl text-lg">
            We merge premium, sustainable apparel with NFC technology to turn every logo into an engaging touch‑point.
          </p>
        </div>
      </section>

      {/* ------------------------------- Mission ------------------------------- */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#303E55]">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At Vonga, we empower brands to build vibrant communities by combining sustainable fashion and frictionless tech. Our NFC-enabled garments unlock immersive loyalty experiences that reward real‑world engagement and deepen customer relationships.
          </p>
        </div>
      </section>

      {/* ------------------------------- Values -------------------------------- */}
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

      {/* -------------------------------- Team -------------------------------- */}
      <section className="bg-gray-50 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#303E55]">Meet the Team</h2>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-2">
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

      {/* --------------------------- Call to Action --------------------------- */}
      <section className="bg-[#303E55] py-16 text-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Ready to Partner with Us?</h2>
        <Button size="md" variant="secondary">Get in Touch</Button>
      </section>

      {/* -------------------------------- Footer -------------------------------- */}
      <footer className="bg-[#303E55] py-12 text-gray-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-5">
          <div>
            <img src="https://via.placeholder.com/120x32?text=Vonga+Logo" alt="Vonga logo" className="mb-2 h-8 w-auto object-contain" />
            <p className="text-sm leading-relaxed">Premium apparel fused with NFC so every logo becomes a loyalty touch‑point.</p>
          </div>
          {FOOTER_COLUMNS.map(({ h, items }) => (
            <div key={h}>
              <h4 className="mb-2 font-semibold text-white">{h}</h4>
              <ul className="space-y-1 text-sm">
                {items.map((item) => (
                  <li key={item}><a href="#" className="hover:underline">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/20 pt-4 px-6 text-center text-xs">© {new Date().getFullYear()} Vonga, Inc. All rights reserved.</div>
      </footer>
    </>
  );
}

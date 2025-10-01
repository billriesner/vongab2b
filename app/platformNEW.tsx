import { useState } from "react";
import {
  Tag,
  Clock,
  Globe,
  Smartphone,
  BarChart2,
  Database,
  MapPin,
  Heart,
  Activity,
} from "lucide-react";

// Utility for conditional class names
const cx = (...classes) => classes.filter(Boolean).join(" ");

// Reusable Button component
const Button = ({ size = "md", variant = "primary", className = "", children, ...props }) => {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none shadow";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-base", lg: "px-6 py-3 text-lg" };
  const variants = {
    primary: "bg-[#303E55] text-white hover:opacity-90",
    secondary: "bg-white text-[#303E55] ring-1 ring-[#303E55] hover:bg-gray-100",
  };
  return (
    <button className={cx(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

// SEO and Analytics
const SeoHead = () => (
  <>
    <title>Vonga | Platform Architecture & Details</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Where Tagged Gear Meets a Single Loyalty App—Vonga's Platform blends Apparel Tech, Mobile App, Data & Insights, Infrastructure, and Sustainability layers."
    />
    <meta name="keywords" content="NFC apparel technology, loyalty app, data insights, infrastructure, sustainability" />
    <link rel="canonical" href="https://vonga.io/platform" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-06X8DQTKQM" />
    <script>
      {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config','G-06X8DQTKQM');`}
    </script>
    {/* Structured Data */}
    <script type="application/ld+json">
      {`{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Vonga",
        "url": "https://vonga.io",
        "logo": "https://vonga.io/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/vonga",
          "https://twitter.com/vonga"
        ]
      }`}
    </script>
  </>
);

export default function PlatformPage() {
  const navItems = [
    "Apparel Tech",
    "Mobile App",
    "Data & Insights",
    "Infrastructure",
    "Sustainability",
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const apparelTech = [
    { icon: <Tag className="h-12 w-12 text-[#33BECC]" />, title: "Chip-Anything Flex", desc: "Activate any garment—shirts, hats, shoes, and more." },
    { icon: <MapPin className="h-12 w-12 text-[#33BECC]" />, title: "Global Sourcing", desc: "Factories in NA, EU, APAC matched to your needs." },
    { icon: <Clock className="h-12 w-12 text-[#33BECC]" />, title: "Fast Turnaround", desc: "4-8 weeks for blanks; ~6 months for custom cut-and-sew." },
  ];

  const mobileFeatures = [
    { icon: <Smartphone className="h-12 w-12 text-[#303E55]" />, title: "Tap-to-Open", desc: "First tap installs app; future taps deep-link to perks." },
    { icon: <Heart className="h-12 w-12 text-[#303E55]" />, title: "Perk Toolkit", desc: "Points, badges, stamps, gated content, expiring offers." },
    { icon: <Activity className="h-12 w-12 text-[#303E55]" />, title: "Streak Alerts", desc: "Streak reminders & perk notifications drive retention." },
    { icon: <Globe className="h-12 w-12 text-[#303E55]" />, title: "White-Label App", desc: "Logo, colors, copy—updated in minutes." },
  ];

  const dataInsights = [
    { icon: <BarChart2 className="h-12 w-12 text-[#33BECC]" />, title: "Real-Time Metrics", desc: "Authentic tap counts in live dashboard." },
    { icon: <Database className="h-12 w-12 text-[#33BECC]" />, title: "Exports", desc: "CSV/API access per roadmap timeline." },
    { icon: <Globe className="h-12 w-12 text-[#33BECC]" />, title: "Cohort Analysis", desc: "Repeat trends & attendance snapshots." },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css" />
      <SeoHead />

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur h-16 shadow-sm">
        <div className="mx-auto flex items-center justify-between h-full max-w-7xl px-6">
          <a href="/" className="text-xl font-bold text-[#303E55]">Vonga</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded hover:bg-gray-100">
            <svg
              className={cx("h-6 w-6", menuOpen && "rotate-90")}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="bg-white shadow-md">
            <ul className="space-y-2 px-6 py-4">
              {navItems.map(item => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="block text-[#303E55] font-medium hover:text-[#33BECC]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="pt-20 space-y-32">
        {/* Banner */}
        <section
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: "url('https://via.placeholder.com/1600x600?text=Experience+Vonga+Platform')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
          <h1 className="relative text-center text-white text-5xl font-bold top-1/2 transform -translate-y-1/2">
            Where Tagged Gear Meets a Single Loyalty App
          </h1>
        </section>

        {/* Apparel Tech */}
        <section id="apparel-tech" className="px-6 md:px-0">
          <h2 className="text-4xl font-bold text-center text-[#303E55] mb-12">Apparel Tech</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {apparelTech.map(({ icon, title, desc }) => (
              <div key={title} className="flex flex-col items-start bg-white rounded-lg p-8 shadow-lg">
                <div className="mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold text-[#303E55] mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image Break */}
        <section className="py-16">
          <img
            src="https://via.placeholder.com/1400x400?text=Engage+Your+Audience"
            alt="Engage Your Audience"
            className="mx-auto rounded-lg shadow-xl"
          />
        </section>

        {/* Mobile App */}
        <section id="mobile-app" className="px-6 bg-gray-50 py-16">
          <h2 className="text-4xl font-bold text-center text-[#303E55] mb-8">Mobile App</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
            {mobileFeatures.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-lg p-6 shadow-lg flex items-start gap-4">
                <div>{icon}</div>
                <div>
                  <h3 className="font-semibold text-[#303E55]">{title}</h3>
                  <p className="text-gray-700 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data & Insights */}
        <section id="data-insights" className="px-6 py-16">
          <h2 className="text-4xl font-bold text-center text-[#303E55] mb-8">Data & Insights</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dataInsights.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-lg p-6 shadow-lg text-center">
                {icon}
                <h3 className="mt-4 font-semibold text-[#303E55]">{title}</h3>
                <p className="mt-2 text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure & Sustainability */}
        <section id="infrastructure" className="px-6 md:px-0">
          <h2 className="text-4xl font-bold text-center text-[#303E55] mb-12">Infrastructure & Sustainability</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
              <Database className="h-12 w-12 text-[#33BECC] mb-4" />
              <h3 className="text-2xl font-semibold text-[#303E55] mb-2">Infrastructure</h3>
              <p className="text-gray-700 text-center">
                Runs on Berify’s managed cloud platform with optional EVM-compatible chains and planned SLAs & GDPR compliance.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
              <BarChart2 className="h-12 w-12 text-[#33BECC] mb-4" />
              <h3 className="text-2xl font-semibold text-[#303E55] mb-2">Sustainability</h3>
              <p className="text-gray-700 text-center">
                Right-size production to avoid overstock and choose recycled, organic, or dead-stock fabrics.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#303E55] text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to See the Platform in Action?</h2>
          <p className="max-w-xl mx-auto mb-6">
            Book a live demo to tap a tagged sample, explore the app flow, and discuss how Vonga can transform your brand experience.
          </p>
          <Button size="lg" className="bg-[#33BECC] hover:opacity-90">Book 15-min Demo</Button>
        </section>
      </main>

      <footer className="bg-[#303E55] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          <div>
            <h3 className="text-white font-semibold">Vonga</h3>
            <p className="mt-2 text-sm">Premium apparel fused with NFC for active loyalty.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Site</h4>
            <ul className="mt-2 space-y-2 text-sm">
              {navItems.map(item => (
              <li key={item}>
                <a href={`/#${item.toLowerCase().replace(/ /g, "-")}`} className="hover:text-white">
                  {item}
                </a>
              </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">© {new Date().getFullYear()} Vonga, Inc.</div>
      </footer>
    </>
  );
}

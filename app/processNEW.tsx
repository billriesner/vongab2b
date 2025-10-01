import { useState } from "react";
// import cx from "classnames";
// import { Helmet } from "react-helmet";
import {
  MapPin,
  Edit,
  Package,
  Rocket,
  TrendingUp,
} from "lucide-react";

// Reusable Button component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  size = "md",
  variant = "primary",
  className = "",
  children,
  ...rest
}) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none shadow";
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
    <button
      className={[base, sizes[size], variants[variant], className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};

const navItems = [
  "Home",
  "Solutions",
  "Platform",
  "Pricing",
  "Process",
  "About",
  "Contact",
];
const steps = [
  { Icon: MapPin, title: "Discovery", subtitle: "30 min Call", desc: "Align on loyalty goals, gear wishlist, and success metrics." },
  { Icon: Edit, title: "Co-Design", subtitle: "1 Week", desc: "Mock-ups, perk flow drafts, pricing lock + 50% deposit." },
  { Icon: Package, title: "Production", subtitle: "4–8 Weeks to 6 Months", desc: "From blanks to bespoke, with weekly Slack updates." },
  { Icon: Rocket, title: "Launch", subtitle: "< 1 Hr Rollout", desc: "Gear sorted, app live, staff scripts — instant activation." },
  { Icon: TrendingUp, title: "Optimize", subtitle: "Ongoing", desc: "Day-30 check-in, cohort reports, roadmap refinements." },
];

export default function ProcessPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* SEO & Analytics */}
      {/* Helmet is not imported or defined, so use next/head or a React fragment for meta tags */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vonga • Process</title>
        <meta name="description" content="Streamline loyalty activation with Vonga's five-step process, from discovery to ongoing optimization." />
      </head>
        <link rel="canonical" href="https://vonga.io/process" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-06X8DQTKQM"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-06X8DQTKQM');
        `}</script>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css"
      />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold text-[#303E55]">Vonga</a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center rounded hover:bg-gray-100"
          >
            <svg
              className={`h-6 w-6 transition-transform${menuOpen ? " rotate-90" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={[
            "absolute top-16 inset-x-0 origin-top transform transition-all duration-200 bg-white shadow-md",
            menuOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
          ].join(" ")}
        >
          <ul className="bg-white px-6 py-4 space-y-3 shadow-md">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block text-[#303E55] hover:text-[#33BECC]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1600x600?text=Process+Banner')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative flex h-full items-center justify-center text-4xl font-bold text-white">
          From Idea to Active Loyalty in Five Steps
        </h1>
      </section>

      {/* Steps */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ Icon, title, subtitle, desc }, idx) => (
            <div key={title} className="flex flex-col items-center space-y-4 rounded-lg bg-white p-6 shadow-lg text-center">
              <div className="h-10 w-10 rounded-full bg-[#33BECC] text-white flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <Icon className="h-12 w-12 text-[#33BECC]" />
              <h3 className="text-xl font-semibold text-[#303E55]">{title}</h3>
              <p className="text-sm text-[#33BECC] font-medium">{subtitle}</p>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Billing & Support */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-[#303E55] mb-12">Billing & Support Snapshot</h2>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 sm:flex-row sm:justify-center">
          <div className="flex flex-col items-center space-y-4 bg-white p-8 shadow-lg rounded-lg">
            <Package className="h-12 w-12 text-[#33BECC]" />
            <h4 className="text-xl font-semibold text-[#303E55]">Apparel</h4>
            <p className="text-gray-700">50% deposit; balance pre-ship</p>
            <p className="text-gray-700">Freight at cost</p>
            <p className="text-gray-700">Global logistics</p>
          </div>
          <div className="flex flex-col items-center space-y-4 bg-white p-8 shadow-lg rounded-lg">
            <TrendingUp className="h-12 w-12 text-[#33BECC]" />
            <h4 className="text-xl font-semibold text-[#303E55]">SaaS</h4>
            <p className="text-gray-700">Flat fee waived by apparel credit</p>
            <p className="text-gray-700">15% off annual pre-pay</p>
            <p className="text-gray-700">Slack/email 24-hr SLA</p>
          </div>
        </div>
        {/* New Pricing Button */}
        <div className="mt-10 flex justify-center">
          <Button size="md" variant="primary">View Detailed Pricing</Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#303E55] py-16 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready for Step 1? Book Discovery Call</h2>
        <Button size="lg" variant="secondary">Book Discovery Call</Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#303E55] text-gray-300 py-12">
        <div className="mx-auto max-w-7xl grid gap-8 px-6 md:grid-cols-5">
          <div>
            <h3 className="text-white font-semibold">Vonga</h3>
            <p className="mt-2 text-sm leading-relaxed">Premium apparel fused with NFC so every logo becomes a loyalty touch-point.</p>
          </div>
          {[
            { h: 'Site', items: navItems },
            { h: 'Resources', items: ['Blog', 'FAQ'] },
            { h: 'Legal', items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
            { h: 'Follow Us', items: ['Instagram', 'Twitter', 'LinkedIn'] },
          ].map(({ h, items }) => (
            <div key={h}>
              <h4 className="text-white font-semibold mb-2">{h}</h4>
              <ul className="space-y-2 text-sm">
                {items.map((it) => (
                  <li key={it}><a href="#" className="hover:text-white">{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-xs">© {new Date().getFullYear()} Vonga, Inc. All rights reserved.</div>
      </footer>
    </>
  );
}

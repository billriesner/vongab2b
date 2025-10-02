import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Utility
const cx = (...cls: (string | false | null | undefined)[]): string => cls.filter(Boolean).join(" ");

// Button Component
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

const Button = ({
  size = "md",
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none shadow";
  const sizes = { sm: "px-3 py-1.5 text-sm", md: "px-4 py-2 text-base", lg: "px-6 py-3 text-lg" };
  const variants = { primary: "bg-[#303E55] text-white hover:opacity-90", secondary: "bg-white text-[#303E55] ring-1 ring-[#303E55] hover:bg-gray-100" };
  return (
    <button className={cx(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </button>
  );
};

// SEO & GA4
const SeoHead = () => (
  <>
    <title>Vonga | Merch-Driven Loyalty Platform & Customer Engagement Apparel</title>
    <meta name="description" content="Vonga blends premium NFC-enabled apparel with a white-label loyalty app—ideal for gyms, events and creators seeking next-level engagement." />
    <meta name="keywords" content="merch provider, loyalty platform, customer engagement, NFC apparel, interactive apparel" />
    <meta property="og:title" content="Vonga | Merch-Driven Loyalty Platform" />
    <meta property="og:description" content="Turn every hoodie, tee or wristband into a one-tap gateway to perks, content and analytics—no extra hardware." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vonga.io/" />
    <meta property="og:image" content="https://vonga.io/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Vonga | Merch-Driven Loyalty Platform" />
    <meta name="twitter:description" content="Premium NFC apparel + mobile loyalty app = Active customer engagement." />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-06X8DQTKQM"></script>
    <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-06X8DQTKQM',{anonymize_ip:true});`}} />
  </>
);

// Main
export default function HomePage() {
  const navItems = ["Home","Solutions","Platform","Pricing","Process","About","Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const timeline = [
    { n:1,t:"Embed Invisible NFC",d:"Ultra-thin, wash-proof chip sewn beneath your artwork—no batteries or QR clutter." },
    { n:2,t:"Tap & Onboard",d:"First tap launches your white-label iOS/Android app; every tap after deep-links to perks and content." },
    { n:3,t:"Reward & Measure",d:"Heat-maps and cohort dashboards turn wear data into repeat revenue." },
  ];
  const [step, setStep] = useState(0);
  const prev = ()=>setStep(s=>s===0?timeline.length-1:s-1);
  const next = ()=>setStep(s=>(s+1)%timeline.length);

  const useCases = [
    {h:"Gyms & Studios",p:"Boost retention with tap-to-check-in streaks and surprise rewards—right on members’ phones."},
    {h:"Live Events & Festivals",p:"Extended engagement beyond event day: photo drops, artist drops and scavenger hunts."},
    {h:"Creators & Artists",p:"Deliver VIP ownership: authentic merch taps to unlock exclusive content."},
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css" />
      <SeoHead />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-xl font-bold text-[#303E55]">Vonga</a>
          <button onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menu" className="flex h-9 w-9 items-center justify-center rounded hover:bg-gray-100">
            <svg className={cx("h-6 w-6 transition-transform",menuOpen&&"rotate-90")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/></svg>
          </button>
        </div>
        <div className={cx(
        "absolute top-16 inset-x-0 origin-top transform transition-all duration-200 bg-white shadow-md",
        menuOpen
          ? "scale-y-100 opacity-100 pointer-events-auto"
          : "scale-y-0 opacity-0 pointer-events-none"
      )}>
          <ul className="bg-white px-6 py-4 space-y-3 shadow-md">
            {navItems.map(item=><li key={item}><a href="#" className="block text-[#303E55] hover:text-[#33BECC]" onClick={()=>setMenuOpen(false)}>{item}</a></li>)}
          </ul>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 text-white" style={{background:'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80) center/cover'}}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Apparel That Unlocks Digital Loyalty in One Tap</h1>
          <p className="mt-4 text-lg text-gray-200">Vonga blends premium garments with invisible NFC tags. A single tap launches your white-label mobile app—unlocking perks, content and analytics seamlessly.</p>
          <div className="mt-8 flex justify-center gap-4"><Button size="lg">Book Demo</Button><Button size="lg" variant="secondary">Watch Tour</Button></div>
        </div>
      </section>

      {/* Value Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 px-6 md:grid-cols-3">
          {[
            {h:"Win Back Members",d:"Tap-to-check-in nudges lapsed customers back into your ecosystem."},
            {h:"Boost Engagement",d:"Interactive quests, polls and AR experiences via apparel taps."},
            {h:"Drive Repeat Sales",d:"Limited drops and offers triggered by wear data and taps."},
          ].map(({h,d})=><div key={h} className="rounded bg-white p-6 shadow"><h3 className="font-semibold text-[#303E55]">{h}</h3><p className="mt-2 text-gray-600">{d}</p></div>)}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#33BECC] py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 mb-12">Everything runs in your customers’ pockets. Tap the logo to install or open the app; no scanners, beacons or kiosks required. Every tap delivers fresh value and feeds real-time insights.</p>
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500" style={{transform:`translateX(-${step*100}%)`}}>
              {timeline.map(({n,t,d})=><div key={n} className="min-w-full px-4"><div className="mx-auto max-w-md bg-white/90 p-8 text-[#303E55] shadow-lg rounded"><div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-gray-200 text-lg font-bold leading-none">{n}</div><h3 className="font-semibold text-xl">{t}</h3><p className="mt-2 text-sm leading-relaxed">{d}</p></div></div>)}
            </div>
            <div className="mt-6 flex justify-center gap-3"><Button variant="secondary" size="sm" onClick={prev}>Prev</Button><Button variant="secondary" size="sm" onClick={next}>Next</Button></div>
          </div>
        </div>
      </section>

      {/* Active Loyalty */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#303E55]">Active Loyalty in Action</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {useCases.map(({h,p})=><div key={h} className="rounded border p-6 hover:shadow-lg transition"><h3 className="font-semibold text-lg text-[#303E55]">{h}</h3><p className="mt-2 text-gray-600">{p}</p></div>)}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="bg-gray-50 py-20 text-center">
        <h2 className="text-2xl font-bold">Start for $500 + First Apparel Order</h2>
        <p className="mt-2 text-gray-700">Software fee <span className="text-[#33BECC] font-semibold">waived</span> with $300/mo apparel spend. Annual prepay saves 15%.</p>
        <Button size="lg" className="mt-6">View Pricing</Button>
      </section>

      {/* CTA */}
      <section className="bg-[#303E55] py-16 text-center text-white">
        <h2 className="text-2xl font-bold">Ready to Outfit Your Audience?</h2>
        <Button size="lg" variant="secondary" className="mt-6" asChild>
          <a href="/enterprise#talk">Let's Talk</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-[#303E55] text-gray-300 py-12">
        <div className="mx-auto max-w-4xl px-6 grid gap-6 md:grid-cols-3">
          <div><h3 className="text-white font-semibold">Vonga</h3><p className="mt-2 text-sm">Premium NFC apparel fused with a loyalty platform—turn garments into digital touchpoints.</p></div>
          <div><h4 className="text-white font-semibold">Site</h4><ul className="mt-2 space-y-1 text-sm">{navItems.map(i=><li key={i}><a href="#" className="hover:text-white">{i}</a></li>)}</ul></div>
          <div><h4 className="text-white font-semibold">Legal</h4><ul className="mt-2 space-y-1 text-sm"><li><a href="#" className="hover:text-white">Privacy Policy</a></li><li><a href="#" className="hover:text-white">Terms of Service</a></li><li><a href="#" className="hover:text-white">Cookie Policy</a></li></ul></div>
        </div>
        <div className="mt-8 text-center text-xs">© {new Date().getFullYear()} Vonga, Inc. All rights reserved.</div>
      </footer>
    </>
  );
}

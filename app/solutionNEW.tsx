import { useState } from "react";
import { Smartphone, BarChart2, Bell, Package2, Database, Globe } from "lucide-react";

// Helper for conditional class names
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

// SEO and social metadata
const SeoHead = () => (
  <>
    <title>Vonga | NFC Apparel Loyalty Solutions</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Discover Vonga's NFC-enabled apparel solutions for gyms, events, and creators to drive loyalty and engagement." />
    <meta name="keywords" content="merch provider, loyalty platform, customer engagement, NFC apparel, interactive apparel" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="https://vonga.io/solutions" />
    <meta property="og:title" content="Vonga | NFC Apparel Loyalty Solutions" />
    <meta property="og:description" content="Boost retention and engagement with Vonga's NFC-embedded apparel and mobile app solutions." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://vonga.io/solutions" />
    <meta property="og:image" content="https://via.placeholder.com/1200x630?text=Vonga+Solutions" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Vonga | NFC Apparel Loyalty Solutions" />
    <meta name="twitter:description" content="Explore tailored NFC apparel solutions to enhance loyalty and engagement." />
  </>
);

export default function SolutionsPage() {
  const navItems = ["Home", "Solutions", "Platform", "Pricing", "Process", "About", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const segments = [
    {
      label: "Gyms & Studios",
      image: "https://via.placeholder.com/600x400?text=Gyms+%26+Studios",
      tagline: "Every tap keeps members moving",
      copy: "Turn apparel into a friction-free check-in and reward channel that surfaces upsells before churn strikes.",
      examples: [
        { title: "Class Check-Ins", desc: "Members tap a tee to auto-log attendance—no kiosks." },
        { title: "Streak Badges", desc: "Earn badges at 10, 25, and 50 sessions; shareable to boost FOMO." },
        { title: "Gear Upsell", desc: "After 20 taps, unlock 20% off premium apparel." },
        { title: "Referral Pass", desc: "Tap to share guest passes and track referrals." },
      ],
    },
    {
      label: "Events & Communities",
      image: "https://via.placeholder.com/600x400?text=Events+%26+Communities",
      tagline: "Stamp moments, unlock experiences",
      copy: "Tagged hats and wristbands turn your festival into a gamified journey—minus scanning queues.",
      examples: [
        { title: "Stage Stamps", desc: "Tap each stage to collect stamps and climb leaderboards." },
        { title: "VIP Drink Tokens", desc: "Collect stamps to redeem free beverages." },
        { title: "AR Map", desc: "Tap badge to open an AR overlay of the event map." },
        { title: "Photo Delivery", desc: "Instantly tap to receive branded event photos." },
      ],
    },
    {
      label: "Creators & Artists",
      image: "https://via.placeholder.com/600x400?text=Creators+%26+Artists",
      tagline: "Apparel that keeps fans coming back",
      copy: "From exclusive tracks to AR filters, each tap builds engagement and deepens fan relationships.",
      examples: [
        { title: "Hidden Track", desc: "Tap a limited tee to unlock an unreleased song." },
        { title: "VIP Backstage Pass", desc: "1-in-100 taps issue a golden ticket to a private livestream." },
        { title: "NFT Mint", desc: "Each tap mints a unique collectible for true superfans." },
        { title: "Presale Access", desc: "Tap to reveal codes for upcoming ticket drops." },
      ],
    },
  ];

  const capabilities = [
    { Icon: Smartphone, title: "White-Label App", desc: "Your brand front-and-center on iOS & Android." },
    { Icon: BarChart2, title: "Real-Time Analytics", desc: "Heat maps and cohort data at your fingertips." },
    { Icon: Bell, title: "Targeted Push Notifications", desc: "Engage users based on tap behavior and preferences." },
    { Icon: Package2, title: "Flexible Tag Embeds", desc: "400+ integration methods for garments and accessories." },
    { Icon: Database, title: "Data Ownership", desc: "Full access to customer profiles and behavior metrics." },
    { Icon: Globe, title: "Global Sourcing", desc: "Partner factories across North America, Europe, and Asia." },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css" />
      <SeoHead />
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-71596Q3TGE"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-71596Q3TGE');`}
      </script>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 h-16 bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <a href="/" className="text-xl font-bold text-[#303E55]">Vonga</a>
          <button aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)} className="flex h-9 w-9 items-center justify-center rounded hover:bg-gray-100">
            <svg className={cx("h-6 w-6 transition-transform", menuOpen && "rotate-90")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
        <div className={cx("absolute top-16 inset-x-0 origin-top transform transition-all duration-300 bg-white shadow-md md:hidden", menuOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none")}> 
          <ul className="space-y-4 bg-white px-6 py-6">
            {navItems.map(item => (
              <li key={item}><a href={`/#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block text-base font-medium text-[#303E55] hover:text-[#33BECC]">{item}</a></li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative w-full text-white" style={{ backgroundImage: "url('https://via.placeholder.com/1920x600?text=Solutions+Hero')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">Solutions Tailored to Your Audience</h1>
            <p className="mt-4 text-lg font-light text-gray-200">Concrete ways Vonga blends apparel and digital perks to boost loyalty, engagement, and revenue.</p>
          </div>
        </section>

        {/* Segments Section */}
        <section className="bg-gray-50 py-20" id="solutions">
          <div className="mx-auto max-w-6xl space-y-24 px-6">
            {segments.map((seg, idx) => (
              <div key={seg.label} className="grid gap-10 md:grid-cols-2 items-center">
                <div className={cx(idx % 2 === 1 && "md:order-last")}>                  <img src={seg.image} alt={seg.label} className="w-full h-64 object-cover rounded-lg" />                </div>
                <div className={cx(idx % 2 === 1 && "md:order-first") + " space-y-4"}>
                  <h2 className="text-2xl font-bold text-[#303E55]">{seg.label}</h2>
                  <p className="font-medium text-[#33BECC]">{seg.tagline}</p>
                  <p className="text-gray-700 leading-relaxed">{seg.copy}</p>
                  <ul className="space-y-3">
                    {seg.examples.map(ex => (
                      <li key={ex.title} className="flex items-start space-x-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#33BECC] flex-shrink-0" /><div><h3 className="font-semibold text-[#303E55]">{ex.title}</h3><p className="text-sm text-gray-600">{ex.desc}</p></div></li>
                    ))}
                  </ul>
                  <Button className="mt-4">Explore Platform</Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="bg-white py-20" id="capabilities">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-bold text-[#303E55]">What Vonga Delivers</h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {capabilities.map(({ Icon, title, desc }) => (
                <div key={title} className="rounded-lg border border-gray-200 p-6 text-center shadow-sm transition hover:shadow-md">
                  <Icon className="mx-auto h-12 w-12 text-[#33BECC]" />
                  <h3 className="mt-4 font-semibold text-[#303E55]">{title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center" style={{ backgroundColor: "#303E55" }} id="cta">
          <h2 className="text-3xl font-bold text-white">Ready to Outfit Your Audience?</h2>
          <Button size="lg" variant="secondary" className="mt-6" asChild>
            <a href="/enterprise#talk">Let's Talk</a>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#303E55] text-gray-300 py-12">
        <div className="mx-auto max-w-7xl grid gap-8 px-6 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Vonga</h3>
            <p className="text-sm">Premium apparel fused with NFC for active loyalty.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Site</h4>
            <ul className="space-y-2 text-sm">{navItems.map(n => (<li key={n}><a href={`/#${n.toLowerCase()}`} className="hover:text-white">{n}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs">© {new Date().getFullYear()} Vonga, Inc. All rights reserved.</div>
      </footer>
    </>
  );
}

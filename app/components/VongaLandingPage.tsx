'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, BarChart3, Shirt, MapPin } from "lucide-react";
import type { JSX } from "react";
import { SubscribeForm } from "@/components/SubscribeForm";
import Link from "next/link";

const ACCENT = "#33becc";
const DARK = "#303e55";

export default function VongaLandingPage(): JSX.Element {
  const navLinks = [
    ["#problem", "Problem"],
    ["#solution", "Solution"],
    ["#how-subscribe", "Stay Connected"],
    ["#contact", "Contact"],
  ];

  const solutionCards = [
    {
      icon: <Shirt className="w-12 h-12" style={{ color: ACCENT }} />,
      title: "Wearable",
      desc: "Premium apparel co‑designed with your brand. Pieces your community will actually want to wear everywhere.",
    },
    {
      icon: <MapPin className="w-12 h-12" style={{ color: ACCENT }} />,
      title: "Tappable",
      desc: "Built‑in NFC tech triggers perks, quests, and surprise rewards. No download, no sign‑in friction.",
    },
    {
      icon: <Handshake className="w-12 h-12" style={{ color: ACCENT }} />,
      title: "Profitable",
      desc: "Boost repeat visits, capture zero‑party data, and earn ≥50% margin on every item.",
    },
  ];

  return (
    <div className="w-full font-sans scroll-smooth text-black">
      {/* --- Header --- */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Vonga logo" className="h-8 w-auto" />
            <span className="sr-only">Vonga</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="hover:underline underline-offset-4" style={{ color: DARK }}>
                {label}
              </a>
            ))}
          </nav>
          <Button size="sm" className="md:hidden" variant="primary" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </header>

      {/* --- Hero --- */}
      <main>
        <section id="hero" className="pt-32 pb-24 bg-cover bg-center" style={{ backgroundImage: "url('/hero-placeholder.jpg')" }}>
          <div className="max-w-5xl mx-auto text-center px-6 bg-white/80 py-12 rounded">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              From first touch to <span style={{ color: ACCENT }}>lasting loyalty.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Connected apparel that rewards your community when they show up, and keeps you connected long after they leave.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="px-8 py-4" variant="primary" asChild>
                <a href="#solution">See how it works</a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4" style={{ borderColor: ACCENT, color: ACCENT }} asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>

        {/* --- Problem --- */}
        <section id="problem" className="py-20 bg-gray-50 border-t">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: DARK }}>Why communities stall</h2>
              <p className="text-gray-700 text-lg mb-6">
                Half of new members drift away within six months. Swag collects dust and margins are razor‑thin. Why burn budget on acquisition if you can’t retain?
              </p>
              <Button variant="dark" asChild>
                <a href="#solution">The Solution</a>
              </Button>
            </div>
            <div className="flex justify-center">
              <BarChart3 className="w-64 h-64" style={{ color: ACCENT }} />
            </div>
          </div>
        </section>

        {/* --- Solution --- */}
        <section id="solution" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: DARK }}>Wearable, Tappable, Profitable</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Vonga blends physical apparel with digital touchpoints to supercharge brand engagement. Our connected clothing lets your community unlock perks with a tap, turning everyday wear into a loyalty engine.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {solutionCards.map(({ icon, title, desc }) => (
                <Card key={title} className="shadow-lg rounded-2xl border border-gray-100">
                  <CardHeader className="flex flex-col items-center gap-2 pt-8">
                    {icon}
                    <CardTitle className="text-xl" style={{ color: DARK }}>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700 pb-8 px-6 text-left">{desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- Demo Video --- */}
        <section id="demo-video" className="hidden py-20 bg-gray-100 border-t text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: DARK }}>See it in Action</h2>
            <p className="text-gray-700 mb-6">Watch a quick demo to understand how Vonga works for your brand and community.</p>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Vonga Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg border border-gray-300"
              ></iframe>
            </div>
          </div>
        </section>

        {/* --- Stay Connected --- */}
        <section id="how-subscribe" className="py-20 bg-gray-50 border-t text-center px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: DARK }}>Stay Connected</h2>
            <p className="text-lg text-gray-700 mb-6">
              Sign up for launch news, behind-the-scenes updates, and exclusive early access.
            </p>
            <SubscribeForm />

          </div>
        </section>

        {/* --- Contact --- */}
        <section id="contact" className="py-20 bg-white border-t text-center px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4" style={{ color: DARK }}>Let's Connect</h2>
            <p className="text-gray-700 mb-6">Want a demo or custom quote? Shoot us an email and let's see how Vonga can help your community.</p>
            <Button variant="primary" asChild>
              <Link href="/intake">
                Let's Connect
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-black text-white text-sm py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-6">
          <div>
            <p className="font-bold mb-2">Vonga</p>
            <ul className="space-y-1">
              {navLinks.map(([href, label]) => (
                <li key={href}><a href={href} className="hover:underline">{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="text-gray-400">
            <p className="mb-2">© {new Date().getFullYear()} Vonga. All rights reserved.</p>
            <p className="text-xs">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. Use of this site constitutes acceptance of our Terms of Use.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

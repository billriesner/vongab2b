'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Link as LinkIcon, Smartphone, Zap, BarChart3, RefreshCw } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <main className="bg-[#0A1422] text-white">
      {/* SECTION 1 — Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
              Make apparel interactive.
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Each item connects to a branded mobile experience. No app required.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/connect"
                className="px-6 py-3 rounded-2xl font-medium bg-[#F5856E] text-white hover:brightness-110 transition"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/30">
            {/* Placeholder visual: phone tap */}
            <Image
              src="/images/placeholders/how-it-works/hero-tap.jpg"
              alt="Tap apparel to launch a mobile experience"
              width={1280}
              height={800}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — TLDR Strip */}
      <section id="tldr" className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Tag on Apparel', desc: 'Each garment includes a discreet NFC tag.' },
              { title: 'Tap to Open', desc: 'A phone tap launches a branded mobile experience.' },
              { title: 'Act and Track', desc: 'Fans or members engage and every interaction is measurable.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black/30">
                  <Image
                    src="/images/placeholders/how-it-works/icon-strip.svg"
                    alt=""
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                <p className="text-white/75">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — What Happens on Tap */}
      <section id="flow" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <h2 className="text-3xl font-semibold mb-8">What happens on tap</h2>

          <ol className="grid lg:grid-cols-5 gap-5">
            {[
              { h: 'Tag → secure link', p: 'Each tag holds a unique, signed URL.', icon: LinkIcon },
              { h: 'Launch mobile experience', p: 'Your branded page loads instantly.', icon: Smartphone },
              { h: 'Trigger actions', p: 'Join, check in, enter raffle, redeem.', icon: Zap },
              { h: 'Capture engagement data', p: 'Time, location, item, outcome.', icon: BarChart3 },
              { h: 'Close the loop', p: 'Update rewards and sync to CRM.', icon: RefreshCw },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 flex flex-col gap-3"
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center border border-white/10 bg-white/[0.02] mx-auto mb-2">
                    <Icon className="w-8 h-8 text-[#33BECC]" />
                  </div>
                  <div className="text-lg font-medium text-center">{step.h}</div>
                  <p className="text-white/75 text-sm text-center">{step.p}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* SECTION 4 — What Powers It */}
      <section id="components" className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <h2 className="text-3xl font-semibold mb-8">What powers it</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { h: 'Garment + NFC tag', p: 'Durable, wash-safe, unique ID per item.' },
              { h: 'Mobile experience', p: 'Fast loading on your domain.' },
              { h: 'Campaign engine', p: 'Rules for time, place, and rewards.' },
              { h: 'Integrations', p: 'HubSpot, CSV, webhooks, analytics feed.' },
              { h: 'Analytics dashboard', p: 'Scans, uniques, conversion, trends.' },
            ].map((card) => (
              <div
                key={card.h}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-4 bg-black/30">
                  <Image
                    src="/images/placeholders/how-it-works/component.svg"
                    alt=""
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <h3 className="text-xl font-medium mb-1">{card.h}</h3>
                <p className="text-white/75">{card.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Real Use Cases */}
      <section id="use-cases" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <h2 className="text-3xl font-semibold mb-8">What you can launch now</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { h: 'Geofenced check ins', p: 'Reward verified in person attendance.', img: '/images/nav-sports.svg' },
              { h: 'Time bound drops', p: 'Create urgency with timed rewards.', img: '/images/nav-schools.svg' },
              { h: 'Raffles and giveaways', p: 'Run fair, trackable digital draws.', img: '/images/nav-creators.svg' },
              { h: 'Redeemable perks', p: 'Unlock offers tied to item ownership.', img: '/images/nav-studiosclubs.svg' },
            ].map((card) => (
              <div
                key={card.h}
                className="group relative rounded-2xl overflow-hidden border border-white/10"
              >
                <Image
                  src={card.img}
                  alt=""
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
                <div className="absolute bottom-0 p-5">
                  <div className="text-xl font-medium">{card.h}</div>
                  <div className="text-white/80 text-sm">{card.p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Measure What Matters */}
      <section id="metrics" className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold mb-4">Measure what matters</h2>
            <ul className="space-y-2 text-white/80">
              <li>Scans, unique users, repeat engagement, conversion.</li>
              <li>Location and time insights.</li>
              <li>Top performing campaigns and items.</li>
            </ul>
          </div>
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-black/30 p-4">
            {/* Placeholder chart */}
            <Image
              src="/images/placeholders/how-it-works/chart-placeholder.svg"
              alt="Engagement chart placeholder"
              width={1200}
              height={700}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — Privacy and Security */}
      <section id="privacy" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold mb-4">Privacy and security</h2>
            <ul className="space-y-2 text-white/80">
              <li>Standards based NFC tags (NDEF).</li>
              <li>Signed links to prevent abuse.</li>
              <li>Opt in identity with clear consent.</li>
              <li>Cloud hosting with role based access and audit trails.</li>
            </ul>
          </div>
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/10 bg-black/30">
            <Image
              src="/images/placeholders/how-it-works/lock-energy.svg"
              alt=""
              width={1200}
              height={800}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — Getting Started */}
      <section id="getting-started" className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <h2 className="text-3xl font-semibold mb-8">Getting started</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { h: 'Define goals and scope', p: 'Clarify engagement and measurement objectives.' },
              { h: 'Pilot and refine', p: 'Test a small batch, analyze results, tune the experience.' },
              { h: 'Scale with confidence', p: 'Full campaigns may take several months to plan and deploy.' },
            ].map((card) => (
              <div key={card.h} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-medium mb-2">{card.h}</h3>
                <p className="text-white/75">{card.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/connect"
              className="px-6 py-3 rounded-2xl font-medium bg-[#F5856E] text-white hover:brightness-110 transition"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQs */}
      <section id="faqs" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
          <h2 className="text-3xl font-semibold mb-8">FAQs</h2>
          <div className="divide-y divide-white/10">
            {[
              { q: 'Do users need an app?', a: 'No. Tap opens in the phone browser.' },
              { q: 'Does it work on iPhone and Android?', a: 'Yes. Modern phones support NFC tap with QR fallback.' },
              { q: 'How durable are the tags?', a: 'Wash tested placements and adhesives.' },
              { q: 'What if a tag is damaged?', a: 'Replacement process is available.' },
              { q: 'How do we see the data?', a: 'Use the dashboard or sync via integrations.' },
            ].map((f, i) => (
              <details key={i} className="py-4 group">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="text-lg font-medium">{f.q}</span>
                  <span className="text-white/60">+</span>
                </summary>
                <p className="mt-2 text-white/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — Final CTA Banner */}
      <section id="cta-banner" className="relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/how-band.svg"
            alt=""
            width={1600}
            height={900}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to make connection tangible?
          </h2>
          <Link
            href="/connect"
            className="px-6 py-3 rounded-2xl font-medium bg-[#F5856E] text-white hover:brightness-110 transition"
          >
            Let's Connect
          </Link>
        </div>
      </section>
    </main>
  );
}


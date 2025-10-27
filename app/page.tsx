'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="bg-[#0a1422] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Vonga - Hero Video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-8" style={{ color: '#33BECC' }}>
            From Moment to Memory.
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-10 max-w-5xl mx-auto">
            Moments fade. Meaning endures.<br />
            We help you make connection tangible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/connect">
                Let's Connect
              </Link>
            </Button>
            <Button variant="cyan" size="lg" asChild>
              <Link href="/how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#1a2435]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Moments fade, but meaning doesn't have to.</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            In a world of screens, connection has become transactional. Vonga builds a bridge between moments and memories, 
            woven into what people wear every day. Real, measurable, unforgettable connection.
          </p>
          <Button variant="cyan" size="lg" asChild>
            <Link href="/how-it-works">
              See How It Works
            </Link>
          </Button>
        </div>
      </section>

      {/* VERTICALS SHOWCASE */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-[#0a1422]">Built for Every Community</h2>
          
          <div className="space-y-16">
            {/* Sports Teams */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-[16/10] bg-gray-100">
                <img
                  src="/images/sports-hero.svg"
                  alt="Stadium after game, lights dimming, fans still connected by subtle light ribbons."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#0a1422]">Your fans' passion shouldn't fade after game day.</h3>
                <p className="text-[#0a1422]/80 text-lg leading-relaxed mb-6">
                  Vonga helps sports teams turn game-day emotion into lasting belonging, connection that lives on long after the final whistle.
                </p>
                <Button variant="learnMore" size="lg" asChild>
                  <Link href="/sports-teams">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            {/* Schools & Universities */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-[#0a1422]">Your students wear the same colors. Now help them feel part of the same community.</h3>
                <p className="text-[#0a1422]/80 text-lg leading-relaxed mb-6">
                  Vonga helps universities turn moments of pride into lasting connection, linking students, alumni, and fans through everyday experiences that build lifelong belonging.
                </p>
                <Button variant="learnMore" size="lg" asChild>
                  <Link href="/schools">
                    Learn More
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-gray-200 aspect-[16/10] bg-gray-100">
                <img
                  src="/images/schools-hero.svg"
                  alt="Diverse students on the quad in school colors, subtly connected by light ribbons."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* Creators & Communities */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-[16/10] bg-gray-100">
                <img
                  src="/images/creators-hero.svg"
                  alt="Creator on stage or in studio, followers subtly connected by soft aqua light trails."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#0a1422]">You build moments that go viral. We help them last.</h3>
                <p className="text-[#0a1422]/80 text-lg leading-relaxed mb-6">
                  Vonga helps creators and communities turn short bursts of excitement into long-term connection, making belonging something your people can see, feel, and carry every day.
                </p>
                <Button variant="learnMore" size="lg" asChild>
                  <Link href="/creators">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>

            {/* Studios & Clubs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-[#0a1422]">Connection Beyond the Club</h3>
                <p className="text-[#0a1422]/80 text-lg leading-relaxed mb-6">
                  Membership isn't just access, it's identity that endures. Vonga connects every class, every round, and every interaction into one living sense of belonging.
                </p>
                <Button variant="learnMore" size="lg" asChild>
                  <Link href="/studios-clubs">
                    Learn More
                  </Link>
                </Button>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-gray-200 aspect-[16/10] bg-gray-100">
                <img
                  src="/images/studiosclubs-hero.svg"
                  alt="Members connected through motion and apparel in a fitness studio setting."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#0a1422]">From on-body moments to everyday connection.</h2>
          <p className="text-[#0a1422]/80 text-lg md:text-xl leading-relaxed mb-8">
            We blend physical and digital touchpoints so each item becomes a living link, simple to use, easy to measure, and designed to feel human.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-[16/9] bg-gray-100 max-w-3xl mx-auto">
            <img
              src="/images/how-band.svg"
              alt="Subtle aqua and coral light strands suggesting on-body connection."
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-[#0e1b2f] to-[#0a1422]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Create Belonging That Lasts?</h2>
        <Button variant="primary" size="lg" asChild>
          <Link href="/connect">
            Let's Connect
          </Link>
        </Button>
      </section>
    </main>
  );
}
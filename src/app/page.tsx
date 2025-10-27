'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-[#0a1422] text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative grid lg:grid-cols-12 items-center gap-10 px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="lg:col-span-7 z-10">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            From Moment to Memory.
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
            We help teams, universities, studios, and clubs turn belonging into something you can feel — and carry forward.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/connect"
              className="px-6 py-3 rounded-2xl font-medium bg-[#33BECC] text-[#0a1422] hover:brightness-110 transition"
            >
              Let's Connect
            </Link>
            <Link
              href="/how-it-works"
              className="px-6 py-3 rounded-2xl font-medium border border-white/20 hover:bg-white/5 transition"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* HERO VIDEO */}
        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/30">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-cinematic.jpg"
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/media/hero-cinematic.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Moments fade, but meaning doesn't have to.</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            In a world of screens, connection has become transactional. Vonga builds a bridge between moments and memories, 
            woven into what people wear every day. Real, measurable, unforgettable connection.
          </p>
          <Link
            href="/how-it-works"
            className="px-6 py-3 rounded-2xl font-medium bg-[#33BECC] text-[#0a1422] hover:brightness-110 transition"
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* VERTICALS SHOWCASE */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">Built for Every Community</h2>
          
          <div className="space-y-16">
            {/* Sports Teams */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/30">
                <img
                  src="/images/sports-hero.jpg"
                  alt="Stadium after game, lights dimming, fans still connected by subtle light ribbons."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Teams win moments. But most lose momentum.</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Vonga helps sports teams turn game-day emotion into lasting belonging — connection that lives on long after the final whistle.
                </p>
                <Link
                  href="/sports-teams"
                  className="px-6 py-3 rounded-2xl font-medium bg-[#33BECC] text-[#0a1422] hover:brightness-110 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Schools & Universities */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">Your students wear the same colors. Now help them feel part of the same community.</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Vonga helps universities turn moments of pride into lasting connection — linking students, alumni, and fans through everyday experiences that build lifelong belonging.
                </p>
                <Link
                  href="/schools"
                  className="px-6 py-3 rounded-2xl font-medium bg-[#33BECC] text-[#0a1422] hover:brightness-110 transition"
                >
                  Learn More
                </Link>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/30">
                <img
                  src="/images/schools-hero.jpg"
                  alt="Diverse students on the quad in school colors, subtly connected by light ribbons."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>

            {/* Creators & Communities */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/30">
                <img
                  src="/images/creators-hero.jpg"
                  alt="Creator on stage or in studio, followers subtly connected by soft aqua light trails."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">You build moments that go viral. We help them last.</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Vonga helps creators and communities turn short bursts of excitement into long-term connection — making belonging something your people can see, feel, and carry every day.
                </p>
                <Link
                  href="/creators"
                  className="px-6 py-3 rounded-2xl font-medium bg-[#33BECC] text-[#0a1422] hover:brightness-110 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Studios & Clubs */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">Connection Beyond the Club</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Membership isn't just access — it's identity that endures. Vonga connects every class, every round, and every interaction into one living sense of belonging.
                </p>
                <Link
                  href="/studios-clubs"
                  className="px-6 py-3 rounded-2xl font-medium bg-[#33BECC] text-[#0a1422] hover:brightness-110 transition"
                >
                  Learn More
                </Link>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] bg-black/30">
                <img
                  src="/images/studiosclubs-hero.jpg"
                  alt="Members connected through motion and apparel in a fitness studio setting."
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">From on-body moments to everyday connection.</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            We blend physical and digital touchpoints so each item becomes a living link — 
            simple to use, easy to measure, and designed to feel human.
          </p>
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] bg-black/30 max-w-3xl mx-auto">
            <img
              src="/images/how-band.jpg"
              alt="Subtle aqua and coral light strands suggesting on-body connection."
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="text-center py-16 px-6 border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Create Belonging That Lasts?</h2>
        <Link
          href="/connect"
          className="px-6 py-3 rounded-2xl font-medium bg-[#33BECC] text-[#0a1422] hover:brightness-110 transition"
        >
          Let's Connect
        </Link>
      </section>
    </main>
  );
}

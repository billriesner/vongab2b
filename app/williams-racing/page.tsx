'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, MapPin, Users, BarChart3, Shield, Droplets, Lock } from 'lucide-react';

export default function WilliamsRacingPage() {
  const demoSectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToDemo = () => {
    demoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0F172A] text-white min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
        
        .williams-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .williams-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .williams-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
      `}} />
      
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isVisible ? 'williams-fade-in' : 'opacity-0'}`}>
        {/* Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0F172A] to-[#000000]"></div>
        
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040044]/20 via-transparent to-[#00A0E1]/10"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          {/* Image Placeholder for Williams Racing Hoodie */}
          <div className="mb-12 flex justify-center williams-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden border border-[#00A0E1]/20 bg-gradient-to-br from-[#040044]/30 to-[#00A0E1]/10 backdrop-blur-sm shadow-2xl shadow-[#00A0E1]/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#00A0E1] to-[#33BECC] opacity-30 blur-2xl williams-pulse-slow"></div>
                  <p className="text-white/50 text-sm font-medium">Williams Racing Hoodie<br />with NFC Tag</p>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-[#00A0E1] to-[#33BECC] bg-clip-text text-transparent williams-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Live Connected.
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 text-white/90 williams-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
            Williams Racing Everywhere.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-4xl mx-auto williams-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
            Turn your team apparel into an always-on fan touchpoint.<br />
            From the Paddock to the rest of the world.
          </p>
          <div className="williams-fade-in-up" style={{ animationDelay: '1s', opacity: 0 }}>
            <Button 
              onClick={scrollToDemo}
              size="lg" 
              className="bg-gradient-to-r from-[#00A0E1] to-[#33BECC] hover:from-[#00A0E1]/90 hover:to-[#33BECC]/90 text-white border-0 px-8 py-6 text-lg font-semibold shadow-lg shadow-[#00A0E1]/20 hover:shadow-xl hover:shadow-[#00A0E1]/30 transition-all duration-300"
            >
              See the Experience
            </Button>
          </div>
        </div>
      </section>

      {/* The Gap - Split Screen */}
      <section className="relative py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Inside the Track */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#040044]/20 to-[#0F172A]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-24 h-24 mx-auto mb-4 text-[#00A0E1] opacity-30" />
                  <p className="text-white/40 text-sm">Image Placeholder</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-lg font-semibold text-white">Inside the Track: ~100k Fans.</p>
              </div>
            </div>

            {/* Right Column - Outside the Track */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#00A0E1]/10 to-[#040044]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-24 h-24 mx-auto mb-4 text-[#33BECC] opacity-30" />
                  <p className="text-white/40 text-sm">Map Graphic Placeholder</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-lg font-semibold text-white">Outside the Track: Millions of Fans.</p>
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white/90">
              You have a massive global community. But once the race ends or the app closes, the connection breaks. 
              <span className="text-[#33BECC]"> Vonga turns the jersey itself into the bridge.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Solution - Interactive Demo */}
      <section ref={demoSectionRef} className="relative py-24 md:py-32 border-t border-white/10 bg-gradient-to-b from-[#0F172A] to-[#000000]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-[#00A0E1] bg-clip-text text-transparent">
              The Garment is the Interface.
            </h2>
            <p className="text-xl md:text-2xl text-white/80">
              No apps to download. No logins. Just a tap.
            </p>
          </div>

          {/* Visual: Phone Tapping Sleeve */}
          <div className="mb-20 flex justify-center">
            <div className="relative">
              {/* Phone */}
              <div className="relative w-64 h-96 rounded-[3rem] border-4 border-white/20 bg-gradient-to-br from-[#040044] to-[#0F172A] p-4 shadow-2xl">
                <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-[#00A0E1]/20 to-[#33BECC]/20 flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 text-[#33BECC]" />
                    <p className="text-white/60 text-sm">Mobile Experience</p>
                  </div>
                </div>
              </div>
              
              {/* NFC Tag Glow Effect */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#00A0E1] to-[#33BECC] opacity-60 blur-xl williams-pulse-slow"></div>
              
              {/* Tap Indicator */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00A0E1] to-[#33BECC] flex items-center justify-center shadow-lg shadow-[#00A0E1]/50 williams-pulse-slow">
                  <span className="text-2xl">👆</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps - 3 Column Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wear',
                description: 'Premium Williams apparel designed for race day and travel days.',
                icon: '👕',
              },
              {
                title: 'Tap',
                description: 'Embedded NFC triggers a tailored mobile experience instantly.',
                icon: '📱',
                highlight: true,
              },
              {
                title: 'Unlock',
                description: 'Fans unlock telemetry data, pit lane videos, and partner rewards.',
                icon: '🔓',
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  index === 1
                    ? 'border-[#00A0E1]/50 bg-white/[0.08] backdrop-blur-xl shadow-2xl shadow-[#00A0E1]/20 hover:shadow-[#00A0E1]/30 hover:border-[#00A0E1]/70'
                    : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                }`}
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
                {index === 1 && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00A0E1]/5 to-[#33BECC]/5 pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Platform - Club Vonga */}
      <section className="relative py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-[#00A0E1] bg-clip-text text-transparent">
              Control the Engagement.
            </h2>
            <p className="text-xl md:text-2xl text-white/80 text-center mb-12 leading-relaxed">
              Track behavior, not just impressions. Segment your fanbase by engagement level and update rewards in real-time.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Campaign Builder', icon: BarChart3 },
                { title: 'Sponsor ROI Tracking', icon: Users },
                { title: 'Fan Geography', icon: MapPin },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
                  >
                    <Icon className="w-8 h-8 mb-4 text-[#33BECC]" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The Dream Use Case - F1 Specific */}
      <section className="relative py-24 md:py-32 border-t border-white/10 bg-gradient-to-b from-[#000000] to-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-[#00A0E1] to-[#33BECC] bg-clip-text text-transparent">
              The Paddock in Their Pocket.
            </h2>
            <div className="relative rounded-2xl p-8 md:p-12 border border-[#00A0E1]/20 bg-gradient-to-br from-[#040044]/20 to-[#00A0E1]/10 backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Imagine a fan in Austin tapping their Williams hoodie during the Silverstone GP. 
                They instantly unlock a live garage cam and a 20% offer from your tire partner. 
                <span className="text-[#33BECC] font-semibold"> You get the data; they get the magic.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Assurance */}
      <section className="relative py-24 md:py-32 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-[#00A0E1] bg-clip-text text-transparent">
            Built for Real Life.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Wash-Tested',
                subtitle: 'Laundry safe',
                icon: Droplets,
                color: '#00A0E1',
              },
              {
                title: 'Secure',
                subtitle: 'Non-clonable',
                icon: Shield,
                color: '#33BECC',
              },
              {
                title: 'Permanent',
                subtitle: 'No QR codes',
                icon: Lock,
                color: '#00A0E1',
              },
            ].map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="text-center rounded-2xl p-8 border border-white/10 bg-white/[0.02]"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00A0E1]/20 to-[#33BECC]/20 flex items-center justify-center">
                    <Icon className="w-10 h-10" style={{ color: point.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{point.title}</h3>
                  <p className="text-white/70">{point.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative py-24 md:py-32 border-t border-white/10 bg-gradient-to-b from-[#0F172A] to-[#000000]">
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <p className="text-2xl md:text-3xl font-medium mb-10 text-white/90 leading-relaxed">
            Ready to pilot? Let us know where we can send a sample so you can experience this for yourself.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#00A0E1] to-[#33BECC] hover:from-[#00A0E1]/90 hover:to-[#33BECC]/90 text-white border-0 px-10 py-6 text-lg font-semibold shadow-lg shadow-[#00A0E1]/20"
            asChild
          >
            <a href="/williams-racing/request-sample">Request a Sample</a>
          </Button>
        </div>
      </section>
    </div>
  );
}


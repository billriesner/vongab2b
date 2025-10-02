import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Shirt, Lock, Zap, CheckCircle2, Shield, Code, BarChart3, Sparkles, Gift, Trophy } from "lucide-react";
import Link from "next/link";

export default function TechnologyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/technology-hero.svg)' }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-7xl mx-auto px-4 py-5xl relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-xl">
              <span className="text-navy">Technology That Connects</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC' }}>
              Vonga apparel is tap-ready. No apps, no friction — just connection.
            </p>
          </div>
        </div>
      </section>

      {/* The Digital Twin Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Shirt className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>The Digital Twin</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Every Garment Has a Story</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '48px' }}>
            When you buy Vonga gear, you get more than fabric — you get a digital twin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl max-w-4xl mx-auto" style={{ marginBottom: '48px' }}>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">Proof of ownership (verifiable & portable)</p>
            </div>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">A unique, scannable identity for your item</p>
            </div>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">Access to exclusive content, rewards, and experiences</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-navy hover:bg-navy/90 text-white shadow-lg"
            asChild
          >
            <Link href="#video">See It in Action</Link>
          </Button>
        </div>
      </Section>

      {/* NFC Tap Experience Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <Smartphone className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>NFC Tap Experience</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Tap. Connect. Unlock.</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '64px' }}>
            Your phone already knows how to do this — just hold it near the garment's tag or patch.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-md shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-black mb-sm">Earn loyalty points</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-md shadow-lg">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-black mb-sm">Unlock event access</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-md shadow-lg">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-black mb-sm">Get member-only content</h4>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-md shadow-lg">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-bold text-black mb-sm">Claim rewards</h4>
            </div>
          </div>
        </div>
      </Section>

      {/* Visual: Wear → Tap → Unlock */}
      <section className="py-4xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <Shirt className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Wear</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Tap</CardTitle>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <Zap className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Unlock</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Rewards & Gamification Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>Rewards & Gamification</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Engagement Made Fun</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '64px' }}>
            Vonga's tech makes loyalty programs feel like a game:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl max-w-4xl mx-auto">
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">Level up by showing up</p>
            </div>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">Get badges and rewards as you hit milestones</p>
            </div>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">Unlock perks that actually matter — not just random coupons</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Privacy & Security Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <Lock className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>Privacy & Security</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Your Data. Your Rules.</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '64px' }}>
            We designed Vonga with privacy-first principles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-black text-xl font-bold" style={{ textAlign: 'center', marginBottom: '16px' }}>You Control Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-black">
                  You control what data is shared. Simple opt-in, easy opt-out.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <Smartphone className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-white text-xl font-bold" style={{ textAlign: 'center', marginBottom: '16px' }}>No Hidden Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-white">
                  Only tap when you want. No background data collection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-black text-xl font-bold" style={{ textAlign: 'center', marginBottom: '16px' }}>Secure Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-black">
                  Blockchain-backed verification (no crypto knowledge required).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* For Businesses Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>For Businesses</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Integrate With Your Stack</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '64px' }}>
            Our platform works with your existing tools — CRMs, loyalty systems, and event software.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl max-w-4xl mx-auto" style={{ marginBottom: '48px' }}>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">API access for custom workflows</p>
            </div>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">Real-time engagement analytics</p>
            </div>
            <div className="flex items-start gap-md text-left">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <p className="text-base text-black">Easy onboarding for staff and members</p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-navy hover:bg-navy/90 text-white shadow-lg"
            asChild
          >
            <Link href="/enterprise#demo">Book a Demo</Link>
          </Button>
        </div>
      </Section>

      {/* Video Placeholder */}
      <section id="video" className="py-5xl" style={{ backgroundColor: '#000000' }}>
        <div className="w-full">
          <div className="relative bg-navy overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-md shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-accent text-xl font-semibold">Video: Digital Twin Explainer</p>
                <p className="text-white/70 text-sm mt-sm">See how your Vonga product connects to experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl">
            {/* Consumer CTA */}
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Shirt className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>For You</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Get the gear
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base text-black" style={{ marginBottom: '32px' }}>
                  Shop connected apparel that unlocks experiences with every tap.
                </p>
                <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md" asChild>
                  <Link href="/shop">Shop Vonga</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business CTA */}
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <Code className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>For Business</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Launch your program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-base text-white" style={{ marginBottom: '32px' }}>
                  Start Club Vonga or book a demo for enterprise activations.
                </p>
                <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md" asChild>
                  <Link href="/enterprise#demo">Book a Demo</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

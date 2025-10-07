import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Shirt, Lock, Zap, CheckCircle2, Shield, Code, BarChart3, Sparkles, Gift, Trophy, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function TechnologyPage() {
  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Technology' }
            ]}
            light={false}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-tech.svg)' }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-7xl mx-auto px-4 py-5xl relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-xl">
              <span className="text-navy">Technology That Connects</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-black" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
              Vonga apparel is tap-ready. No apps, no friction. Just connection.
            </p>
          </div>
        </div>
      </section>

      {/* The Digital Twin Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Shirt className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>The Digital Twin</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Every Garment Has a Story</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '64px' }}>
            When you buy Vonga gear, you get more than fabric. You get a digital twin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Proof of Ownership</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Verifiable & portable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                  Every Vonga product is authenticated on-chain. You can prove it's yours, resell with confidence, or transfer ownership.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <Shirt className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Unique Identity</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Scannable for your item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                  Your garment has a unique digital ID. Tap it with any phone to see its story, verify authenticity, and unlock experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Exclusive Access</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Content, rewards & experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                  Unlock behind-the-scenes content, early product drops, event invites, and rewards designed for people who own Vonga.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </Section>

      {/* Wear Device Image */}
      <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="w-full">
          <img 
            src="/images/how-it-works/wear-device.jpg" 
            alt="Wearing Vonga connected apparel" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Digital Twin Explainer Video */}
      <section id="video" className="py-5xl" style={{ backgroundColor: '#000000' }}>
        <div className="w-full max-w-7xl mx-auto px-4">
          <video 
            className="w-full h-auto rounded-lg"
            controls
            playsInline
          >
            <source src="/digital-twin.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* NFC Tap Experience Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <Smartphone className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>NFC Tap Experience</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Wear. Tap. Connect.</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '64px' }}>
            Your phone already knows how to do this. Just hold it near the garment's tag or patch.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-lg md:gap-xl">
            <div className="flex items-center p-xl bg-white rounded-lg border-2 border-muted hover:shadow-xl transition-shadow" style={{ gap: '24px' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl font-bold text-black text-left">Earn loyalty points</p>
            </div>

            <div className="flex items-center p-xl bg-white rounded-lg border-2 border-muted hover:shadow-xl transition-shadow" style={{ gap: '24px' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: '#303E55' }}>
                <Zap className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl font-bold text-black text-left">Unlock event access</p>
            </div>

            <div className="flex items-center p-xl bg-white rounded-lg border-2 border-muted hover:shadow-xl transition-shadow" style={{ gap: '24px' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Gift className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl font-bold text-black text-left">Get member-only content</p>
            </div>

            <div className="flex items-center p-xl bg-white rounded-lg border-2 border-muted hover:shadow-xl transition-shadow" style={{ gap: '24px' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ backgroundColor: '#303E55' }}>
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl font-bold text-black text-left">Claim rewards</p>
            </div>
          </div>
        </div>
      </Section>

      {/* NFC Technology in Action */}
      <section className="w-full" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="w-full">
          <img 
            src="/images/how-it-works/tap-interaction.jpg" 
            alt="NFC Technology in Action" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Unlock Experience Image */}
      <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="w-full">
          <img 
            src="/images/how-it-works/unlock-experience.jpg" 
            alt="Unlocking experiences with Vonga" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Rewards & Gamification Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-6xl mx-auto text-center">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <TrendingUp className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Level Up</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  By showing up
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                  Every visit, every tap, every interaction earns you points. Show up and watch your status grow.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Trophy className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Get Badges</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Rewards as you hit milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                  Hit milestones and unlock digital badges. Collect achievements that show off your loyalty.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <Gift className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Unlock Perks</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  That actually matter
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                  Real rewards like event access, exclusive drops, and VIP experiences. Not just coupons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Product Showcase Image */}
      <section className="w-full" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="w-full">
          <img 
            src="/images/products/vonga-sport-product.jpg" 
            alt="Vonga connected apparel showcase" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Visual Divider */}
      <section className="py-4xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="h-0.5 w-full" style={{ backgroundColor: '#33BECC', opacity: 0.3 }}></div>
        </div>
      </section>

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
          <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: '#33BECC', marginBottom: '32px' }}>Your Data. Your Rules.</h3>
          
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

      {/* Privacy & Security Features */}
      <section className="w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="w-full">
          <img 
            src="/images/supporting/device-hero-mockup.png" 
            alt="Privacy & Security Features" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* For Businesses Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Code className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>For Businesses</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Integrate With Your Stack</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-3xl mx-auto" style={{ marginBottom: '64px' }}>
            Our platform works with your existing tools: CRMs, loyalty systems, and event software.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Code className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>API Access</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Custom workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                  Build custom integrations with our API. Connect Vonga to your existing systems and automate workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <BarChart3 className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Analytics</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  Real-time engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                  Track taps, engagement rates, and customer behavior. Get insights that help you optimize your customer experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Easy Onboarding</CardTitle>
                <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                  For staff and members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                  Simple setup for your team and frictionless experience for your members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Hero Device Showcase Image */}
      <section className="w-full" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="w-full">
          <img 
            src="/images/hero/hero-device-showcase.jpg" 
            alt="Vonga technology device showcase" 
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}

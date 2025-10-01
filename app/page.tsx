import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Users, Building2, Shirt, Smartphone, Gift, TrendingUp, Heart, Lock, Leaf, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-placeholder.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-7xl mx-auto px-4 py-5xl md:py-[120px] relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2xl">
              <span className="text-navy">Wear it. Tap in.</span>
              <br />
              <span style={{ color: '#33BECC' }}>Live Connected.</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold mb-3xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#000000', textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
              On-body tech that links people and brands. Turn everyday wear into access and rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center items-center">
              <Button 
                size="lg" 
                variant="primary"
                className="min-w-[160px] bg-accent hover:bg-accent/90 text-black shadow-lg"
                asChild
              >
                <a href="/shop">Shop Vonga</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="min-w-[160px] border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white shadow-lg"
                asChild
              >
                <a href="/enterprise#demo">Book a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Paths Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Three Ways to Live Connected"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          {/* Shop Vonga Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Shop Vonga</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Sustainable athleisure with NFC built-in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Premium connected apparel for everyday wear. Each piece features embedded NFC technology that unlocks digital experiences.
              </p>
              <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md" asChild>
                <a href="/shop">Shop the Collection</a>
              </Button>
            </CardContent>
          </Card>

          {/* Club Vonga Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Users className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Club Vonga</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Rethink your community's apparel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                On-body tech for gyms, golf courses or any community. We help you launch rewards and member perks with ease.
              </p>
              <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md" asChild>
                <a href="/club">See Starter Kits</a>
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Enterprise</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Own the Season. Own the Moment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Season-scale activations for teams and universities. Create custom apparel and digital rewards.
              </p>
              <Button className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md" asChild>
                <a href="/enterprise">Request a Proposal</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Image Placeholder Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="relative w-full" style={{ paddingBottom: '50%' }}>
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 text-gray-400 mx-auto mb-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg font-semibold">Hero Image Placeholder</p>
              <p className="text-gray-400 text-sm mt-sm">Showcase product or lifestyle imagery</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="How It Works"
        description="Seamless connection from apparel to experience"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          {/* Wear Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Shirt className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Wear</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                NFC embedded inside every piece
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Every Vonga product features invisible NFC technology woven into the fabric. Lightweight, durable, and machine washable.
              </p>
            </CardContent>
          </Card>

          {/* Tap Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Tap</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Connect with your phone. No app needed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Simply hold your phone near the Vonga logo. Your phone instantly recognizes the connection without downloads or setup.
              </p>
            </CardContent>
          </Card>

          {/* Unlock Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Gift className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Unlock</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Access rewards and experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Get instant access to exclusive content, rewards, and experiences. From event entry to loyalty points, all in one tap.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Video Placeholder Section */}
      <section className="py-5xl" style={{ backgroundColor: '#000000' }}>
        <div className="w-full">
          <div className="relative bg-navy overflow-hidden" style={{ paddingBottom: '56.25%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-md shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-accent text-xl font-semibold">Video: See Vonga in Action</p>
                <p className="text-white/70 text-sm mt-sm">Watch how our technology works</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Outcomes Section */}
      <Section 
        className="py-4xl"
        style={{ background: '#FFFFFF' }}
        title="Proof & Outcomes"
        description="What partners get (and what customers feel)"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          {/* Engagement Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Engagement</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Higher check-ins and repeat visits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Members tap in more often, creating consistent touchpoints that drive loyalty and community connection.
              </p>
            </CardContent>
          </Card>

          {/* Loyalty Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Heart className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Loyalty</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Real rewards, not just points in a void
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Tangible rewards that customers actually want, delivered instantly through their connected apparel.
              </p>
            </CardContent>
          </Card>

          {/* Data Card */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Lock className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Data (ethically)</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Opt-in, event-level insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Privacy-first analytics that respect your customers while giving you actionable insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Visual Divider */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div style={{ height: '2px', backgroundColor: '#33BECC', opacity: 0.3 }}></div>
        </div>
      </section>

      {/* Split Lead Capture Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Stay Connected"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl max-w-5xl mx-auto">
          {/* Consumers */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <ShoppingBag className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>For You</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Get drops and early access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                  style={{ marginBottom: '24px' }}
                  required
                />
                <Button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Businesses */}
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-accent" style={{ backgroundColor: '#33BECC' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>For Business</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm text-navy" style={{ textAlign: 'center' }}>
                Book a discovery call
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white placeholder:text-text/60"
                  style={{ marginBottom: '24px' }}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white placeholder:text-text/60"
                  style={{ marginBottom: '24px' }}
                  required
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white placeholder:text-text/60"
                  style={{ marginBottom: '24px' }}
                  required
                />
                <Button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md">
                  Book a Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}


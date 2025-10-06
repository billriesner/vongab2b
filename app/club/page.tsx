import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Gift, Sparkles, Shirt, Target, Zap, CheckCircle2, BarChart3, Heart, Clock, Bell, Trophy, MapPin } from "lucide-react";
import Link from "next/link";

export default function ClubPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#33BECC' }}
        title="Club Vonga"
        description="On-body tech for gyms, golf courses, and communities"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-navy mb-3xl font-semibold">
            We help you launch rewards and member perks with ease. Turn your community's apparel into access, recognition, and moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center items-center">
            <Button 
              size="lg" 
              className="min-w-[160px] bg-navy hover:bg-navy/90 text-white shadow-lg"
              asChild
            >
              <Link href="/club/get-started">Get Started</Link>
            </Button>
            <Button 
              size="lg" 
              className="min-w-[160px] bg-white hover:bg-gray-100 text-navy shadow-lg"
              asChild
            >
              <Link href="/enterprise#demo">Book a Call</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Club Vonga - What Your Members Get */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Why Club Vonga?"
        description="What your members get"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Smartphone className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Tap to Check In</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Seamless attendance tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Members tap their apparel to check in. No apps, no fumbling with phones. Just tap and go.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Gift className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Earn Rewards</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Real perks, not just points
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Unlock discounts, free classes, exclusive events, and more. You set the rewards that make sense for your community.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Sparkles className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Feel Recognized</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Build stronger connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Every tap shows your members they're seen and valued. Simple interactions that build lasting community loyalty.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What's Possible */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="What's Possible with Vonga Tech"
        description="Go beyond basic check-ins"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Bell className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Push Custom Content</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Deliver targeted media on demand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Load images or videos for people to watch when they tap their clothes. Notify them through a simple push notification.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Trophy className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Raffles & Prizes</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Gamify engagement with instant wins
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Win prizes randomly when tapping. You set the prizes and how frequently you want people to win. Include common prizes and more rare "chase" items.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Geotargeted Experiences</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Location-based activation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Transform any location (down to ~50 ft radius) into a scavenger hunt location or check point. Simply tap the garment when at the location to earn points, collect badges, watch targeted content, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="How It Works"
        description="Three simple steps to connected community"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Shirt className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>1. Get Your Gear</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Custom branded apparel with NFC
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Choose from our starter kits. We design and produce branded apparel with invisible NFC technology embedded inside.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Target className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>2. Set Rewards</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Build your rewards program
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Use our dashboard to create rewards that matter to your community. Free classes, exclusive events, discounts, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Zap className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>3. Launch</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Go live in weeks, not months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                We handle the technology setup. You focus on your community. Launch your connected experience fast.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Starter Kits */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="Starter Kits"
        description="Choose the package that fits your community"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl max-w-5xl mx-auto">
          {/* Core Kit */}
          <Card className="hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader>
              <div className="flex items-center justify-between mb-md">
                <CardTitle className="text-navy text-3xl font-bold">Core Kit</CardTitle>
                <Badge className="bg-accent text-navy font-semibold">Most Popular</Badge>
              </div>
              <CardDescription className="text-lg font-semibold" style={{ color: '#33BECC' }}>
                Perfect for gyms and local clubs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-xl">
                <p className="text-4xl font-bold text-navy mb-sm">$15-45</p>
                <p className="text-sm text-text/70">per unit (volume pricing)</p>
              </div>
              <ul className="space-y-md mb-xl">
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">100+ units minimum</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">Choice of t-shirts, tanks, hoodies, or hats</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">Custom branded design with your logo</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">NFC technology embedded</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">Basic rewards dashboard</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-navy">Email support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md"
                asChild
              >
                <Link href="/club/get-started">Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Pro Kit */}
          <Card className="hover:shadow-xl transition-shadow border-2 border-accent" style={{ backgroundColor: '#303E55' }}>
            <CardHeader>
              <div className="flex items-center justify-between mb-md">
                <CardTitle className="text-accent text-3xl font-bold">Pro Kit</CardTitle>
                <Badge style={{ backgroundColor: '#33BECC', color: '#303E55' }} className="font-semibold">Premium</Badge>
              </div>
              <CardDescription className="text-lg font-semibold" style={{ color: '#33BECC' }}>
                For golf courses and premium clubs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-xl">
                <p className="text-4xl font-bold text-accent mb-sm">$35-50</p>
                <p className="text-sm text-white/70">per unit (volume pricing)</p>
              </div>
              <ul className="space-y-md mb-xl">
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white">500+ units minimum</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white">Premium fabrics and styles</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white">Custom design consultation</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white">NFC technology embedded</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white">Advanced rewards dashboard + analytics</span>
                </li>
                <li className="flex items-start gap-sm">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white">Dedicated account support</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-navy font-semibold shadow-md"
                asChild
              >
                <Link href="/club/get-started">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-3xl">
          <p className="text-sm text-text/70 mb-md">Need 1000+ units or custom solutions?</p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
            asChild
          >
            <Link href="/enterprise#demo">Book Enterprise Demo</Link>
          </Button>
        </div>
      </Section>

      {/* Proof & Outcomes */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Proven Results"
        description="What partners see and members feel"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <BarChart3 className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Higher Engagement</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                More check-ins, more visits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Members tap in more often, creating consistent touchpoints that drive loyalty and repeat visits to your facility.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Heart className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Stronger Loyalty</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Real rewards, real connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Tangible rewards that members actually want, delivered instantly through their connected apparel. No more forgotten cards.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Clock className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Faster Setup</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Launch in weeks, not months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                We handle the technology and production. You focus on your community. Get up and running fast with minimal hassle.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#33BECC' }}
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-xl">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-navy mb-3xl font-semibold">
            Launch your community's connected experience in weeks. Start with our simple onboarding flow.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center items-center">
            <Button 
              size="lg" 
              className="min-w-[200px] bg-navy hover:bg-navy/90 text-white shadow-lg"
              asChild
            >
              <Link href="/club/get-started">Build Your Kit</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="min-w-[200px] border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white shadow-lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

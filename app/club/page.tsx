import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Gift, Sparkles, Shirt, Target, Zap, CheckCircle2, BarChart3, Heart, Clock, Bell, Trophy, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ClubPage() {
  return (
    <div>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/pillars/club-community.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-7xl mx-auto px-4 py-5xl md:py-[120px] relative z-10 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2xl">
              <span className="text-navy">Club Vonga</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-xl" style={{ color: '#33BECC', textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
              On-body tech for gyms, golf courses, and communities
            </p>
            <p className="text-lg md:text-xl font-semibold mb-3xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#000000', textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
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
                variant="outline"
                className="min-w-[160px] border-2 border-navy bg-white text-navy hover:bg-navy hover:text-white shadow-lg"
                asChild
              >
                <Link href="/enterprise#talk">Book a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Club Vonga - 2 Column Layout */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-3xl">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Sparkles className="w-10 h-10 text-navy" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-xl">Why Club Vonga?</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-3xl" style={{ color: '#33BECC' }}>What your members get</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl max-w-5xl mx-auto">
            <div className="flex items-start gap-lg">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#33BECC' }}>
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-sm">Tap to Check In</h3>
                <p className="text-base font-semibold mb-md" style={{ color: '#33BECC' }}>
                  Seamless attendance tracking
                </p>
                <p className="text-sm text-text/70">
                  Members tap their apparel to check in. No apps, no fumbling with phones. Just tap and go.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-lg">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#33BECC' }}>
                <Gift className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-sm">Earn Rewards</h3>
                <p className="text-base font-semibold mb-md" style={{ color: '#33BECC' }}>
                  Real perks, not just points
                </p>
                <p className="text-sm text-text/70">
                  Unlock discounts, free classes, exclusive events, and more. You set the rewards that make sense for your community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-lg">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#303E55' }}>
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-sm">Feel Recognized</h3>
                <p className="text-base font-semibold mb-md" style={{ color: '#33BECC' }}>
                  Build stronger connections
                </p>
                <p className="text-sm text-text/70">
                  Every tap shows your members they're seen and valued. Simple interactions that build lasting community loyalty.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-lg">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#303E55' }}>
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy mb-sm">No Forgotten Cards</h3>
                <p className="text-base font-semibold mb-md" style={{ color: '#33BECC' }}>
                  Always wearing your membership
                </p>
                <p className="text-sm text-text/70">
                  Members never forget their rewards card again. Their connected apparel is always with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Image Placeholder - Members Using Tech */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="w-full">
          <div className="relative bg-gray-200 overflow-hidden" style={{ paddingBottom: '40%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-md shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <p className="text-xl font-semibold text-navy">Image: Members checking in with tap</p>
                <p className="text-sm text-text/70 mt-sm">Placeholder for lifestyle/action photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Possible - Full Width Content Block */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-3xl">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <Zap className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-xl">What's Possible with Vonga Tech</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-3xl" style={{ color: '#33BECC' }}>Go beyond basic check-ins</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl">
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
        </div>
      </Section>

      {/* How It Works - Horizontal Steps */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-xl">How It Works</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-4xl" style={{ color: '#33BECC' }}>Three simple steps to connected community</h3>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-accent/30" style={{ zIndex: 0 }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl relative" style={{ zIndex: 1 }}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-lg mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Shirt className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-lg p-lg border-2 border-muted">
                  <h3 className="text-2xl font-bold text-navy mb-sm">1. Get Your Gear</h3>
                  <p className="text-sm font-semibold mb-md" style={{ color: '#33BECC' }}>
                    Custom branded apparel with NFC
                  </p>
                  <p className="text-sm text-text/70">
                    Choose from our starter kits. We design and produce branded apparel with invisible NFC technology embedded inside.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-lg mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
                  <Target className="w-10 h-10 text-accent" />
                </div>
                <div className="bg-white rounded-lg p-lg border-2 border-muted">
                  <h3 className="text-2xl font-bold text-navy mb-sm">2. Set Rewards</h3>
                  <p className="text-sm font-semibold mb-md" style={{ color: '#33BECC' }}>
                    Build your rewards program
                  </p>
                  <p className="text-sm text-text/70">
                    Use our dashboard to create rewards that matter to your community. Free classes, exclusive events, discounts, and more.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-lg mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-lg p-lg border-2 border-muted">
                  <h3 className="text-2xl font-bold text-navy mb-sm">3. Launch</h3>
                  <p className="text-sm font-semibold mb-md" style={{ color: '#33BECC' }}>
                    Go live in weeks, not months
                  </p>
                  <p className="text-sm text-text/70">
                    We handle the technology setup. You focus on your community. Launch your connected experience fast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Image Placeholder - Dashboard Preview */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="w-full">
          <div className="relative bg-navy overflow-hidden" style={{ paddingBottom: '50%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-md shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <BarChart3 className="w-12 h-12 text-navy" />
                </div>
                <p className="text-xl font-semibold text-accent">Image: Rewards Dashboard Preview</p>
                <p className="text-sm text-white/70 mt-sm">Placeholder for dashboard screenshot/mockup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Kits - Side by Side Cards */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-xl">Starter Kits</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-4xl" style={{ color: '#33BECC' }}>Choose the package that fits your community</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl max-w-5xl mx-auto">
            {/* Core Kit */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-md">
                  <CardTitle className="text-navy text-3xl font-bold">Core Kit</CardTitle>
                  <Badge className="bg-accent text-navy font-semibold">Most Popular</Badge>
                </div>
                <CardDescription className="text-lg font-semibold" style={{ color: '#33BECC' }}>
                  For gyms and smaller communities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-xl">
                  <p className="text-4xl font-bold text-navy mb-sm">$15-45*</p>
                  <p className="text-sm text-text/70">estimated per unit (volume pricing)</p>
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
                  <p className="text-4xl font-bold text-accent mb-sm">$25-50*</p>
                  <p className="text-sm text-white/70">estimated per unit (volume pricing)</p>
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

          <div className="text-center mt-lg">
            <p className="text-sm text-text/70 italic">*Final price available at time of order</p>
          </div>

          {/* Enterprise Call-Out */}
          <Card className="border-2 border-navy shadow-xl mt-5xl max-w-3xl mx-auto" style={{ backgroundColor: '#303E55' }}>
            <CardContent className="p-xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-md">
                Need 1000+ Units?
              </h3>
              <p className="text-base text-white mb-lg">
                Schedule a call to explore custom pricing and enterprise solutions tailored to your needs.
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-navy font-semibold shadow-md"
                asChild
              >
                <Link href="/enterprise#talk">Let's Talk</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Image Placeholder - Product Showcase */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="w-full">
          <div className="relative bg-gray-200 overflow-hidden" style={{ paddingBottom: '40%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-md shadow-lg" style={{ backgroundColor: '#303E55' }}>
                  <Shirt className="w-12 h-12 text-accent" />
                </div>
                <p className="text-xl font-semibold text-navy">Image: Branded apparel showcase</p>
                <p className="text-sm text-text/70 mt-sm">Placeholder for product/lifestyle photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results - List Format */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-3xl">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <BarChart3 className="w-10 h-10 text-navy" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-xl">Proven Results</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4xl" style={{ color: '#33BECC' }}>What partners see and members feel</h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl">
              <div className="bg-white rounded-lg p-xl border-2 border-muted shadow-lg">
                <div className="flex items-start gap-lg">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#33BECC' }}>
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-sm">Higher Engagement</h3>
                    <p className="text-sm font-semibold mb-md" style={{ color: '#33BECC' }}>
                      More check-ins, more visits
                    </p>
                    <p className="text-sm text-text/70">
                      Members tap in more often, creating consistent touchpoints that drive loyalty and repeat visits to your facility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-xl border-2 border-muted shadow-lg">
                <div className="flex items-start gap-lg">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#303E55' }}>
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-sm">Stronger Loyalty</h3>
                    <p className="text-sm font-semibold mb-md" style={{ color: '#33BECC' }}>
                      Real rewards, real connections
                    </p>
                    <p className="text-sm text-text/70">
                      Tangible rewards that members actually want, delivered instantly through their connected apparel. No more forgotten cards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-xl border-2 border-muted shadow-lg">
                <div className="flex items-start gap-lg">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#33BECC' }}>
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-sm">Faster Setup</h3>
                    <p className="text-sm font-semibold mb-md" style={{ color: '#33BECC' }}>
                      Launch in weeks, not months
                    </p>
                    <p className="text-sm text-text/70">
                      We handle the technology and production. You focus on your community. Get up and running fast with minimal hassle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-xl border-2 border-muted shadow-lg">
                <div className="flex items-start gap-lg">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#303E55' }}>
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-sm">Easy Management</h3>
                    <p className="text-sm font-semibold mb-md" style={{ color: '#33BECC' }}>
                      Simple dashboard, powerful features
                    </p>
                    <p className="text-sm text-text/70">
                      Track engagement, manage rewards, and see what's working with our intuitive platform. No technical expertise required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Gift, TrendingUp, Smartphone, CheckCircle2, Sparkles } from "lucide-react";
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

      {/* Benefits Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="What Your Members Get"
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

      {/* What You Get Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="What You Get as a Partner"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-3xl">
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">Custom Apparel Design</h3>
                <p className="text-sm text-text/70">We design and produce your branded apparel with NFC built in</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">Rewards Dashboard</h3>
                <p className="text-sm text-text/70">Easy-to-use platform to manage rewards, track engagement, and see what's working</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">Fast Setup</h3>
                <p className="text-sm text-text/70">Launch in weeks, not months. We handle the technology so you can focus on your community</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">Ongoing Support</h3>
                <p className="text-sm text-text/70">Dedicated account manager and technical support whenever you need it</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-navy hover:bg-navy/90 text-white shadow-lg"
              asChild
            >
              <Link href="/club/get-started">See Starter Kits</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

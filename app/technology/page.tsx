import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Shirt, Lock, Zap, Wifi, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function TechnologyPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="The Technology"
        description="On-body NFC that just works"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-navy mb-3xl">
            No apps to download. No batteries to charge. Just tap and connect. Our embedded NFC technology turns apparel into an instant digital gateway.
          </p>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="How NFC Works"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Shirt className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Embedded</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Invisible. Durable. Always on
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                NFC chips are woven directly into the fabric. They're waterproof, machine washable, and last the lifetime of the garment.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Wifi className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Wireless</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                No power needed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                NFC uses magnetic induction from your phone. No batteries, no charging, no maintenance. It simply works.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Zap className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Instant</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                One tap connection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Tap your phone to the logo and instantly connect. The experience loads in under a second on any modern smartphone.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Platform Features */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Platform Features"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-3xl">
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">Digital Twin</h3>
                <p className="text-sm text-text/70">Each item gets a unique digital identity. Prove authenticity and ownership.</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">Rewards Engine</h3>
                <p className="text-sm text-text/70">Flexible system to create any reward structure you can imagine.</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">Analytics Dashboard</h3>
                <p className="text-sm text-text/70">Real-time insights into engagement, check-ins, and reward redemptions.</p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-navy mb-sm">API Access</h3>
                <p className="text-sm text-text/70">Integrate with your existing systems and workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Privacy Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="Privacy First"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center mx-auto mb-xl shadow-lg">
            <Lock className="w-12 h-12 text-accent" />
          </div>
          <p className="text-lg text-navy mb-lg">
            Your customers control their data. We only collect what's needed, and users can opt out anytime. Privacy is built into every tap.
          </p>
          <div className="flex flex-col sm:flex-row gap-md justify-center items-center mt-3xl">
            <Button 
              size="lg" 
              className="min-w-[160px] bg-navy hover:bg-navy/90 text-white shadow-lg"
              asChild
            >
              <Link href="/legal/privacy">Privacy Policy</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

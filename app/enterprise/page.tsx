import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Users, Trophy, BarChart3, Zap, Shield } from "lucide-react";

export default function EnterprisePage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#303E55' }}
        title="Enterprise Solutions"
        description="Season-scale activations for teams and universities"
        dark={true}
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-white/90 mb-3xl">
            Create custom apparel and digital rewards that connect your community. From game day to graduation, we help you launch memorable experiences.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white shadow-lg"
            asChild
          >
            <a href="#demo">Schedule a Demo</a>
          </Button>
        </div>
      </Section>

      {/* Features Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="What You Get"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Custom Apparel</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                At scale, with NFC embedded
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Design custom merchandise for your team, university, or event. We handle production and embed NFC technology in every piece.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Zap className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>On-Site Activations</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Turn moments into experiences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Tap-to-win games, exclusive content unlocks, and instant rewards. We bring the technology and strategy for unforgettable activations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Data & Insights</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Understand your audience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                Track engagement, measure ROI, and gain insights into how your community interacts with your brand through privacy-first analytics.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="Perfect For"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3xl max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow border-2 border-muted bg-white">
            <CardHeader>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-md" style={{ backgroundColor: '#33BECC' }}>
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-navy text-xl font-bold">Sports Teams & Universities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy mb-lg">
                Create exclusive fan experiences, track attendance, reward loyalty, and build deeper connections with your community.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-muted bg-white">
            <CardHeader>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-md" style={{ backgroundColor: '#303E55' }}>
                <Users className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-navy text-xl font-bold">Large Scale Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy mb-lg">
                Festivals, conferences, and activations. Give attendees wearable access that unlocks VIP experiences and exclusive content.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Demo Form Section */}
      <Section 
        id="demo"
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Book a Demo"
        description="Let's discuss how Vonga can work for your organization"
      >
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-muted bg-white">
            <CardContent className="p-3xl">
              <form className="space-y-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-sm">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-sm">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-navy mb-sm">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                    placeholder="Your organization"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-sm">Tell us about your project</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                    placeholder="What are you looking to create?"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md" size="lg">
                  Schedule Demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}

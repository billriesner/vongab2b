import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#303E55' }}
        title="About Vonga"
        description="On-body tech that brings people together"
        dark={true}
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-white/90 mb-3xl">
            We believe the future of connection isn't just digital. It's physical, tangible, and wearable. Vonga turns everyday apparel into access, rewards, and moments that matter.
          </p>
        </div>
      </Section>

      {/* Mission & Values Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Our Mission"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Target className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Purpose</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                Why we exist
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                We create technology that strengthens communities. Every tap is a moment of connection, recognition, and belonging.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                <Heart className="w-10 h-10 text-navy" />
              </div>
              <CardTitle className="text-accent text-2xl font-bold" style={{ textAlign: 'center' }}>Values</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                What guides us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white" style={{ marginBottom: '48px' }}>
                Privacy first. Community driven. Quality obsessed. We build products that respect people and bring them together.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-navy text-2xl font-bold" style={{ textAlign: 'center' }}>Innovation</CardTitle>
              <CardDescription className="text-base font-semibold mt-sm" style={{ textAlign: 'center', color: '#33BECC' }}>
                How we work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy" style={{ marginBottom: '48px' }}>
                We push boundaries in wearable tech while keeping the experience simple. Advanced technology that feels effortless.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Story Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="Our Story"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-base text-navy mb-lg leading-relaxed">
            Vonga started with a simple question: what if your clothes could unlock experiences?
          </p>
          <p className="text-base text-navy mb-lg leading-relaxed">
            We saw communities struggling to track members, brands missing opportunities to connect, and rewards programs that felt hollow. So we built something different.
          </p>
          <p className="text-base text-navy leading-relaxed">
            Today, Vonga powers connections for gyms, universities, brands, and communities around the world. Every tap represents a moment of recognition, access, or reward that strengthens the bond between people and the places they love.
          </p>
        </div>
      </Section>

      {/* Team Values Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Join Us"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-lg shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <p className="text-lg text-navy mb-xl">
            We're building the future of connected communities. If you're passionate about technology that brings people together, we'd love to hear from you.
          </p>
          <Button 
            size="lg" 
            className="bg-navy hover:bg-navy/90 text-white shadow-lg"
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}

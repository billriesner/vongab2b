import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, BookOpen } from "lucide-react";

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
      </Section>

      {/* Mission Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-md mb-3xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#33BECC' }}>
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Mission</h2>
          </div>
          
          <div className="text-center space-y-xl">
            <p className="text-xl md:text-2xl font-bold text-navy leading-relaxed">
              To make everyday apparel a gateway to connection, experiences, and rewards.
            </p>
            <p className="text-lg text-navy leading-relaxed">
              We believe what you wear should bring you closer to the communities and brands you love—not just cover your back.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-md mb-3xl">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Vision</h2>
          </div>
          
          <div className="text-center space-y-xl">
            <p className="text-xl md:text-2xl font-bold text-navy leading-relaxed">
              A world where connection is effortless.
            </p>
            <p className="text-lg text-navy leading-relaxed">
              Your clothes unlock entry to events, reward you for showing up, and recognize your loyalty with a single tap. No apps. No friction. Just connection.
            </p>
          </div>
        </div>
      </Section>

      {/* Story Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-md mb-3xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#33BECC' }}>
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Story</h2>
          </div>
          
          <div className="space-y-xl">
            <h3 className="text-2xl font-bold text-center" style={{ color: '#33BECC' }}>From Idea to Movement</h3>
            
            <p className="text-base text-navy leading-relaxed">
              We started Vonga with a simple belief: loyalty should feel exciting, not like homework. Traditional punch cards and apps missed the mark—they were disconnected from real life.
            </p>
            
            <p className="text-base text-navy leading-relaxed">
              We asked: <span className="font-semibold">What if the gear you already wear could be the key?</span>
            </p>
            
            <p className="text-base text-navy leading-relaxed">
              That question turned into a platform that embeds technology into apparel, making it possible to unlock experiences, rewards, and status—just by tapping your phone.
            </p>
            
            <p className="text-base text-navy leading-relaxed">
              Today, Vonga is powering engagement for gyms, communities, and event organizers, turning every garment into a touchpoint that connects people in the real world.
            </p>
            
            <p className="text-lg font-semibold text-navy leading-relaxed text-center mt-2xl">
              And we're just getting started.
            </p>
          </div>
        </div>
      </Section>

      {/* Visual Divider */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div style={{ height: '2px', backgroundColor: '#33BECC', opacity: 0.3 }}></div>
        </div>
      </section>

      {/* Values Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="What Drives Us"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <CardTitle className="text-navy text-xl font-bold" style={{ textAlign: 'center' }}>Privacy First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy">
                Your data belongs to you. We only collect what's needed, and you control everything.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardHeader className="items-center text-center">
              <CardTitle className="text-accent text-xl font-bold" style={{ textAlign: 'center' }}>Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white">
                We build for the people who show up, the communities who stay connected, and the moments that matter.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
            <CardHeader className="items-center text-center">
              <CardTitle className="text-navy text-xl font-bold" style={{ textAlign: 'center' }}>Quality Obsessed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-navy">
                From fabric to technology, we sweat the details. Every product is built to last and perform.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}

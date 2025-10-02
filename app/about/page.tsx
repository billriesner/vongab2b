import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Target, Eye, BookOpen, Lock, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/about-hero.svg)' }}
        ></div>
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="max-w-7xl mx-auto px-4 py-5xl relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-xl">
              <span className="text-navy">About Vonga</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-2xl" style={{ color: '#33BECC' }}>
              On-body tech that brings people together
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Target className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>Mission</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Why We Exist</h3>
          
          <div>
            <p className="text-xl md:text-2xl font-bold text-black leading-relaxed" style={{ marginBottom: '32px' }}>
              To make everyday apparel a gateway to connection, experiences, and rewards.
            </p>
            <p className="text-lg text-black leading-relaxed">
              We believe what you wear should bring you closer to the communities and brands you love, not just cover your back.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <Eye className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>Vision</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>The Future We're Building</h3>
          
          <div>
            <p className="text-xl md:text-2xl font-bold text-black leading-relaxed" style={{ marginBottom: '32px' }}>
              A world where connection is effortless.
            </p>
            <p className="text-lg text-black leading-relaxed">
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>Our Story</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>From Idea to Movement</h3>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-base text-black leading-relaxed" style={{ marginBottom: '32px' }}>
              We started Vonga with a simple belief: loyalty should feel exciting, not like homework. Traditional punch cards and apps were disconnected from real life.
            </p>
            
            <p className="text-base text-black leading-relaxed" style={{ marginBottom: '32px' }}>
              We asked: <span className="font-semibold">What if the clothes you already wear could be the key?</span>
            </p>
            
            <p className="text-base text-black leading-relaxed" style={{ marginBottom: '32px' }}>
              That question turned into a platform that embeds technology into apparel, making it possible to unlock experiences, rewards, and status with a single tap.
            </p>
            
            <p className="text-base text-black leading-relaxed" style={{ marginBottom: '32px' }}>
              Today, Vonga powers engagement for gyms, communities, and event organizers. Every garment becomes a touchpoint that connects people in the real world.
            </p>
            
            <p className="text-lg font-bold text-black leading-relaxed">
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
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '64px' }}>What Drives Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl">
            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-black text-2xl font-bold" style={{ textAlign: 'center', marginBottom: '16px' }}>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-black" style={{ marginBottom: '32px' }}>
                  Your data belongs to you. We only collect what's needed, and you control everything.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-md mx-auto shadow-lg">
                  <Users className="w-10 h-10 text-navy" />
                </div>
                <CardTitle className="text-white text-2xl font-bold" style={{ textAlign: 'center', marginBottom: '16px' }}>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-white" style={{ marginBottom: '32px' }}>
                  We build for the people who show up, the communities who stay connected, and the moments that matter.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-shadow border-2 border-muted" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader className="items-center text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-md mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-black text-2xl font-bold" style={{ textAlign: 'center', marginBottom: '16px' }}>Quality Obsessed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-black" style={{ marginBottom: '32px' }}>
                  From fabric to technology, we sweat the details. Every product is built to last and perform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

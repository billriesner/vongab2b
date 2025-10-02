import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center" style={{
        backgroundImage: 'url(/hero-contact.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 py-5xl relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-xl">
              <span className="text-navy">Contact Us</span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-black" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.9)' }}>
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Mail className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>Get in Touch</h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>Tell us what you're working on</h3>
          
          <p className="text-lg text-black leading-relaxed max-w-2xl mx-auto" style={{ marginBottom: '64px' }}>
            Whether you're a business looking to activate your community or a customer with questions, we're here to help.
          </p>

          <Card className="border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardContent className="p-3xl">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}

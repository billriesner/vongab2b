import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Contact Us"
        description="We'd love to hear from you"
      >
      </Section>

      {/* Contact Form and Info Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-3xl">Get in Touch</h2>
            <div className="space-y-xl">
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#33BECC' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-sm">Email</h3>
                  <p className="text-text/70">hello@vonga.io</p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#303E55' }}>
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-sm">Phone</h3>
                  <p className="text-text/70">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#33BECC' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-sm">Address</h3>
                  <p className="text-text/70">123 Innovation Street<br />Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-muted bg-white shadow-xl">
            <CardContent className="p-3xl">
              <form>
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-sm">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-sm">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-lg py-md border-2 border-muted rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-white"
                    placeholder="Tell us what you're thinking..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}

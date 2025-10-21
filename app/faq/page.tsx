import { Section } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { FAQContactForm } from "@/components/FAQContactForm";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function FAQPage() {
  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: 'Home', href: '/' },
              { label: 'FAQ' }
            ]}
            light={false}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center" style={{
        backgroundImage: 'url(/hero-faq.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 py-5xl relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-xl">
              <span style={{ color: '#33BECC', textShadow: '0 2px 8px rgba(255,255,255,0.9)' }}>
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-black" style={{ textShadow: '0 2px 8px rgba(255,255,255,0.9)' }}>
              Everything you need to know about Vonga
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>
            Quick Answers
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '64px' }}>
            Find what you're looking for
          </h3>

          <div className="text-left">
            <Accordion type="single" collapsible className="w-full">
              {/* GENERAL */}
              <AccordionItem value="general" className="border-2 border-muted rounded-lg mb-lg p-lg bg-white shadow-md">
                <AccordionTrigger className="text-xl font-bold text-navy hover:text-accent">
                  General
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full mt-md">
                    <AccordionItem value="what-is-live-connected">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What does "Live Connected" mean?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Every Vonga product has NFC technology woven inside. Tap with your phone and unlock access, rewards, or experiences. No app required.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="need-app">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Do I need an app?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        No. Any NFC-enabled smartphone (most iPhone and Android devices) can tap and launch the experience instantly in the browser.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="privacy">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Is my information secure?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Yes. Vonga apparel does not store personal data. NFC chips only point to secure digital twins that you control.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>



              {/* ENTERPRISE */}
              <AccordionItem value="enterprise" className="border-2 border-muted rounded-lg mb-lg p-lg bg-white shadow-md">
                <AccordionTrigger className="text-xl font-bold text-navy hover:text-accent">
                  Enterprise
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full mt-md">
                    <AccordionItem value="ent-who">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Who uses Vonga Enterprise?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Sports teams, universities, large gyms, event operators, and global brands. Anywhere apparel and loyalty intersect at scale.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ent-diff">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What makes Enterprise different?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Enterprise includes larger-scale activations, multi-location deployments, deeper integrations (CRM, ticketing, sponsorships), and custom campaigns.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ent-crm">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Can we integrate with our CRM?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Yes. We offer API-level integrations for enterprise partners.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ent-app">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Do you offer a mobile app?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Yes. Enterprise clients can add a <strong>white-labeled mobile app</strong> (additional fee). It's branded to your organization and offers features like push notifications, analytics, and sponsor modules.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ent-events">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        How do event activations work?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Fans or participants tap their apparel at venues to unlock rewards, exclusive content, or location-based experiences. Many deployments include geofenced activations and sponsor tie-ins.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ent-demo">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Can we see a demo?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Yes.{' '}
                        <Link href="/contact" className="hover:underline font-semibold" style={{ color: '#33BECC' }}>
                          Let's Talk
                        </Link>{' '}
                        and we'll show you how Vonga can fit your organization.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ent-timeline">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What's the implementation timeline?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Enterprise deployments typically take <strong>around 6 months</strong>. That's because we customize the platform to your systems and sponsors, integrate with CRMs and ticketing, test and refine across multiple locations, and train your staff for smooth scale. This ensures your launch is a <strong>long-term, integrated experience</strong>, not just a quick activation.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </Section>

      {/* Questions Form Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <HelpCircle className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black" style={{ marginBottom: '32px' }}>
            Still Have Questions?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#33BECC', marginBottom: '32px' }}>
            We're here to help
          </h3>
          
          <p className="text-lg text-black leading-relaxed max-w-2xl mx-auto" style={{ marginBottom: '64px' }}>
            Can't find what you're looking for? Send us your question and we'll get back to you.
          </p>

          <Card className="border-2 border-navy" style={{ backgroundColor: '#303E55' }}>
            <CardContent className="p-3xl">
              <FAQContactForm />
            </CardContent>
          </Card>
      </div>
      </Section>
    </div>
  );
}


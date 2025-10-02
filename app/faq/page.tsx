import { Section } from "@/components/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div>
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

              {/* RETAIL */}
              <AccordionItem value="retail" className="border-2 border-muted rounded-lg mb-lg p-lg bg-white shadow-md">
                <AccordionTrigger className="text-xl font-bold text-navy hover:text-accent">
                  Shop Vonga (Retail)
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full mt-md">
                    <AccordionItem value="retail-different">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What makes Vonga clothing different?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Comfort and style meet technology. Every Vonga garment comes with NFC tech inside, so your apparel connects you to exclusive content, rewards, or community access.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="tap-ready">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Are all items Tap-Ready?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Yes. All Vonga products are NFC-enabled. Look for the <strong>Tap-Ready</strong> badge on product pages.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="scan">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        How do I scan my apparel?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Hold your phone near the NFC tag (usually in the sleeve or hem) and tap. The experience launches instantly in your browser.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="returns">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What's your return policy?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Returns and exchanges are accepted within 30 days of delivery for unworn items. See our{' '}
                        <Link href="/shipping-returns" className="hover:underline font-semibold" style={{ color: '#33BECC' }}>
                          Shipping & Returns
                        </Link>{' '}
                        page for details.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="intl">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Does NFC work internationally?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Yes. NFC scanning works anywhere in the world on supported smartphones.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>

              {/* CLUB VONGA */}
              <AccordionItem value="club" className="border-2 border-muted rounded-lg mb-lg p-lg bg-white shadow-md">
                <AccordionTrigger className="text-xl font-bold text-navy hover:text-accent">
                  Club Vonga
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full mt-md">
                    <AccordionItem value="club-what">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What is Club Vonga?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        A loyalty platform for gyms, sports clubs, creators, and communities. We pair custom-branded gear with built-in NFC rewards.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="club-min">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What's the minimum order?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        100 units. This ensures scale for your members and keeps the platform efficient to manage.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="club-pricing">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        How does pricing work?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Club Vonga combines apparel costs with a monthly SaaS platform fee. Larger orders lower per-unit cost.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="club-rewards">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        What rewards can we set up?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Options include check-in rewards, milestone achievements, referral incentives, and custom rewards unique to your community.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="club-use">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        How do members use it?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Members simply tap their gear with a smartphone to check in, unlock rewards, or view exclusive content. No apps or passwords needed.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="club-tech">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        Do we need technical staff?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        No. Everything is managed via a simple dashboard. Most clubs can be live in days.
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
                        How is it different from Club Vonga?
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
                        <Link href="/enterprise#talk" className="hover:underline font-semibold" style={{ color: '#33BECC' }}>
                          Let's talk
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

              {/* SUPPORT */}
              <AccordionItem value="support" className="border-2 border-muted rounded-lg mb-lg p-lg bg-white shadow-md">
                <AccordionTrigger className="text-xl font-bold text-navy hover:text-accent">
                  Support
                </AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full mt-md">
                    <AccordionItem value="support-contact">
                      <AccordionTrigger className="text-base font-semibold text-navy">
                        How do I get help?
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-black">
                        Visit our{' '}
                        <Link href="/contact" className="hover:underline font-semibold" style={{ color: '#33BECC' }}>
                          Contact page
                        </Link>{' '}
                        and select Retail, Club, or Enterprise. We'll route you to the right team.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Section>
    </div>
  );
}


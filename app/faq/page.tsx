import { Section } from "@/components/Section";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is NFC and how does it work?",
      answer: "NFC (Near Field Communication) is wireless technology embedded in your Vonga apparel. Just tap your phone to the logo and instantly connect. No app downloads or batteries needed."
    },
    {
      question: "Is the NFC chip safe to wear?",
      answer: "Absolutely. NFC is passive technology that only activates when near a phone. It's the same tech used in contactless payments. The chips are also waterproof and machine washable."
    },
    {
      question: "How do I set up my Vonga product?",
      answer: "No setup required. Just tap your phone to the Vonga logo on your apparel. Your phone will automatically recognize it and take you to your digital experience."
    },
    {
      question: "What rewards can I unlock?",
      answer: "It depends on the program. Vonga Shop customers can unlock exclusive content and experiences. Club and Enterprise partners set their own custom rewards from discounts to VIP access."
    },
    {
      question: "What's your shipping policy?",
      answer: "Free shipping on orders over $75 within the United States. Most orders ship within 3-5 business days. International shipping available with additional fees."
    },
    {
      question: "What's your return policy?",
      answer: "30-day returns for unworn items with original tags. We want you to love your Vonga gear, so if it's not right, we'll make it right."
    },
    {
      question: "Can I wash my Vonga apparel?",
      answer: "Yes! Machine wash cold, tumble dry low. The NFC technology is fully waterproof and built to last through hundreds of wash cycles."
    },
    {
      question: "How do I become a Club or Enterprise partner?",
      answer: "Visit our Club or Enterprise pages and book a call. We'll discuss your needs and create a custom solution for your community or organization."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#303E55' }}
        title="Frequently Asked Questions"
        description="Everything you need to know about Vonga"
        dark={true}
      >
      </Section>

      {/* FAQ Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-md">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-muted rounded-lg p-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-navy mb-md">{faq.question}</h3>
                <p className="text-text/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Vonga?",
      answer: "Vonga is a company dedicated to creating innovative solutions that empower communities and individuals to achieve their goals."
    },
    {
      question: "How do I join the Vonga Club?",
      answer: "You can join the Vonga Club by visiting our club page and signing up with your email address. Membership includes exclusive benefits and early access to new products."
    },
    {
      question: "What are your shipping policies?",
      answer: "We offer free shipping on orders over $50 within the United States. International shipping is available with additional fees."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your package's progress."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

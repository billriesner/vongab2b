import { Section } from "@/components/Section";

export default function TermsPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#303E55' }}
        title="Terms of Service"
        description="Agreement for using Vonga products and services"
        dark={true}
      >
      </Section>

      {/* Terms Content */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-text/70 mb-xl">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Agreement</h2>
          <p className="text-text/70 mb-lg">
            By using Vonga products and services, you agree to these terms. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Use of Products</h2>
          <p className="text-text/70 mb-lg">
            Vonga products are intended for personal use. The NFC technology embedded in our apparel is designed to connect you with digital experiences, rewards, and access.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Digital Services</h2>
          <p className="text-text/70 mb-lg">
            Our digital platform provides rewards, authentication, and community features. We reserve the right to modify or discontinue features with reasonable notice to users.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Intellectual Property</h2>
          <p className="text-text/70 mb-lg">
            All Vonga branding, designs, and technology are protected by intellectual property rights. Unauthorized reproduction or use is prohibited.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Limitation of Liability</h2>
          <p className="text-text/70 mb-lg">
            Vonga provides products and services "as is." While we strive for excellence, we cannot guarantee uninterrupted access to digital features.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Changes to Terms</h2>
          <p className="text-text/70 mb-lg">
            We may update these terms from time to time. Continued use of Vonga products constitutes acceptance of updated terms.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Contact</h2>
          <p className="text-text/70">
            Questions about these terms? Email us at legal@vonga.io
          </p>
        </div>
      </Section>
    </div>
  );
}

import { Section } from "@/components/Section";

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#303E55' }}
        title="Privacy Policy"
        description="How we protect your information"
        dark={true}
      >
      </Section>

      {/* Privacy Content */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-text/70 mb-xl">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Privacy First</h2>
          <p className="text-text/70 mb-lg">
            At Vonga, privacy isn't an afterthought. It's built into every tap, every interaction, and every feature. You control your data. Always.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Information We Collect</h2>
          <p className="text-text/70 mb-md">
            When you use Vonga products or services, we may collect:
          </p>
          <ul className="list-disc list-inside text-text/70 space-y-sm mb-lg">
            <li>Email address and name (when you create an account or subscribe)</li>
            <li>Tap interactions (anonymous by default, opt-in for personalized experiences)</li>
            <li>Reward redemptions and preferences</li>
            <li>Device information (phone model, OS) for compatibility</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">How We Use Your Data</h2>
          <p className="text-text/70 mb-lg">
            We use your information to deliver rewards, verify product authenticity, and improve the Vonga experience. We never sell your personal data to third parties.
          </p>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Your Rights</h2>
          <p className="text-text/70 mb-md">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-text/70 space-y-sm mb-lg">
            <li>Access your data at any time</li>
            <li>Request deletion of your account and data</li>
            <li>Opt out of data collection while still using products</li>
            <li>Export your data in standard formats</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mt-3xl mb-lg">Contact</h2>
          <p className="text-text/70">
            Questions about privacy? Email us at privacy@vonga.io
          </p>
        </div>
      </Section>
    </div>
  );
}

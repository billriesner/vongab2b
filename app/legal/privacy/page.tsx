import { Section } from "@/components/Section";
import { Shield, Eye, Lock, UserCheck, Globe, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FAQContactForm } from "@/components/FAQContactForm";

export default function PrivacyPage() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative min-h-[400px] flex items-center justify-center text-center"
        style={{
          backgroundImage: 'url(/hero-placeholder.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-lg" style={{ color: '#33BECC', textShadow: '0 2px 8px rgba(255,255,255,0.9)' }}>
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl font-bold text-black" style={{ textShadow: '0 1px 4px rgba(255,255,255,0.8)' }}>
            How we protect your information
          </p>
        </div>
      </div>

      {/* Introduction */}
      <Section className="py-5xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold text-black leading-relaxed max-w-3xl mx-auto mb-xl">
            Vonga makes NFC-enabled apparel that unlocks experiences with a simple tap. No app required. This Privacy Policy explains what we collect, how we use it, and the choices you have.
          </p>
          <p className="text-sm text-black/60">
            Effective Date: October 2, 2025
          </p>
        </div>
      </Section>

      {/* Divider */}
      <div className="py-4xl" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto">
          <div className="h-0.5 bg-accent/30" />
        </div>
      </div>

      {/* What We Collect Section */}
      <Section className="py-5xl" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <Eye className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center" style={{ marginBottom: '64px' }}>
            What We Collect (and Don't Collect)
          </h2>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              When you browse our site
            </h3>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Standard web logs (IP address, browser, pages viewed).</li>
              <li>Basic analytics and cookies necessary for site performance.</li>
              <li>We request consent for any non-essential cookies (marketing, analytics).</li>
            </ul>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              When you shop at Shop Vonga
            </h3>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Order/contact details you provide (name, email, shipping address).</li>
              <li>Payment method token (handled securely by providers).</li>
              <li>Order details and fulfillment status.</li>
            </ul>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              When you tap a Vonga garment
            </h3>
            <p className="text-lg text-black leading-relaxed mb-md">
              We do not collect personal content from your device.
            </p>
            <p className="text-lg text-black leading-relaxed mb-md">
              We only record:
            </p>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Tap event tied to the garment's digital twin</li>
              <li>Time and/or location eligibility (e.g., tap occurred during an event window or inside a geofence)</li>
            </ul>
            <p className="text-lg text-black leading-relaxed mt-md">
              We do not log your precise device identifiers or track location history.
            </p>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              When you use Club Vonga or Enterprise dashboards
            </h3>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Admin contact details for your organization.</li>
              <li>Configuration choices (rewards, eligibility rules).</li>
              <li>Aggregated engagement metrics.</li>
            </ul>
          </div>

        </div>
      </Section>

      {/* Privacy Commitment Section */}
      <Section className="py-5xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold text-black leading-relaxed max-w-3xl mx-auto">
            Vonga does not sell personal information and will never share data with third parties for marketing without your prior consent.
          </p>
        </div>
      </Section>

      {/* Why We Use Data Section */}
      <Section className="py-5xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <Lock className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center" style={{ marginBottom: '64px' }}>
            Why We Use Data
          </h2>

          <ul className="space-y-lg text-lg text-black leading-relaxed">
            <li><strong style={{ color: '#33BECC' }}>Provide Services:</strong> Fulfill orders, verify tap eligibility, manage rewards, prevent fraud.</li>
            <li><strong style={{ color: '#33BECC' }}>Improve & Secure:</strong> Debugging, analytics in aggregate, service reliability.</li>
            <li><strong style={{ color: '#33BECC' }}>Communicate:</strong> Order confirmations, service updates, marketing with opt-in consent.</li>
            <li><strong style={{ color: '#33BECC' }}>Legal Compliance:</strong> Tax, accounting, security, disputes.</li>
          </ul>

          <p className="text-lg text-black leading-relaxed mt-xl">
            For EU/UK residents, our legal bases include contract, legitimate interests, consent, and legal obligation.
          </p>
        </div>
      </Section>

      {/* Your Rights & Choices Section */}
      <Section className="py-5xl" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <UserCheck className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center" style={{ marginBottom: '64px' }}>
            Your Rights & Choices
          </h2>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Global
            </h3>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li><strong>Cookies:</strong> Manage preferences in the cookie banner at any time.</li>
              <li><strong>Marketing:</strong> Opt-out via email footer links.</li>
            </ul>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              United States (CCPA/CPRA & other state laws)
            </h3>
            <p className="text-lg text-black leading-relaxed mb-md">
              Residents of California, Virginia, Colorado, Connecticut, and Utah may:
            </p>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Access, correct, delete personal data.</li>
              <li>Opt-out of sale/sharing/targeted ads.</li>
              <li>Request a portable copy of data.</li>
            </ul>
            <p className="text-lg text-black leading-relaxed mt-md">
              We do not sell personal data. If "sharing" ever occurs (as defined by CPRA), you'll see a Do Not Sell or Share My Personal Information link.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              EU/UK (GDPR)
            </h3>
            <p className="text-lg text-black leading-relaxed mb-md">
              You may:
            </p>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Access, rectify, erase, or restrict processing.</li>
              <li>Object to processing.</li>
              <li>Request data portability.</li>
              <li>Withdraw consent at any time.</li>
              <li>File a complaint with your local authority.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Additional Policies Section */}
      <Section className="py-5xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#303E55' }}>
              <Shield className="w-10 h-10 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center" style={{ marginBottom: '64px' }}>
            Additional Policies
          </h2>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Children's Privacy
            </h3>
            <p className="text-lg text-black leading-relaxed">
              Vonga does not target or knowingly collect data from children under 13 (U.S.) or under 16 (EU). If we become aware of such data, we delete it promptly. For child-directed services, we comply with COPPA and obtain verified parental consent.
            </p>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Data Retention
            </h3>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Order data is kept as long as required by tax/accounting law.</li>
              <li>Tap eligibility logs are retained only for the event/activation window and a reasonable audit period.</li>
              <li>Data is deleted or de-identified when no longer needed.</li>
            </ul>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              International Data Transfers
            </h3>
            <p className="text-lg text-black leading-relaxed">
              If personal data is transferred internationally, we use safeguards such as Standard Contractual Clauses or equivalent mechanisms.
            </p>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Security
            </h3>
            <p className="text-lg text-black leading-relaxed">
              We use administrative, technical, and physical safeguards (encryption, access controls, monitoring). No system is 100% secure, but we continually improve protections.
            </p>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              How We Share Information
            </h3>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>With service providers who operate under contracts limiting their use to our instructions (payments, hosting, analytics, logistics).</li>
              <li>With legal authorities where required by law or to protect rights and security.</li>
              <li>Never with third parties for independent marketing without your consent.</li>
            </ul>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Your Control at Tap
            </h3>
            <p className="text-lg text-black leading-relaxed mb-md">
              When you tap:
            </p>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>You decide whether to claim the garment, sign up, or link to an account.</li>
              <li>If you decline, we record only an anonymous tap event for eligibility.</li>
              <li>You can revoke consent for rewards or communications at any time.</li>
            </ul>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Cookies & Similar Tech
            </h3>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li><strong>Essential cookies:</strong> Required for site functionality.</li>
              <li><strong>Analytics/marketing cookies:</strong> Only used with your consent (EU/UK cookie laws).</li>
              <li>Preferences can be managed in the cookie banner.</li>
            </ul>
          </div>

          <div className="mb-4xl">
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Enterprise & Club Vonga
            </h3>
            <p className="text-lg text-black leading-relaxed mb-md">
              For organizations using Club or Enterprise platforms:
            </p>
            <ul className="space-y-md text-lg text-black leading-relaxed">
              <li>Your organization is the "controller" of end-user data.</li>
              <li>Vonga acts as a "processor/service provider," processing data only on documented instructions.</li>
              <li>We provide assistance with rights requests and compliance.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-lg" style={{ color: '#33BECC', marginTop: '32px' }}>
              Changes to This Policy
            </h3>
            <p className="text-lg text-black leading-relaxed">
              We may update this policy from time to time. The "Effective Date" at the top will show when it was last revised. Material changes will be highlighted on our site.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Us Section */}
      <Section className="py-5xl" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center" style={{ marginBottom: '32px' }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center" style={{ marginBottom: '32px' }}>
            Contact Us
          </h2>
          <p className="text-lg text-black leading-relaxed text-center" style={{ marginBottom: '64px' }}>
            Questions about privacy? Send us a message and we'll get back to you.
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

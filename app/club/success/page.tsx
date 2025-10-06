import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ClubSuccessPage() {
  return (
    <div>
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center" style={{ marginBottom: '48px' }}>
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ backgroundColor: '#33BECC' }}>
              <CheckCircle2 className="w-12 h-12 text-navy" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-xl">
            Payment Successful!
          </h1>
          
          <Card className="border-2 border-muted" style={{ backgroundColor: '#F7F7F7' }}>
            <CardHeader>
              <CardTitle className="text-navy text-2xl">Thank You for Your Deposit</CardTitle>
              <CardDescription className="text-base" style={{ color: '#33BECC' }}>
                Your Club Vonga order is confirmed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-lg text-left">
                <p className="text-base text-navy">
                  We've received your 50% deposit payment and your order is now in production queue.
                </p>
                
                <div className="bg-white rounded-lg p-lg border-2 border-muted">
                  <h3 className="font-semibold text-navy mb-md">What Happens Next?</h3>
                  <ul className="space-y-sm text-sm text-text/70">
                    <li className="flex items-start gap-sm">
                      <span style={{ color: '#33BECC', fontWeight: 'bold' }}>1.</span>
                      <span>You'll receive a confirmation email within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span style={{ color: '#33BECC', fontWeight: 'bold' }}>2.</span>
                      <span>Our design team will reach out to finalize your branding</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span style={{ color: '#33BECC', fontWeight: 'bold' }}>3.</span>
                      <span>We'll begin production of your custom apparel</span>
                    </li>
                    <li className="flex items-start gap-sm">
                      <span style={{ color: '#33BECC', fontWeight: 'bold' }}>4.</span>
                      <span>Remaining balance invoice sent before shipment</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center pt-lg">
                  <p className="text-sm text-text/70 mb-md">Questions about your order?</p>
                  <div className="flex flex-col sm:flex-row gap-md justify-center">
                    <Button 
                      className="bg-gray-200 hover:bg-gray-300 text-black font-semibold shadow-md"
                      asChild
                    >
                      <Link href="/contact">Contact Support</Link>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold"
                      asChild
                    >
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}


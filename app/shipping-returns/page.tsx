import { Section } from "@/components/Section";
import { Truck, Package, RefreshCw } from "lucide-react";

export default function ShippingReturnsPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Shipping & Returns"
        description="Everything you need to know"
      >
      </Section>

      {/* Shipping Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-md mb-3xl">
            <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#33BECC' }}>
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-navy">Shipping Information</h2>
          </div>
          
          <div className="space-y-xl bg-white border-2 border-muted rounded-lg p-3xl">
            <div>
              <h3 className="text-xl font-bold text-navy mb-md">Standard Shipping</h3>
              <p className="text-text/70 mb-sm">
                Free standard shipping on orders over $75 within the United States. Orders under $75 have a flat rate of $5.95.
              </p>
              <p className="text-text/70">
                Standard shipping typically takes 3-5 business days for domestic orders.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy mb-md">Express Shipping</h3>
              <p className="text-text/70">
                Express shipping is available for $12.95 and typically delivers within 1-2 business days.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy mb-md">International Shipping</h3>
              <p className="text-text/70">
                We ship internationally with rates calculated at checkout based on destination and package weight.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Returns Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-md mb-3xl">
            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-navy">Returns & Exchanges</h2>
          </div>
          
          <div className="space-y-xl bg-white border-2 border-muted rounded-lg p-3xl">
            <div>
              <h3 className="text-xl font-bold text-navy mb-md">Return Policy</h3>
              <p className="text-text/70">
                We offer a 30-day return policy for unworn items with original tags attached and in original packaging. We want you to love your Vonga gear.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy mb-md">How to Return</h3>
              <ol className="list-decimal list-inside text-text/70 space-y-sm">
                <li>Contact our customer service team to initiate a return</li>
                <li>You'll receive a prepaid return label via email</li>
                <li>Package your items securely and attach the return label</li>
                <li>Drop off at any authorized shipping location</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-navy mb-md">Exchanges</h3>
              <p className="text-text/70">
                Exchanges for different sizes or colors are subject to availability. Please contact customer service for assistance with exchanges.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

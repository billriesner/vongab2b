export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">Shipping & Returns</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-lg font-semibold mb-4">Standard Shipping</h3>
              <p className="text-muted-foreground mb-4">
                Free standard shipping on orders over $50 within the United States. Orders under $50 have a flat rate of $5.95.
              </p>
              <p className="text-muted-foreground mb-4">
                Standard shipping typically takes 3-5 business days for domestic orders.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">Express Shipping</h3>
              <p className="text-muted-foreground mb-4">
                Express shipping is available for $12.95 and typically delivers within 1-2 business days.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">International Shipping</h3>
              <p className="text-muted-foreground">
                We ship internationally with rates calculated at checkout based on destination and package weight.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Returns & Exchanges</h2>
            <div className="prose prose-lg max-w-none">
              <h3 className="text-lg font-semibold mb-4">Return Policy</h3>
              <p className="text-muted-foreground mb-4">
                We offer a 30-day return policy for most items. Items must be in original condition with tags attached and in original packaging.
              </p>
              
              <h3 className="text-lg font-semibold mb-4">How to Return</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Contact our customer service team to initiate a return</li>
                <li>You'll receive a prepaid return label via email</li>
                <li>Package your items securely and attach the return label</li>
                <li>Drop off at any authorized shipping location</li>
                <li>Refunds will be processed within 5-7 business days</li>
              </ol>
              
              <h3 className="text-lg font-semibold mb-4">Exchanges</h3>
              <p className="text-muted-foreground">
                Exchanges for different sizes or colors are subject to availability. Please contact customer service for assistance with exchanges.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

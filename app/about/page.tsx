export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">About Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            Vonga is dedicated to creating innovative solutions that empower communities and individuals to achieve their goals.
          </p>
          <p className="text-muted-foreground mb-6">
            Our mission is to provide high-quality products and services that make a positive impact on people's lives.
          </p>
          <p className="text-muted-foreground">
            Founded with a vision of excellence and innovation, we continue to push boundaries and deliver exceptional value to our customers.
          </p>
        </div>
      </div>
    </div>
  );
}

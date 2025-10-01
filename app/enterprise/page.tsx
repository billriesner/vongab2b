export default function EnterprisePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">Enterprise Solutions</h1>
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground mb-6">
            Scale your business with our enterprise-grade solutions designed for large organizations.
          </p>
          <p className="text-muted-foreground mb-6">
            Our team works closely with enterprise clients to deliver customized solutions that meet their unique requirements.
          </p>
        </div>

        <div id="demo" className="bg-card border rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Book a Demo</h2>
          <p className="text-muted-foreground mb-6">
            Schedule a personalized demonstration of our enterprise solutions.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  placeholder="Enter company name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                placeholder="Tell us about your requirements"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-accent text-white px-8 py-3 rounded-md hover:bg-brand-accent/90 transition-colors"
            >
              Schedule Demo
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
            <p className="text-muted-foreground">Tailored solutions designed specifically for your business needs.</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-muted-foreground">Round-the-clock support from our dedicated enterprise team.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

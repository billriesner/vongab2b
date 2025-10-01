export default function ClubPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">Join the Vonga Club</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Become part of an exclusive community of innovators and early adopters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Early Access</h3>
            <p className="text-muted-foreground">Get first access to new products and features before anyone else.</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Exclusive Benefits</h3>
            <p className="text-muted-foreground">Enjoy special discounts, rewards, and member-only perks.</p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <p className="text-muted-foreground">Connect with like-minded individuals and share experiences.</p>
          </div>
        </div>
        <a
          href="/club/get-started"
          className="inline-flex items-center justify-center rounded-md bg-brand-accent px-8 py-3 text-lg font-medium text-white hover:bg-brand-accent/90 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

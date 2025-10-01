interface CollectionPageProps {
  params: {
    handle: string;
  };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">
          Collection: {params.handle}
        </h1>
        <p className="text-muted-foreground mb-8">
          Explore our curated collection of products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-card border rounded-lg p-4">
              <div className="h-48 bg-muted rounded mb-4"></div>
              <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
              <p className="text-muted-foreground mb-4">$99.99</p>
              <a href={`/products/product-${item}`} className="text-brand-accent hover:underline">
                View Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

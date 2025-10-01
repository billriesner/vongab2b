interface ProductPageProps {
  params: {
    handle: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="h-96 bg-muted rounded-lg mb-6"></div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-brand-navy mb-4">
              Product: {params.handle}
            </h1>
            <p className="text-2xl text-brand-accent mb-6">$99.99</p>
            <p className="text-muted-foreground mb-8">
              This is a detailed description of the product. It includes all the features, benefits, and specifications that customers need to know before making a purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-accent text-white px-8 py-3 rounded-md hover:bg-brand-accent/90 transition-colors">
                Add to Cart
              </button>
              <button className="border border-brand-navy text-brand-navy px-8 py-3 rounded-md hover:bg-brand-navy hover:text-white transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

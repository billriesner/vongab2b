export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <div className="h-48 bg-muted rounded mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Product Category 1</h3>
            <p className="text-muted-foreground mb-4">Description of the product category</p>
            <a href="/shop/collections/example" className="text-brand-accent hover:underline">
              View Collection →
            </a>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="h-48 bg-muted rounded mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Product Category 2</h3>
            <p className="text-muted-foreground mb-4">Description of the product category</p>
            <a href="/shop/collections/example2" className="text-brand-accent hover:underline">
              View Collection →
            </a>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="h-48 bg-muted rounded mb-4"></div>
            <h3 className="text-lg font-semibold mb-2">Product Category 3</h3>
            <p className="text-muted-foreground mb-4">Description of the product category</p>
            <a href="/shop/collections/example3" className="text-brand-accent hover:underline">
              View Collection →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Section } from "@/components/Section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shirt, Package } from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#33BECC' }}
        title="Shop Vonga"
        description="Connected apparel for everyday wear"
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-navy mb-3xl font-semibold">
            Sustainable athleisure with NFC built in. Every piece unlocks digital experiences and rewards.
          </p>
        </div>
      </Section>

      {/* Collections Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
        title="Collections"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl max-w-6xl mx-auto">
          <Card className="hover:shadow-xl transition-shadow border-2 border-muted bg-white">
            <CardContent className="p-0">
              <div className="h-64 bg-muted flex items-center justify-center">
                <Shirt className="w-16 h-16 text-text/30" />
              </div>
            </CardContent>
            <CardHeader className="p-lg">
              <CardTitle className="text-navy text-xl font-bold">Essentials</CardTitle>
              <CardDescription className="text-sm" style={{ color: '#33BECC' }}>
                Everyday staples with NFC
              </CardDescription>
            </CardHeader>
            <CardContent className="px-lg pb-lg">
              <Link 
                href="/shop/collections/essentials" 
                className="text-sm text-accent hover:underline font-medium"
              >
                View Collection →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-muted bg-white">
            <CardContent className="p-0">
              <div className="h-64 bg-muted flex items-center justify-center">
                <Package className="w-16 h-16 text-text/30" />
              </div>
            </CardContent>
            <CardHeader className="p-lg">
              <CardTitle className="text-navy text-xl font-bold">Performance</CardTitle>
              <CardDescription className="text-sm" style={{ color: '#33BECC' }}>
                Built for the active life
              </CardDescription>
            </CardHeader>
            <CardContent className="px-lg pb-lg">
              <Link 
                href="/shop/collections/performance" 
                className="text-sm text-accent hover:underline font-medium"
              >
                View Collection →
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2 border-muted bg-white">
            <CardContent className="p-0">
              <div className="h-64 bg-muted flex items-center justify-center">
                <Shirt className="w-16 h-16 text-text/30" />
              </div>
            </CardContent>
            <CardHeader className="p-lg">
              <CardTitle className="text-navy text-xl font-bold">Limited Drops</CardTitle>
              <CardDescription className="text-sm" style={{ color: '#33BECC' }}>
                Exclusive releases
              </CardDescription>
            </CardHeader>
            <CardContent className="px-lg pb-lg">
              <Link 
                href="/shop/collections/limited" 
                className="text-sm text-accent hover:underline font-medium"
              >
                View Collection →
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Coming Soon Message */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-lg shadow-lg">
            <Package className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-md">Coming Soon</h2>
          <p className="text-lg text-text/70 mb-xl">
            Our first collection launches soon. Join our mailing list to get notified.
          </p>
          <Link 
            href="/#stay-connected"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-black px-xl py-md rounded font-semibold shadow-md transition-colors"
          >
            Get Early Access
          </Link>
        </div>
      </Section>
    </div>
  );
}

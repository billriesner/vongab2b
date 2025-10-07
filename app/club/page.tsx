import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ClubPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-navy to-navy/90 text-white py-5xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-lg">
            Club Vonga
          </h1>
          <p className="text-xl md:text-2xl mb-2xl opacity-90">
            Coming Soon - Community Engagement Platform
          </p>
          <p className="text-lg mb-2xl opacity-80">
            We're building something amazing for community engagement and member rewards. 
            Stay tuned for updates!
          </p>
        </div>
      </Section>

      {/* Coming Soon Content */}
      <Section className="py-5xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-lg">
              What's Coming
            </h2>
            <p className="text-lg text-gray-600">
              We're working hard to bring you the ultimate community engagement platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-lg">
            <Card>
              <CardHeader>
                <CardTitle className="text-navy">Smart Rewards</CardTitle>
                <CardDescription>
                  Automated reward systems for member engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track member activity and automatically distribute rewards based on engagement levels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-navy">Custom Branding</CardTitle>
                <CardDescription>
                  Fully branded experience for your community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customize colors, logos, and messaging to match your brand identity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-navy">Analytics Dashboard</CardTitle>
                <CardDescription>
                  Insights into member engagement and activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track engagement metrics, reward distribution, and member activity patterns.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-2xl">
            <h3 className="text-2xl font-bold mb-lg">
              Want to be notified when we launch?
            </h3>
            <Button asChild size="lg">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
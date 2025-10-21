import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { theme } from "@/src/styles/theme";
import { Heart, Brain, Leaf } from "lucide-react";

export function Pillars() {
  const pillars = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Human Connection",
      description: "Every garment is a signal of belonging, not a logo."
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Effortless Technology", 
      description: "Smart apparel that works automatically, so you can focus on the experience."
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Lasting Belonging",
      description: "From first scan to next season, we help you make loyalty endure."
    }
  ];

  return (
    <section className="py-24" style={{ backgroundColor: theme.colors.gray100 }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ 
              fontFamily: theme.typography.fontFamily.join(', '),
              color: theme.colors.navy,
              lineHeight: theme.typography.lineHeights.snug
            }}
          >
            Our Pillars
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ 
              fontFamily: theme.typography.fontFamily.join(', '),
              color: theme.colors.gray700,
              lineHeight: theme.typography.lineHeights.normal
            }}
          >
            The principles that guide everything we build
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-200"
              style={{ 
                backgroundColor: theme.colors.white,
                transition: `all ${theme.motion.base}ms ${theme.motion.curve}`
              }}
            >
              <CardHeader className="items-center text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg"
                  style={{ backgroundColor: theme.colors.aqua }}
                >
                  <div className="text-white">
                    {pillar.icon}
                  </div>
                </div>
                <CardTitle 
                  className="text-2xl font-bold"
                  style={{ 
                    fontFamily: theme.typography.fontFamily.join(', '),
                    color: theme.colors.navy
                  }}
                >
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription 
                  className="text-base"
                  style={{ 
                    fontFamily: theme.typography.fontFamily.join(', '),
                    color: theme.colors.gray700,
                    lineHeight: theme.typography.lineHeights.normal
                  }}
                >
                  {pillar.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

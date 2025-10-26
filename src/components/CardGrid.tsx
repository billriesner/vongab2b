import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { theme } from "@/src/styles/theme";
import Link from "next/link";

interface CardGridItem {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}

interface CardGridProps {
  items: CardGridItem[];
}

export function CardGrid({ items }: CardGridProps) {
  return (
    <section className="py-24" style={{ backgroundColor: theme.colors.white }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <Card 
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-200 flex flex-col h-full"
              style={{ 
                backgroundColor: theme.colors.white,
                transition: `all ${theme.motion.base}ms ${theme.motion.curve}`
              }}
            >
              <CardHeader className="items-center text-center flex-grow">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg"
                  style={{ backgroundColor: theme.colors.aqua }}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <CardTitle 
                  className="text-2xl font-bold"
                  style={{ 
                    fontFamily: theme.typography.fontFamily.join(', '),
                    color: theme.colors.navy
                  }}
                >
                  {item.title}
                </CardTitle>
                <CardDescription 
                  className="text-base font-semibold mt-2"
                  style={{ 
                    fontFamily: theme.typography.fontFamily.join(', '),
                    color: theme.colors.aqua
                  }}
                >
                  {item.text}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link 
                  href={item.href}
                  className="block w-full py-3 px-6 rounded-lg text-center font-semibold transition-all duration-300 hover:bg-white/10 hover:underline"
                  style={{
                    color: theme.colors.navy,
                    border: `2px solid ${theme.colors.gray300}`,
                    transition: `all ${theme.motion.base}ms ${theme.motion.curve}`
                  }}
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

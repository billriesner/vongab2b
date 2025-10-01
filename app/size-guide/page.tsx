import { Section } from "@/components/Section";
import { Ruler } from "lucide-react";

export default function SizeGuidePage() {
  return (
    <div>
      {/* Hero Section */}
      <Section 
        className="py-5xl"
        style={{ backgroundColor: '#FFFFFF' }}
        title="Size Guide"
        description="Find your perfect fit"
      >
      </Section>

      {/* Size Tables Section */}
      <Section 
        className="py-4xl"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3xl">
            <div>
              <div className="flex items-center gap-md mb-xl">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#33BECC' }}>
                  <Ruler className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Clothing Sizes</h2>
              </div>
              <div className="overflow-x-auto bg-white border-2 border-muted rounded-lg p-lg">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: '#E6F7F9' }}>
                      <th className="p-md text-left text-navy font-bold">Size</th>
                      <th className="p-md text-left text-navy font-bold">Chest (in)</th>
                      <th className="p-md text-left text-navy font-bold">Waist (in)</th>
                      <th className="p-md text-left text-navy font-bold">Length (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "XS", chest: "32-34", waist: "26-28", length: "27" },
                      { size: "S", chest: "34-36", waist: "28-30", length: "28" },
                      { size: "M", chest: "36-38", waist: "30-32", length: "29" },
                      { size: "L", chest: "38-40", waist: "32-34", length: "30" },
                      { size: "XL", chest: "40-42", waist: "34-36", length: "31" },
                      { size: "2XL", chest: "42-44", waist: "36-38", length: "32" },
                    ].map((row, index) => (
                      <tr key={index} className="border-t border-muted">
                        <td className="p-md font-semibold text-navy">{row.size}</td>
                        <td className="p-md text-text/70">{row.chest}</td>
                        <td className="p-md text-text/70">{row.waist}</td>
                        <td className="p-md text-text/70">{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-xl">How to Measure</h2>
              <div className="space-y-xl bg-white border-2 border-muted rounded-lg p-xl">
                <div>
                  <h3 className="text-lg font-bold text-navy mb-sm">Chest/Bust</h3>
                  <p className="text-sm text-text/70">Measure around the fullest part of your chest, keeping the tape horizontal.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-sm">Waist</h3>
                  <p className="text-sm text-text/70">Measure around your natural waistline, which is typically the narrowest part of your torso.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-sm">Length</h3>
                  <p className="text-sm text-text/70">For tops, measure from the highest point of your shoulder to your desired length.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy mb-sm">Between Sizes?</h3>
                  <p className="text-sm text-text/70">We recommend sizing up for a relaxed fit or sizing down for a more fitted look. All Vonga apparel is designed for comfort and movement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

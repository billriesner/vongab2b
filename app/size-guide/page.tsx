export default function SizeGuidePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">Size Guide</h1>
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground mb-6">
            Finding the right size is important for comfort and fit. Use our comprehensive size guide to ensure you select the perfect size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Clothing Sizes</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-3 text-left">Size</th>
                    <th className="border border-border p-3 text-left">Chest (in)</th>
                    <th className="border border-border p-3 text-left">Waist (in)</th>
                    <th className="border border-border p-3 text-left">Length (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "XS", chest: "32-34", waist: "26-28", length: "27" },
                    { size: "S", chest: "34-36", waist: "28-30", length: "28" },
                    { size: "M", chest: "36-38", waist: "30-32", length: "29" },
                    { size: "L", chest: "38-40", waist: "32-34", length: "30" },
                    { size: "XL", chest: "40-42", waist: "34-36", length: "31" },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="border border-border p-3 font-medium">{row.size}</td>
                      <td className="border border-border p-3">{row.chest}</td>
                      <td className="border border-border p-3">{row.waist}</td>
                      <td className="border border-border p-3">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">How to Measure</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Chest/Bust</h3>
                <p className="text-muted-foreground">Measure around the fullest part of your chest, keeping the tape horizontal.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Waist</h3>
                <p className="text-muted-foreground">Measure around your natural waistline, which is typically the narrowest part of your torso.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Length</h3>
                <p className="text-muted-foreground">For tops, measure from the highest point of your shoulder to your desired length.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">Get Started with Vonga Club</h1>
        <div className="bg-card border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Sign Up Form</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="interests" className="block text-sm font-medium mb-2">Interests</label>
              <select
                id="interests"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <option value="">Select your interests</option>
                <option value="technology">Technology</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-brand-accent text-white py-3 rounded-md hover:bg-brand-accent/90 transition-colors"
            >
              Join the Club
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

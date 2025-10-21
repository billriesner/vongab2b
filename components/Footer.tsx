import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-bg" style={{ backgroundColor: '#303E55' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div>
            <Link href="/" className="flex items-center justify-start mb-4">
              <img src="/logo.svg" alt="Vonga" className="h-30 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(68%) sepia(66%) saturate(459%) hue-rotate(140deg) brightness(94%) contrast(87%)' }} />
            </Link>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#33BECC' }}>Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/enterprise" className="text-gray-300 hover:text-accent transition-colors">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-300 hover:text-accent transition-colors">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#33BECC' }}>Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#33BECC' }}>Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="text-gray-300 hover:text-accent transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#33BECC' }}>Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/terms" className="text-gray-300 hover:text-accent transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Vonga. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/legal/privacy" className="text-sm text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-sm text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-accent backdrop-blur shadow-lg" style={{ background: 'rgba(48, 62, 85, 0.95)' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Vonga" className="h-30 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(68%) sepia(66%) saturate(459%) hue-rotate(140deg) brightness(94%) contrast(87%)' }} />
          </Link>

          {/* Right Side - Buttons + Burger Menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-3">
              <Button size="sm" variant="primary" asChild>
                <Link href="/shop">Shop Vonga</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/enterprise#talk">Let's Talk</Link>
              </Button>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" style={{ color: '#33BECC' }}>
                  <Menu className="h-10 w-10" style={{ color: '#33BECC' }} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  <div className="flex items-center justify-center pb-4 border-b border-accent/30">
                    <img src="/logo.svg" alt="Vonga" className="h-24 w-auto" style={{ filter: 'brightness(0) saturate(100%) invert(68%) sepia(66%) saturate(459%) hue-rotate(140deg) brightness(94%) contrast(87%)' }} />
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="/shop"
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Shop
                    </Link>
                    <Link
                      href="/club"
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Club Vonga
                    </Link>
                    <Link
                      href="/enterprise"
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Enterprise
                    </Link>
                    <Link
                      href="/technology"
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Technology
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>

                  <div className="flex flex-col space-y-3 pt-4 border-t">
                    <Button variant="primary" asChild style={{ backgroundColor: '#E5E5E5', color: '#0A0A0A' }}>
                      <Link href="/shop" onClick={() => setIsOpen(false)}>
                        Shop Vonga
                      </Link>
                    </Button>
                    <Button variant="secondary" asChild style={{ backgroundColor: '#E5E5E5', color: '#0A0A0A' }}>
                      <Link href="/enterprise#talk" onClick={() => setIsOpen(false)}>
                        Let's Talk
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

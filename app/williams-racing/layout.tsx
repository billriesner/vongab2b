import type { ReactNode } from "react";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Live Connected. Williams Racing Everywhere. | Vonga",
  description: "Turn your team apparel into an always-on fan touchpoint. From the Paddock to the rest of the world.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WilliamsRacingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}


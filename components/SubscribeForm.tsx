"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const ACCENT = "#33becc";

export function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby_tIS6fWQsTWsWuyvkhyKSKjlQNTbtEBhbdsOvFF4bxAP_EwqeX1O1DiFzOFjb_Y_vRA/exec",
        {
          method: "POST",
          body: new URLSearchParams({ email }),
          mode: "no-cors",
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error", err);
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
          />
          <Button type="submit" style={{ backgroundColor: ACCENT, color: "white" }}>
            Subscribe
          </Button>
        </form>
      ) : (
        <p className="text-green-600 font-medium mt-4">You’re subscribed! Thanks for joining us.</p>
      )}
    </div>
  );
}

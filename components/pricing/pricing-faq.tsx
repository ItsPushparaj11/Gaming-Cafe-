"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to book in advance?",
    answer:
      "While walk-ins are welcome, we recommend booking in advance during peak hours (evenings and weekends) to ensure availability. Members get priority booking privileges.",
  },
  {
    question: "Are there any age restrictions?",
    answer:
      "Gamers under 16 require adult supervision. Some games have age ratings that we strictly follow. Valid ID may be required for age verification.",
  },
  {
    question: "Can I bring my own peripherals?",
    answer:
      "Yes! You're welcome to bring your own keyboard, mouse, or headset. We provide USB ports and clean your gaming station before each session.",
  },
  {
    question: "How does the Night Owl package work?",
    answer:
      "The Night Owl package gives you 8 hours of PC gaming from 10 PM to 6 AM at a discounted rate of ₹500 (normally ₹640). Perfect for late-night gaming marathons!",
  },
  {
    question: "Can I pause my membership?",
    answer:
      "Yes, you can pause your membership for up to 30 days per year. Just let us know at least 7 days in advance, and we'll extend your membership accordingly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, credit/debit cards, and cash. For bookings, we accept online payments through our booking system.",
  },
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-card/80 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

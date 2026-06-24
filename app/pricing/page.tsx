import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing | Marcia's Elegant LED Rental Logistic",
  description:
    "Request a free, customized quote for photo booths, LED tents and catering in Worcester, MA. Pricing confirmed by phone.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="PRICING"
        title={
          <>
            SIMPLE, <span className="text-accent-light">CUSTOM</span> QUOTES.
          </>
        }
        intro="Every event is different, so we price by your date, package and headcount. The figures below are placeholders — confirm — and final pricing is provided by phone or quote."
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-content px-5 py-16">
          <p className="mb-8 rounded-card border border-accent/40 bg-ink-elevated p-4 text-sm text-accent-light">
            [confirm] — The current site shows a single pricing image with no
            structured tiers. The tiers below are placeholders and must be
            confirmed before launch.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <div
                key={s.slug}
                className="flex flex-col rounded-card border border-hairline bg-ink-elevated p-6"
              >
                <h2 className="font-display text-xl uppercase tracking-tight text-body-ondark">
                  {s.title}
                </h2>
                <p className="mt-3 font-display text-4xl text-accent-light">
                  $[confirm]
                </p>
                <p className="mt-2 text-sm text-body-muted">
                  Pricing varies by package and event length — confirm.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={
          <>
            GET YOUR <span className="text-accent-light">FREE QUOTE.</span>
          </>
        }
        elevated
      />
    </>
  );
}

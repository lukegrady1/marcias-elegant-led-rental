import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accessibility Statement | Marcia's Elegant LED Rental Logistic",
  description:
    "Our commitment to making this website accessible to all visitors.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="ACCESSIBILITY"
        title={
          <>
            OUR <span className="text-accent-light">COMMITMENT.</span>
          </>
        }
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-body-ondark">
          <p>
            Marcia&apos;s Elegant LED Rental Logistic is committed to making our
            website accessible to the widest possible audience, including people
            with disabilities. We aim to meet WCAG 2.1 AA guidelines.
          </p>
          <p className="text-body-muted">
            We build with semantic landmarks, logical heading order, keyboard
            support, visible focus indicators, accessible color contrast and a
            reduced-motion preference. The interactive before/after slider
            supports pointer, touch and keyboard input.
          </p>
          <p className="text-body-muted">
            If you encounter any accessibility barrier, please call us at{" "}
            <a href={company.phoneHref} className="text-accent-light hover:underline">
              {company.phoneDisplay}
            </a>{" "}
            so we can help and improve. [confirm — email contact pending.]
          </p>
        </div>
      </section>
    </>
  );
}

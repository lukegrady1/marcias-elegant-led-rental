import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ValueCards from "@/components/ValueCards";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import { aboutCopy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us | Marcia's Elegant LED Rental Logistic",
  description:
    "Family- and woman-owned, insured, 25 years of experience serving Worcester, MA with photo booths, LED tents and catering.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutCopy.eyebrow}
        title={
          <>
            FAMILY &amp; WOMAN-OWNED,{" "}
            <span className="text-accent-light">25 YEARS</span> STRONG.
          </>
        }
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-lg leading-relaxed text-body-ondark">
            {aboutCopy.body}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-body-muted">
            Our goal is to transform any event into a memorable occasion and to
            build long-term customer relationships through reliable, affordable
            services. Your satisfaction is our top priority. Ready to elevate your
            next event?
          </p>
        </div>
      </section>
      <ValueCards />
      <Process />
      <CtaBand
        title={
          <>
            READY TO ELEVATE YOUR{" "}
            <span className="text-accent-light">NEXT EVENT?</span>
          </>
        }
        elevated
      />
    </>
  );
}

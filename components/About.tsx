import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { aboutCopy, company } from "@/lib/content";

export default function About() {
  return (
    <section className="bg-ink">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-card border border-hairline">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/about.svg"
                alt="Marcia's team setting up a celebration [confirm — placeholder image]"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <span className="pointer-events-none absolute bottom-4 left-4 font-display text-7xl leading-none text-accent/80">
              {company.experienceYears}
            </span>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <SectionHeading
              eyebrow={aboutCopy.eyebrow}
              title={
                <>
                  FAMILY &amp; WOMAN-OWNED,{" "}
                  <span className="text-accent-light">25 YEARS</span> STRONG.
                </>
              }
            />
            <p className="mt-6 text-lg leading-relaxed text-body-muted">
              {aboutCopy.body}
            </p>
            <div className="mt-8">
              <Button href="/about_us" variant="accent">
                About Us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { valueCards } from "@/lib/content";

export default function ValueCards() {
  return (
    <section className="bg-ink-elevated">
      <div className="mx-auto max-w-content px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="WHY MARCIA'S"
            title={
              <>
                BUILT ON <span className="text-accent-light">TRUST.</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueCards.map((c) => (
            <Reveal key={c.title}>
              <div className="flex h-full flex-col rounded-card border border-hairline bg-ink p-6">
                <span
                  aria-hidden="true"
                  className="font-display text-4xl leading-none text-accent"
                >
                  {c.marker}
                </span>
                <h3 className="mt-4 font-display text-xl uppercase tracking-tight text-body-ondark">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-body-muted">{c.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-content px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title={
              <>
                BOOKING IS <span className="text-accent-light">SIMPLE.</span>
              </>
            }
          />
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <Reveal key={step.number} as="div">
              <li className="relative list-none rounded-card border border-hairline bg-ink-elevated p-6">
                <span className="font-display text-5xl leading-none text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-xl uppercase tracking-tight text-body-ondark">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-body-muted">{step.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

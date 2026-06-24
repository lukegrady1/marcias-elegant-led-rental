import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="bg-surface-light">
      <div className="mx-auto max-w-content px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="WHAT WE DO"
            title={
              <>
                SERVICES THAT MAKE THE{" "}
                <span className="text-accent">NIGHT.</span>
              </>
            }
            light
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

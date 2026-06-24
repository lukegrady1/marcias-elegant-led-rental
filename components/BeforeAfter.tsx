import SectionHeading from "./SectionHeading";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-content px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="SEE THE DIFFERENCE"
            title={
              <>
                WATCH THE ROOM COME{" "}
                <span className="text-accent-light">ALIVE.</span>
              </>
            }
            className="mb-10"
          />
        </Reveal>
        <Reveal>
          <BeforeAfterSlider
            beforeSrc="/images/lights-off.svg"
            afterSrc="/images/lights-on.svg"
            beforeAlt="Event tent before lighting, lights off [confirm — placeholder image]"
            afterAlt="The same tent glowing with LED light, lights on [confirm — placeholder image]"
          />
        </Reveal>
        <p className="mt-4 text-sm text-body-muted">
          Drag the handle, or use the left and right arrow keys, to reveal the
          difference. Paired before/after imagery is a placeholder — confirm.
        </p>
      </div>
    </section>
  );
}

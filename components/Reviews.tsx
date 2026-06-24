import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Button from "./Button";
import { reviewPlaceholders, company, socials, ctaWording } from "@/lib/content";

export default function Reviews() {
  const google = socials.find((s) => s.label === "Google");
  return (
    <section className="bg-surface-light">
      <div className="mx-auto max-w-content px-5 py-20">
        <Reveal>
          <SectionHeading
            eyebrow="WHAT GUESTS SAY"
            title={
              <>
                LOVED ACROSS <span className="text-accent">WORCESTER.</span>
              </>
            }
            light
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviewPlaceholders.map((r, i) => (
            <Reveal key={i}>
              <figure className="flex h-full flex-col rounded-card border border-black/5 bg-surface-card p-6 shadow-sm">
                <div aria-hidden="true" className="text-accent">
                  ★★★★★
                </div>
                <blockquote className="mt-3 grow text-ink/80">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">
                  {r.name}
                  <span className="block font-normal text-ink/60">{r.meta}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/60">
          Review cards are placeholders pending live Google reviews — confirm. We
          do not publish invented quotes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={company.reviewHref} variant="primary">
            {ctaWording.review}
          </Button>
          {google && (
            <a
              href={google.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-sans text-sm font-semibold uppercase tracking-wide text-accent hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View our Google profile →
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { company, socials } from "@/lib/content";

export default function ServiceArea() {
  const google = socials.find((s) => s.label === "Google");
  return (
    <section className="bg-ink-elevated">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <Reveal>
          <div>
            <SectionHeading
              eyebrow="SERVICE AREA"
              title={
                <>
                  PROUDLY SERVING{" "}
                  <span className="text-accent-light">WORCESTER, MA.</span>
                </>
              }
            />
            <p className="mt-6 text-lg leading-relaxed text-body-muted">
              We serve Worcester and the surrounding area. Based at{" "}
              {company.addressLine}.
            </p>
            <dl className="mt-6 space-y-2 text-sm text-body-ondark">
              <div>
                <dt className="inline font-semibold">Address: </dt>
                <dd className="inline text-body-muted">{company.addressLine}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Hours: </dt>
                <dd className="inline text-body-muted">{company.hours}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Phone: </dt>
                <dd className="inline">
                  <a href={company.phoneHref} className="text-accent-light hover:underline">
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
            {google && (
              <a
                href={google.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center font-sans text-sm font-semibold uppercase tracking-wide text-accent-light hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Open in Google Maps →
              </a>
            )}
          </div>
        </Reveal>
        <Reveal>
          <div
            role="img"
            aria-label="Map of the Worcester, MA service area [confirm — static placeholder]"
            className="flex aspect-[4/3] w-full items-center justify-center rounded-card border border-hairline bg-ink text-center"
          >
            <span className="px-4 font-display text-2xl uppercase tracking-tight text-body-muted">
              Worcester, MA 01610
              <span className="mt-2 block text-sm font-normal normal-case text-accent-light">
                Map placeholder — confirm
              </span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

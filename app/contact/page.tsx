import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { company, socials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Marcia's Elegant LED Rental Logistic",
  description:
    "Contact Marcia's Elegant LED Rental Logistic in Worcester, MA. Call (508) 713-8433 or send us a message for a free quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title={
          <>
            LET&rsquo;S PLAN YOUR{" "}
            <span className="text-accent-light">EVENT.</span>
          </>
        }
        intro="Call us for the fastest response, or send a message and we'll get back to you about your free quote."
      />
      <section className="bg-ink">
        <div className="mx-auto grid max-w-content gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-body-ondark">
              Reach us <span className="text-accent-light">directly</span>
            </h2>
            <dl className="mt-6 space-y-4 text-body-ondark">
              <div>
                <dt className="text-xs uppercase tracking-widest text-body-muted">Phone</dt>
                <dd className="mt-1">
                  <a href={company.phoneHref} className="text-lg text-accent-light hover:underline">
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-body-muted">Address</dt>
                <dd className="mt-1 text-body-muted">{company.addressLine}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-body-muted">Hours</dt>
                <dd className="mt-1 text-body-muted">{company.hours}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-body-muted">Email</dt>
                <dd className="mt-1 text-body-muted">{company.email}</dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-light hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

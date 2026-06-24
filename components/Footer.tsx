import Link from "next/link";
import { company, services, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="font-display text-2xl uppercase tracking-tight text-body-ondark"
          >
            Marcia&apos;s <span className="text-accent-light">LED</span>
          </Link>
          <address className="mt-4 not-italic text-sm text-body-muted">
            {company.name}
            <br />
            {company.addressLine}
            <br />
            <a href={company.phoneHref} className="text-accent-light hover:underline">
              {company.phoneDisplay}
            </a>
          </address>
          <p className="mt-3 text-xs text-body-muted">{company.hours}</p>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-tight">Services</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-body-muted hover:text-accent-light">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-tight">Company</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about_us" className="text-body-muted hover:text-accent-light">About Us</Link></li>
            <li><Link href="/contact" className="text-body-muted hover:text-accent-light">Contact</Link></li>
            <li><Link href="/gallery" className="text-body-muted hover:text-accent-light">Gallery</Link></li>
          </ul>
          <h2 className="mt-6 font-display text-lg uppercase tracking-tight">Resources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/pricing" className="text-body-muted hover:text-accent-light">Pricing</Link></li>
            <li><Link href="/catering-menu" className="text-body-muted hover:text-accent-light">Catering Menu</Link></li>
            <li><Link href="/gallery" className="text-body-muted hover:text-accent-light">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg uppercase tracking-tight">Connect</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-muted hover:text-accent-light"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={company.reviewHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:underline"
              >
                Leave us a Review
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-6 text-xs text-body-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {company.name}</p>
          <Link href="/accessibility" className="hover:text-accent-light">
            Accessibility Statement
          </Link>
        </div>
      </div>
    </footer>
  );
}

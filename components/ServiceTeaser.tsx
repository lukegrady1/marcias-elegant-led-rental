import Link from "next/link";
import { services } from "@/lib/content";

export default function ServiceTeaser() {
  return (
    <section className="bg-ink-elevated">
      <div className="mx-auto max-w-content px-5 py-10">
        <p className="text-center text-lg text-body-ondark">
          Top choice in Worcester for photo booth rentals, LED tents, and party
          services.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm uppercase tracking-wide">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="text-accent-light hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

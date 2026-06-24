import Link from "next/link";
import { services, type Service } from "@/lib/content";

export default function CrossLinks({ exclude }: { exclude?: string }) {
  const others: Service[] = services.filter((s) => s.slug !== exclude);
  return (
    <section className="bg-ink-elevated">
      <div className="mx-auto max-w-content px-5 py-16">
        <h2 className="font-display text-2xl uppercase tracking-tight text-body-ondark">
          Explore more <span className="text-accent-light">services</span>
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="block rounded-card border border-hairline bg-ink p-4 transition-colors hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="font-display text-lg uppercase tracking-tight text-body-ondark">
                  {s.title}
                </span>
                <span className="mt-1 block text-sm text-body-muted">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

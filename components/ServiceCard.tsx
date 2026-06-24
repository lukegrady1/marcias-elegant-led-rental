import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/content";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/${s.slug}`}
      className="group relative block overflow-hidden rounded-card bg-surface-card shadow-sm transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={s.image}
          alt={s.alt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl uppercase tracking-tight text-ink">
          {s.title}
        </h3>
        <p className="mt-2 text-ink/80 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-40 md:group-hover:opacity-100">
          {s.blurb}
        </p>
        <span className="mt-4 inline-block font-sans text-sm font-semibold uppercase tracking-wide text-accent">
          Learn more →
        </span>
      </div>
    </Link>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}

export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="border-b border-hairline bg-ink-elevated">
      <div className="mx-auto max-w-content px-5 py-16 md:py-20">
        <p className="font-display text-[15px] uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[40px] uppercase leading-[0.95] tracking-tight text-body-ondark sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-body-muted">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="font-display text-[15px] uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl ${
          light ? "text-ink" : "text-body-ondark"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

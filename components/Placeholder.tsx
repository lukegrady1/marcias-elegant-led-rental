interface PlaceholderProps {
  label: string;
  className?: string;
  ratioClass?: string;
}

// Reusable flat plum placeholder block. Used where a real photo is pending.
export default function Placeholder({
  label,
  className = "",
  ratioClass = "aspect-[4/3]",
}: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} [placeholder image — confirm]`}
      className={`flex ${ratioClass} w-full items-center justify-center rounded-card border border-hairline bg-ink-elevated text-center ${className}`}
    >
      <span className="px-4 font-display text-xl uppercase tracking-tight text-body-muted">
        {label}
      </span>
    </div>
  );
}

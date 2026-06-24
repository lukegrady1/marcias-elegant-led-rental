import Link from "next/link";

type Variant = "primary" | "accent" | "ghost";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-light",
  accent:
    "border border-accent text-accent-light hover:bg-accent hover:text-white",
  ghost:
    "border border-hairline text-body-ondark hover:border-accent hover:text-accent-light",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const isTel = href.startsWith("tel:");
  const cls = `inline-flex items-center justify-center rounded-btn px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${styles[variant]} ${className}`;
  return isTel ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

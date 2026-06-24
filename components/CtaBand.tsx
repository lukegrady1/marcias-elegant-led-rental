import Button from "./Button";
import { company, ctaWording } from "@/lib/content";

interface CtaBandProps {
  title: React.ReactNode;
  elevated?: boolean;
}

export default function CtaBand({ title, elevated = false }: CtaBandProps) {
  return (
    <section className={elevated ? "bg-ink-elevated" : "bg-ink"}>
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-5 py-16 text-center">
        <h2 className="font-display text-3xl uppercase leading-tight tracking-tight text-body-ondark sm:text-4xl">
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={company.phoneHref} variant="primary">
            {ctaWording.callPrimary}
          </Button>
          <Button href="/contact" variant="ghost">
            {ctaWording.quoteSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Button from "./Button";
import { hero, company, ctaWording } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="font-display text-[15px] uppercase tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-[44px] uppercase leading-[0.95] tracking-tight text-body-ondark sm:text-6xl lg:text-7xl">
            {hero.headlineLead}{" "}
            <span className="text-accent-light">{hero.headlineAccent}</span>{" "}
            {hero.headlineTail}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body-muted">
            {hero.subcopy}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={company.phoneHref} variant="primary">
              {ctaWording.callPrimary}
            </Button>
            <Button href="/contact" variant="ghost">
              {ctaWording.quoteSecondary}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-card border border-hairline">
            <div className="relative aspect-[5/4] w-full">
              <Image
                src="/images/hero.svg"
                alt="A lit event with a 360 photo booth in action [confirm — placeholder image]"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

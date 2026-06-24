import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "./PageHero";
import CrossLinks from "./CrossLinks";
import Button from "./Button";
import { getService, company, ctaWording } from "@/lib/content";

export default function ServicePage({ slug }: { slug: string }) {
  const s = getService(slug);
  if (!s) notFound();

  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title={
          <>
            {s.title.toUpperCase()}
          </>
        }
        intro={s.blurb}
      />
      <section className="bg-ink">
        <div className="mx-auto grid max-w-content items-start gap-10 px-5 py-16 lg:grid-cols-2">
          <div className="overflow-hidden rounded-card border border-hairline">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-body-ondark">
              {s.description}
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
        </div>
      </section>
      <CrossLinks exclude={s.slug} />
    </>
  );
}

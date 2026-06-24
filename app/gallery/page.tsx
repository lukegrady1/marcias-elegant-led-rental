import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Gallery | Marcia's Elegant LED Rental Logistic",
  description:
    "A look at our photo booths, LED tents and catering setups across Worcester, MA events. Images are placeholders pending real photography.",
};

const items = [
  { src: "/images/gallery-1.svg", label: "Event setup" },
  { src: "/images/gallery-2.svg", label: "360 booth in action" },
  { src: "/images/gallery-3.svg", label: "Glowing LED tent" },
  { src: "/images/gallery-4.svg", label: "Catering tablescape" },
  { src: "/images/gallery-5.svg", label: "Guests with props" },
  { src: "/images/gallery-6.svg", label: "Lit dance floor" },
  { src: "/images/gallery-7.svg", label: "Digital booth" },
  { src: "/images/gallery-8.svg", label: "Evening celebration" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="GALLERY"
        title={
          <>
            MOMENTS WORTH <span className="text-accent-light">REMEMBERING.</span>
          </>
        }
        intro="A preview of our work. All images are placeholders pending Marcia's real photography — confirm."
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-content px-5 py-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-card border border-hairline"
              >
                <Image
                  src={item.src}
                  alt={`${item.label} [confirm — placeholder image]`}
                  fill
                  loading="lazy"
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={
          <>
            LET&rsquo;S CREATE YOUR{" "}
            <span className="text-accent-light">MOMENTS.</span>
          </>
        }
        elevated
      />
    </>
  );
}

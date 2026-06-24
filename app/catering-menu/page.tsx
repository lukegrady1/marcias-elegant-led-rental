import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Catering Menu | Marcia's Elegant LED Rental Logistic",
  description:
    "Sample catering menu for weddings, corporate events and parties in Worcester, MA. Menus are customized — final selections confirmed with you.",
};

const sections = [
  {
    name: "Starters",
    items: ["[confirm] — Seasonal soup", "[confirm] — Garden salad", "[confirm] — Bruschetta"],
  },
  {
    name: "Mains",
    items: ["[confirm] — Herb-roasted chicken", "[confirm] — Vegetable pasta", "[confirm] — Carving station"],
  },
  {
    name: "Desserts & Beverages",
    items: ["[confirm] — Assorted desserts", "[confirm] — Coffee & tea", "[confirm] — Punch station"],
  },
];

export default function CateringMenuPage() {
  return (
    <>
      <PageHero
        eyebrow="CATERING MENU"
        title={
          <>
            A MENU MADE <span className="text-accent-light">YOURS.</span>
          </>
        }
        intro="A sample of what we offer. Every menu is customized to your event, style and budget — confirm final selections with us."
      />
      <section className="bg-ink">
        <div className="mx-auto max-w-content px-5 py-16">
          <p className="mb-8 rounded-card border border-accent/40 bg-ink-elevated p-4 text-sm text-accent-light">
            [confirm] — This is a placeholder sample menu. Actual dishes,
            packages and pricing are customized and must be confirmed before
            launch.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {sections.map((sec) => (
              <div
                key={sec.name}
                className="rounded-card border border-hairline bg-ink-elevated p-6"
              >
                <h2 className="font-display text-xl uppercase tracking-tight text-body-ondark">
                  {sec.name}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-body-muted">
                  {sec.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={
          <>
            PLAN YOUR <span className="text-accent-light">CATERING.</span>
          </>
        }
        elevated
      />
    </>
  );
}

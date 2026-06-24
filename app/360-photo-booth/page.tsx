import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/content";

const slug = "360-photo-booth";

export function generateMetadata(): Metadata {
  const s = getService(slug);
  return {
    title: s ? `${s.title} | Marcia's Elegant LED Rental Logistic` : "Services",
    description: s?.blurb,
  };
}

export default function Page() {
  return <ServicePage slug={slug} />;
}

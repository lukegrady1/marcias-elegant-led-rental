"use client";

import { marqueePhrases } from "@/lib/content";

export default function BadgeMarquee() {
  const track = [...marqueePhrases, ...marqueePhrases];
  return (
    <section
      aria-label="Trust highlights"
      className="overflow-hidden border-y border-accent/40 bg-ink py-4"
    >
      <div className="group flex">
        <ul className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused]">
          {track.map((phrase, i) => (
            <li
              key={`${phrase}-${i}`}
              className="flex shrink-0 items-center gap-8 whitespace-nowrap"
            >
              <span className="font-display text-base uppercase tracking-wide text-body-ondark">
                {phrase}
              </span>
              <span aria-hidden="true" className="text-accent">
                •
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

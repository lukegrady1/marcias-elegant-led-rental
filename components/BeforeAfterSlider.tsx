"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/9] w-full cursor-ew-resize select-none overflow-hidden rounded-card border border-hairline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      onPointerMove={(e) => {
        if (e.buttons === 1) move(e.clientX);
      }}
      onPointerDown={(e) => move(e.clientX)}
      role="slider"
      aria-label="Lights off to lights on"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      <Image src={afterSrc} alt={afterAlt} fill sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-accent" />
        <div className="absolute top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-xs text-white">
          ↔
        </div>
      </div>
      <span className="absolute bottom-3 left-3 rounded bg-ink/70 px-2 py-1 text-xs uppercase tracking-wide text-body-ondark">
        Lights Off
      </span>
      <span className="absolute bottom-3 right-3 rounded bg-accent/90 px-2 py-1 text-xs uppercase tracking-wide text-white">
        Lights On
      </span>
    </div>
  );
}

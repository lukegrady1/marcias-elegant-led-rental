"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { primaryNav, services, company } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close the Services dropdown on outside click or Escape. Using a blur
  // handler instead would fire before a dropdown link's click registers,
  // making the links unreachable.
  useEffect(() => {
    if (!servicesOpen) return;

    function onPointerDown(e: MouseEvent) {
      if (!servicesRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-hairline bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="font-display text-xl uppercase tracking-tight text-body-ondark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Marcia&apos;s <span className="text-accent-light">LED</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 lg:flex"
        >
          <UnderlineLink href="/">Home</UnderlineLink>
          <UnderlineLink href="/about_us">About</UnderlineLink>
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
              className="relative font-sans text-sm font-medium uppercase tracking-wide text-body-ondark transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Services ▾
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-card border border-hairline bg-ink-elevated p-2 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-body-ondark transition-colors hover:bg-ink hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <UnderlineLink href="/pricing">Pricing</UnderlineLink>
          <UnderlineLink href="/gallery">Gallery</UnderlineLink>
          <UnderlineLink href="/contact">Contact</UnderlineLink>
        </nav>

        <a
          href={company.phoneHref}
          className="hidden rounded-btn bg-accent px-5 py-2.5 font-sans text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink lg:inline-flex"
        >
          Call {company.phoneDisplay}
        </a>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="text-accent lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-xl uppercase tracking-tight">
              Menu
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-8 flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
            {primaryNav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 font-display text-2xl uppercase tracking-tight text-body-ondark hover:text-accent-light"
              >
                {l.label}
              </Link>
            ))}
            <span className="mt-4 px-2 text-xs uppercase tracking-widest text-body-muted">
              Services
            </span>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base text-body-ondark hover:text-accent-light"
              >
                {s.title}
              </Link>
            ))}
          </nav>
          <a
            href={company.phoneHref}
            className="mt-4 shrink-0 rounded-btn bg-accent px-5 py-3.5 text-center font-sans text-sm font-semibold uppercase tracking-wide text-white"
          >
            Call {company.phoneDisplay}
          </a>
        </div>
      )}
    </>
  );
}

function UnderlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group relative font-sans text-sm font-medium uppercase tracking-wide text-body-ondark transition-colors hover:text-accent-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

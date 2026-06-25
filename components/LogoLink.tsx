"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LogoLinkProps {
  width: number;
  height: number;
  imgClassName: string;
  linkClassName: string;
  priority?: boolean;
  // Runs on every click (e.g. close the mobile menu). Fires before navigation.
  onNavigate?: () => void;
}

export default function LogoLink({
  width,
  height,
  imgClassName,
  linkClassName,
  priority,
  onNavigate,
}: LogoLinkProps) {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent) {
    onNavigate?.();
    // Already on the home page: don't re-navigate, just scroll back to top.
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link
      href="/"
      aria-label="Marcia's Elegant LED Rental Logistic LLC — home"
      onClick={handleClick}
      className={linkClassName}
    >
      <Image
        src="/images/logo.webp"
        alt="Marcia's Elegant LED Rental Logistic LLC logo"
        width={width}
        height={height}
        priority={priority}
        className={imgClassName}
      />
    </Link>
  );
}

// Centralized, typed content for Marcia's Elegant LED Rental Logistic.
// Items marked [confirm] were not on the live site and must be verified before launch.

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  image: string;
  alt: string;
}

export interface ValueCard {
  marker: string;
  title: string;
  line: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ReviewPlaceholder {
  name: string;
  quote: string;
  meta: string;
}

export const company = {
  name: "Marcia's Elegant LED Rental Logistic",
  shortName: "Marcia's Elegant LED",
  tagline: "Elegant LED events, start to finish.",
  phoneDisplay: "(508) 713-8433",
  phoneHref: "tel:+15087138433",
  email: "[confirm] — no public email; contact by phone or form",
  addressLine: "Worcester, MA 01610",
  city: "Worcester, MA",
  hours: "Open 24 hours, 7 days a week [confirm phrasing]",
  experienceYears: "25",
  reviewHref: "https://g.page/r/CWgJl-Jqr1o9EAI/review",
} as const;

export const socials: SocialLink[] = [
  { label: "Google", href: "https://maps.app.goo.gl/H1EKR6qzw5YC7Jgv8" },
  { label: "Pinterest", href: "https://www.pinterest.com/MarciasElegantLEDRental/" },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/marcia-s-elegant-led-rental-logistics-worcester",
  },
];

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about_us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    slug: "catering-services",
    title: "Catering Services",
    blurb:
      "Customized catering for weddings, corporate events, and private parties — fine ingredients, beautiful presentation, every detail attended to.",
    description:
      "Customized catering for weddings, corporate events, and private parties. We use fine ingredients and beautiful presentation, attending to every detail so your guests are cared for from the first plate to the last. Tell us your event and headcount and we will tailor a menu that fits your style and budget.",
    image: "/images/catering.svg",
    alt: "Catering tablescape with elegant plated dishes [confirm — placeholder image]",
  },
  {
    slug: "photo-booth-rentals",
    title: "Photo Booth Rentals",
    blurb:
      "Props, customization, and state-of-the-art booths that turn great moments into pictures that last a lifetime.",
    description:
      "Props, customization, and state-of-the-art booths that turn great moments into pictures that last a lifetime. Our photo booths add excitement and flair to your next event, and every booth comes ready to transform any event into a memorable occasion. Book one of our photo booths today.",
    image: "/images/photo-booth.svg",
    alt: "Guests posing with props at a photo booth [confirm — placeholder image]",
  },
  {
    slug: "360-photo-booth",
    title: "360 Photo Booth",
    blurb:
      "State-of-the-art 360° capture — relive picture-perfect moments from every angle, with high-quality prints and digital copies.",
    description:
      "State-of-the-art 360° capture lets you relive picture-perfect moments from every angle. Our 360 photo booth captures all angles and sides of a particular moment, then delivers high-quality prints and digital copies your guests can keep and share. It is the showpiece your event has been waiting for.",
    image: "/images/360-booth.svg",
    alt: "360 photo booth platform in action at an event [confirm — placeholder image]",
  },
  {
    slug: "led-tent-rental",
    title: "LED Tent Rental",
    blurb:
      "Vibrant, customizable LED tents in multiple sizes that create an unforgettable atmosphere for any event.",
    description:
      "Vibrant, customizable LED tents in multiple sizes create an unforgettable atmosphere for any event. Watch the room come alive as the tent glows — the perfect way to add some excitement and flair to your next celebration, dusk to dawn.",
    image: "/images/led-tent.svg",
    alt: "Glowing LED tent lit purple at dusk [confirm — placeholder image]",
  },
  {
    slug: "digital-photo-booth-services",
    title: "Digital Photo Booth Services",
    blurb:
      "Latest-tech digital booths with wide customization — perfect for weddings, corporate events, and family gatherings.",
    description:
      "Latest-tech digital booths with wide customization, perfect for weddings, corporate events, and family gatherings. Share instantly, customize the experience to your theme, and give every guest a moment to remember.",
    image: "/images/digital-booth.svg",
    alt: "Digital photo booth screen at a celebration [confirm — placeholder image]",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const valueCards: ValueCard[] = [
  { marker: "25", title: "Years' Experience", line: "Trusted for a quarter century of celebrations." },
  { marker: "♀", title: "Family & Woman-Owned", line: "A local business that treats your event like our own." },
  { marker: "✓", title: "Licensed & Insured", line: "A fully insured Massachusetts LLC." },
  { marker: "★", title: "All-In-One", line: "Booths, LED tents, lighting, and catering together." },
];

export const processSteps: ProcessStep[] = [
  { number: "1", title: "Call or Request a Quote", detail: "Reach out by phone or the contact form and tell us about your event." },
  { number: "2", title: "We Plan Your Setup", detail: "Booth, tent, lighting, and catering — tailored to your venue and date." },
  { number: "3", title: "We Deliver & Set Up", detail: "We arrive on time and handle delivery and setup, start to finish." },
  { number: "4", title: "You Celebrate", detail: "You enjoy the night — we handle the rest." },
];

export const marqueePhrases: string[] = [
  "Family & Woman-Owned",
  "25 Years' Experience",
  "Licensed & Insured LLC",
  "360 + Digital Photo Booths",
  "LED Tents & Lighting",
  "Catering Available",
  "Serving Worcester, MA",
  "Available 7 Days a Week",
];

// [confirm] — no testimonials published on the live site. Placeholders only; do not present as real quotes.
export const reviewPlaceholders: ReviewPlaceholder[] = [
  { name: "[confirm — Google reviewer]", quote: "Review text will be pulled from our Google Business Profile.", meta: "Worcester, MA" },
  { name: "[confirm — Google reviewer]", quote: "Review text will be pulled from our Google Business Profile.", meta: "Worcester, MA" },
  { name: "[confirm — Google reviewer]", quote: "Review text will be pulled from our Google Business Profile.", meta: "Worcester, MA" },
];

export const hero = {
  eyebrow: "WORCESTER, MA · EVENT RENTALS",
  headlineLead: "ELEGANT",
  headlineAccent: "LED",
  headlineTail: "EVENTS, START TO FINISH.",
  subcopy:
    "360 & digital photo booths, glowing LED tents, lighting and catering — everything your wedding, party, or corporate event needs to shine. Family & woman-owned, insured, 25 years of experience.",
} as const;

export const aboutCopy = {
  eyebrow: "OUR STORY",
  title: "FAMILY & WOMAN-OWNED, 25 YEARS STRONG.",
  body:
    "Marcia's Elegant LED Rental Logistic is a family- and woman-owned business based in Worcester. We're an insured LLC with 25 years of experience, offering top-of-the-line equipment and the latest special-effects technology. Our goal is long-term relationships and being the go-to company for reliable, affordable event rentals.",
} as const;

export const ctaWording = {
  callPrimary: "Call (508) 713-8433",
  quoteSecondary: "Get a Free Quote",
  review: "Leave us a Review",
} as const;

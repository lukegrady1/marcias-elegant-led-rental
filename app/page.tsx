import Hero from "@/components/Hero";
import ServiceTeaser from "@/components/ServiceTeaser";
import BadgeMarquee from "@/components/BadgeMarquee";
import Services from "@/components/Services";
import CtaBand from "@/components/CtaBand";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import ValueCards from "@/components/ValueCards";
import Process from "@/components/Process";
import ServiceArea from "@/components/ServiceArea";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTeaser />
      <BadgeMarquee />
      <Services />
      <CtaBand
        title={
          <>
            PLANNING AN EVENT IN WORCESTER?{" "}
            <span className="text-accent-light">LET&rsquo;S TALK.</span>
          </>
        }
      />
      <BeforeAfter />
      <Reviews />
      <About />
      <ValueCards />
      <Process />
      <ServiceArea />
      <CtaBand
        title={
          <>
            LET&rsquo;S MAKE YOUR EVENT{" "}
            <span className="text-accent-light">UNFORGETTABLE.</span>
          </>
        }
        elevated
      />
    </>
  );
}

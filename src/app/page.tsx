import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Statement } from "@/components/sections/Statement";
import { Gallery } from "@/components/sections/Gallery";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Instagram } from "@/components/sections/Instagram";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Statement />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Instagram />
      <Faq />
      <Contact />
    </>
  );
}

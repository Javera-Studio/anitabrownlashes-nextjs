import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { PortraitQuote } from "@/components/sections/PortraitQuote";
import { About } from "@/components/sections/About";
import { Statement } from "@/components/sections/Statement";
import { Gallery } from "@/components/sections/Gallery";
import { PortraitQuoteReverse } from "@/components/sections/PortraitQuoteReverse";
import { StudioAmbience } from "@/components/sections/StudioAmbience";
import { StudioGallery } from "@/components/sections/StudioGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Instagram } from "@/components/sections/Instagram";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PortraitQuote />
      <About />
      <Statement />
      <Gallery />
      <Instagram />
      <PortraitQuoteReverse />
      <StudioAmbience />
      <StudioGallery />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}

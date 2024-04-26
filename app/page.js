import About from "@/components/About";
import Blogs from "@/components/Blogs";
import { CallToAction } from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Blogs />
      {/* <Reviews /> */}
      <CallToAction />
    </main>
  );
}

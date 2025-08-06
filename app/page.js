import About from "@/components/About";
import Blogs from "@/components/Blogs";
import { CallToAction } from "@/components/CallToAction";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Blogs />

      <CallToAction />
    </main>
  );
}

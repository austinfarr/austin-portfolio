import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Image
            className="mb-8"
            src="/a-logo.svg"
            alt="Logo"
            width={54}
            height={54}
            priority
          />
          <h2 className="h2 max-w-xl text-center mb-8">
            Ready to bring your ideas to life?
          </h2>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

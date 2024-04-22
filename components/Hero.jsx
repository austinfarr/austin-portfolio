import Link from "next/link";
import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from "react-icons/ri";
import { Button } from "./ui/button";
import { Folder, Send } from "lucide-react";
import { Socials } from "./Socials";
import { DevImg } from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">
              Hi, I&apos;m Austin
              {/* Hello, my name is Austin Farr */}
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 my-1">
              I&apos;m a web developer with a passion for creating beautiful and
              functional websites.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send />{" "}
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                View Projects <Folder />{" "}
              </Button>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* Badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem] w-[200px] h-[68px]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of Experience"
            />
            {/* Badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem] w-[220px] h-[68px]"
              icon={<RiTodoFill />}
              endCountNum={15}
              endCountText={"+"}
              badgeText="Finished Projects"
            />
            {/* Badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8 w-[220px] h-[68px]"
              icon={<RiTeamFill />}
              endCountNum={30}
              endCountText={"+"}
              badgeText="Happy Clients"
            />
            {/* image */}
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[509px] h-[461px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/Developer2.png"
            />
          </div>
        </div>
        <div className="hidden lg:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

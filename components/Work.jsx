"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

//Swiper React imports
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";

const projectData = [
  {
    image: "/work/AriseAfricaMockup.png",
    category: "React",
    name: "Arise Auctions",
    description:
      "Designed and deployed a real-time auction application to enhance Arise Africa's donor engagement for the benefit of Zambia's youth.",
    tools: ["Next.js", "Supabase", "MaterialUI", "Twilio Auth"],
    link: "/",
    github: "/",
  },
  {
    image: "/work/PortfolioSite.png",
    category: "Next.js",
    name: "Portfolio Website",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
    tools: ["Next.js", "TailwindCSS", "ShadCN", "Framer Motion"],
    link: "/",
    github: "/",
  },
  // {
  //   image: "/work/2.png",
  //   category: "Next.js",
  //   name: "Nexa Website",
  //   description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
  //   link: "/",
  //   github: "/",
  // },
  // {
  //   image: "/work/1.png",
  //   category: "Next.js",
  //   name: "Nexa Website",
  //   description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
  //   link: "/",
  //   github: "/",
  // },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] 
        flex flex-col justify-center items-center xl:items-start "
        >
          <h2 className="section-title mb-4 ">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[540px] "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {/* show only  the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;

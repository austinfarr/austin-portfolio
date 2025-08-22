"use client";

import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";
import { projectData } from "@/lib/projectData";

const Work = () => {
  // Get the 2 most recent projects (highest IDs)
  const recentProjects = [...projectData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 2);

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] 
        flex flex-col justify-center items-center xl:items-start "
        >
          <h2 className="section-title mb-8 ">Latest Projects</h2>
          {/* <p className="subtitle mb-8">Lorem ipsum dolor </p> */}
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* projects grid */}
        <div className="xl:max-w-[950px] xl:absolute right-0 top-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentProjects.map((project) => (
              <div key={project.id} className="h-auto">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

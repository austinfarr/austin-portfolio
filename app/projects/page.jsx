"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
    image: "/work/3.png",
    category: "React",
    name: "Nexa Website",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next.js",
    name: "Nexa Website",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Next.js",
    name: "Nexa Website",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Next.js",
    name: "Nexa Website",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
    github: "/",
  },
  // {
  //   image: "/work/1.png",
  //   category: "Vue.js",
  //   name: "Nexa Website",
  //   description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
  //   link: "/",
  //   github: "/",
  // },
];

//remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((project) => project.category)),
];
console.log(uniqueCategories);

const numberOfCategories = uniqueCategories.length;
const numCols = `md:grid-cols-${numberOfCategories}`;

const ProjectsPage = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    if (category === "all projects") {
      return project;
    } else {
      return project.category === category;
    }
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className={`w-full grid h-full ${numCols} lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none`}
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize min-w-[162px]"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsPage;

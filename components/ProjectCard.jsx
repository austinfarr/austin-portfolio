import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Link2Icon } from "lucide-react";
import { RiGithubFill, RiGithubLine } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { object } from "zod";
import { Button } from "./ui/button";

const ProjectCard = ({ project }) => {
  return (
    // <Dialog>
    // <DialogTrigger asChild>
    <Link passHref href={`/projects/${project.id}`}>
      <Card className="group overflow-hidden relative dark:border-white/30 cursor-pointer min-h-[95%]">
        <CardHeader className="p-0">
          {/* Image */}
          <div
            className="relative w-full h-[300px] flex items-center justify-center bg-tertiary 
        dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark 
        xl:bg-[110%] xl:bg-no-repeat xl:overflow-hidden  "
          >
            <div className="rounded-full">
              <Image
                src={project.image}
                fill
                alt={project.name}
                style={{
                  objectFit: "contain",
                  paddingTop: "32px",
                }}
              />
            </div>

            <div
              className="flex gap-x-4 w-full h-full bg-primary/70 dark:bg-white/90 scale-0 opacity-0 group-hover:scale-100 
            group-hover:opacity-100 transition-all duration-300 items-center justify-center"
            >
              <Button className="bg-secondary rounded-full hover:bg-secondary hover:scale-125 transition-all duration-300">
                See More
              </Button>
              {/* <Link
                  href={project.link}
                  className="  bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 
            group-hover:opacity-100 transition-all duration-200"
                >
                  <Link2Icon className="text-white" />
                </Link>
                <Link
                  href={project.github}
                  className="  bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 
            group-hover:opacity-100 transition-all duration-200"
                >
                  <RiGithubLine className="text-white" size={25} />
                </Link> */}
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
            {project.category}
          </Badge>
          <h4 className="h4 mb-1">{project.name}</h4>
          <p className="text-muted-foreground text-md">
            {project.short_description}
          </p>
          <div className="border-b border-border my-4"></div>
          {/* Tools */}
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {project.tools &&
              project.tools.map((tool, index) => {
                return (
                  // <div key={index} className="text-xs text-muted-foreground ">
                  //   {tool}
                  // </div>
                  <Badge
                    key={index}
                    className="text-xs bg-secondary/20 dark:bg-white/20 rounded-md"
                  >
                    {tool}
                  </Badge>
                );
              })}
          </div>
        </div>
      </Card>
    </Link>
    // </DialogTrigger>
    // <DialogContent className="min-w-[60%] max-w-[80%] flex justify-center items-center flex-col ">
    //   <div className=" relative w-full lg:h-[50vh] h-[30vh]  flex  justify-center my-4">
    //     <Image
    //       className=" "
    //       src={project.image}
    //       fill
    //       alt={project.name}
    //       style={{
    //         objectFit: "contain",
    //       }}
    //     />
    //   </div>
    //   <DialogHeader>
    //     <DialogTitle>{project.name}</DialogTitle>
    //     <DialogDescription>{project.long_description}</DialogDescription>
    //   </DialogHeader>
    // </DialogContent>
    // </Dialog>
  );
};

export default ProjectCard;

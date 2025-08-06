import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";

const ProjectCard = ({ project }) => {
  return (
    <Link passHref href={`/projects/${project.id}`}>
      <Card className="group overflow-hidden relative dark:border-white/30 cursor-pointer min-h-[95%]">
        <CardHeader className="p-0">
          <div
            className="relative w-full h-[300px] flex items-center justify-center bg-tertiary 
        dark:bg-secondary/40 xl:bg-[110%] xl:bg-no-repeat xl:overflow-hidden  "
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
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <h4 className="h4 mb-1">{project.name}</h4>
          <p className="text-muted-foreground text-md">
            {project.short_description}
          </p>
          <div className="border-b border-border my-4"></div>

          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {project.tools &&
              project.tools.map((tool, index) => {
                return (
                  <Badge
                    key={index}
                    className="text-xs bg-secondary/40 dark:bg-white/20 rounded-md"
                  >
                    {tool}
                  </Badge>
                );
              })}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;

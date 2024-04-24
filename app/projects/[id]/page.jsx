import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectData } from "@/lib/projectData";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

const ProjectIDPage = ({ params }) => {
  const { id } = params;

  const project = projectData.find((project) => project.id === parseInt(id));

  const {
    name,
    image,
    category,
    short_description,
    long_description,
    tools,
    link,
    github,
  } = project;

  return (
    <div className="container mx-auto my-8 p-4 grid lg:grid-cols-2 grid-cols-1 gap-x-8 ">
      <div className="xl:mr-4 sm:px-0 px-6">
        <h2 className="text-6xl font-bold mb-4 ">{name}</h2>

        {/* <div className="mb-6"> */}
        <div className="mb-6">
          {long_description.split("\n").map((paragraph, index) => (
            <p key={index} className="text-md mb-6">
              {paragraph}
            </p>
          ))}
        </div>
        {/* </div> */}

        <div className="my-8">
          <h2 className="text-3xl font-semibold mb-3">
            Tools used in this project:
          </h2>
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {project.tools &&
              project.tools.map((tool, index) => {
                return (
                  <Badge
                    key={index}
                    className="text-sm bg-secondary/30 dark:bg-white/20 rounded-md"
                  >
                    {tool}
                  </Badge>
                );
              })}
          </div>
        </div>
        {github && (
          <div className="flex items-center my-4">
            <Link href={github}>
              <Button className="bg-secondary hover:bg-secondary hover:scale-110 transition-all duration-200  text-white">
                <GitHubLogoIcon className="w-6 h-6 mr-2" />
                <h3 className="text-lg ">View on Github</h3>
              </Button>
            </Link>
          </div>
        )}
      </div>
      {/* <div> */}
      <Image
        src={image}
        alt={`Screenshot of ${name} project`}
        className="xl:w-full sm:p-0 px-6 mx-auto mb-6 rounded-lg lg:shadow-lg"
        width={1000}
        height={1000}
      />
      {/* </div> */}
    </div>
  );
};

export default ProjectIDPage;

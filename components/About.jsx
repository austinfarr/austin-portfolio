import { GraduationCap, HomeIcon, MailIcon, User2 } from "lucide-react";
import Image from "next/image";

const skillData = [
  {
    title: "skills",
    data: [
      { name: "Front-end Development" },
      { name: "Website Design" },
      { name: "React" },
      { name: "Node" },
      { name: "SQL" },
      { name: "Python" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/logo-icons/javascript.svg", label: "JavaScript" },
      { imgPath: "/logo-icons/typescript.svg", label: "TypeScript" },
      { imgPath: "/logo-icons/csharp.svg", label: "C#" },
      { imgPath: "/logo-icons/java.svg", label: "Java" },
      { imgPath: "/logo-icons/python.svg", label: "Python" },
      { imgPath: "/logo-icons/react.svg", label: "React" },
      { imgPath: "/logo-icons/nextjs.svg", label: "Next.js" },
      { imgPath: "/logo-icons/node.svg", label: "Node.js" },
      { imgPath: "/logo-icons/dotnet.svg", label: ".NET" },
      { imgPath: "/logo-icons/supabase.svg", label: "Supabase" },
      { imgPath: "/logo-icons/postgresql.svg", label: "PostgreSQL" },
      { imgPath: "/logo-icons/mongodb.svg", label: "MongoDB" },
      { imgPath: "/logo-icons/aws.svg", label: "AWS" },
      { imgPath: "/logo-icons/azure.svg", label: "Azure" },
      { imgPath: "/logo-icons/docker.svg", label: "Docker" },
      { imgPath: "/logo-icons/tailwind.svg", label: "Tailwind CSS" },
      { imgPath: "/logo-icons/openai.svg", label: "OpenAI" },
      { imgPath: "/logo-icons/claude.svg", label: "Claude" },
      { imgPath: "/logo-icons/figma.svg", label: "Figma" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="pb-12 xl:py-24 mb-10 lg:mb-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          <div className="max-w-lg px-4 flex flex-col">
            <h2 className="text-[40px] lg:text-[48px] font-bold mb-2">
              I bring ideas to life
            </h2>
            {/* Animated Primary Color Divider */}
            <div className="hidden sm:block relative w-[25%] mb-6 overflow-hidden">
              <div className="h-1 bg-primary rounded-full flex-1 animate-pulse"></div>
            </div>
            <p className="subtitle dark:text-white">
              As a full-stack consultant, I&apos;ve shipped software across a
              lot of stacks. These are the tools I reach for most — but the job
              dictates the toolbox.
            </p>
          </div>

          <div className="flex items-center justify-center px-4">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[760px] w-full xl:min-w-[656px]">
              {getData(skillData, "tools").data.map((item, index) => {
                const { imgPath } = item;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start w-[64px] sm:w-[72px] lg:w-[80px] xl:hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <div className="relative w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] ">
                      <Image src={imgPath} alt="tool" priority fill />
                    </div>
                    <div className="text-center text-muted-foreground dark:text-white text-xs sm:text-sm">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

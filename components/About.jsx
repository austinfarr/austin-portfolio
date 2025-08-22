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
      { imgPath: "/logo-icons/html.svg", label: "HTML" },
      { imgPath: "/logo-icons/css.svg", label: "CSS" },
      { imgPath: "/logo-icons/javascript.svg", label: "JavaScript" },
      { imgPath: "/logo-icons/react.svg", label: "React" },
      { imgPath: "/logo-icons/nextjs.svg", label: "Next.js" },
      { imgPath: "/logo-icons/node.svg", label: "Node.js" },
      { imgPath: "/logo-icons/mui.svg", label: "Material UI" },
      { imgPath: "/logo-icons/tailwind.svg", label: "Tailwind CSS" },
      { imgPath: "/logo-icons/docker.svg", label: "Docker" },
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
            <h2 className="text-[40px] lg:text-[48px] font-bold mb-6">
              I bring ideas to life
            </h2>
            <p className="subtitle">
              As a full-stack Web Developer, I specialize in crafting intuitive
              websites with cutting-edge technology, delivering dynamic and
              engaging user experiences
            </p>
          </div>

          <div className="flex items-center justify-center px-4">
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6 max-w-[700px] w-full">
              {getData(skillData, "tools").data.map((item, index) => {
                const { imgPath } = item;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center xl:hover:scale-110 transition-all duration-300 ease-in-out"
                  >
                    <div className="relative w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] ">
                      <Image src={imgPath} alt="tool" priority fill />
                    </div>
                    <div className="text-center text-muted-foreground text-sm">
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

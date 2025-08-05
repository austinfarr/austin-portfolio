import {
  Briefcase,
  GraduationCap,
  HomeIcon,
  MailIcon,
  User2,
} from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Austin Farr",
  },
  {
    icon: <MailIcon size={20} />,
    text: "austin@farrnet.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Studied Finance and Computer Science ",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Resides in Fort Worth, Texas",
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        university: "Texas Christian University",
        qualification: "Bachelor of Science",
        years: "2019-2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Capco",
        role: "Full Stack Software Engineer - Associate Consultant",
        years: "June 2023 - Present",
      },
      //   {
      //     company: "Capco",
      //     role: "Full Stack Software Engineer - Associate Consultant",
      //     years: "June 2023 - Present",
      //   },
    ],
  },
];

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
      { imgPath: "/logo-icons/webflow.svg", label: "Webflow" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:min-h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex justify-center">
          {/* tabs */}
          <div className="w-full max-w-3xl">
            <Tabs defaultValue="work">
              <TabsList className="w-full grid grid-cols-2 border dark:border-none mx-auto">
                <TabsTrigger className="w-auto" value="work">
                  My Work
                </TabsTrigger>
                <TabsTrigger className="w-auto" value="experience">
                  Experience
                </TabsTrigger>
              </TabsList>
              {/* Tab content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal Info Content */}
                <TabsContent value="work">
                  <div className="text-center">
                    <h3 className="h3 mb-4">I love bringing ideas to life</h3>
                    <p className="subtitle max-w-xl mx-auto">
                      As a full-stack Web Developer, I specialize in crafting
                      intuitive websites with cutting-edge technology,
                      delivering dynamic and engaging user experiences{" "}
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-2 text-center">
                      Some of My Tools
                    </h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="flex justify-center">
                      <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center max-w-[600px]">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div
                              key={index}
                              className=" flex flex-col items-center justify-center xl:hover:scale-110 transition-all duration-300 ease-in-out"
                            >
                              <div className="relative lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]">
                                <Image
                                  src={imgPath}
                                  // width={60}
                                  // height={60}
                                  alt="tool"
                                  priority
                                  fill
                                  // sizes="100vw"
                                  // style={{
                                  //   width: "10%",
                                  //   height: "10%",
                                  // }}
                                />
                              </div>
                              <div className="text-center text-muted-foreground">
                                {item.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications Content */}
                <TabsContent value="experience">
                  <div>
                    <h3 className="h3 mb-8 text-center">My Journey</h3>
                    {/* icons */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-lg mx-auto">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Experience and Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary dark:text-white justify-center md:justify-start">
                          <Briefcase />
                          <h4 className="capitalize font-medium ">
                            {getData(qualificationsData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2 ">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary dark:text-white justify-center md:justify-start">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium ">
                            {getData(qualificationsData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  key={index}
                                  className="flex gap-x-8 group "
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className=" font-semibold text-xl leading-none mb-2 ">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Tools I Use</h3>
                    {/* <div className="mb-8">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div> */}
                    {/* tools */}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

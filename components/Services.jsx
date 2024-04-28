import { Blocks, GanttChartSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: "I design beautiful websites to match your vision and needs.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: "I develop intuitive, cutting-edge websites from scratch.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          What I Do
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-2 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8  center ">
          {servicesData.map((item, index) => {
            return (
              <div className=" flex justify-center items-center" key={index}>
                <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative dark:border-white">
                  <CardHeader className="text-primary absolute -top-[60px]">
                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-4 ">{item.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

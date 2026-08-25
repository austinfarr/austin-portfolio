import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/lib/projectData";

const ProjectsPage = () => {
  const projects = [...projectData].sort((a, b) => b.id - a.id);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">
          My Projects
        </h2>
        <div className="text-lg mb-24 xl:mb-48 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

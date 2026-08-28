import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectSection({
  id,
  title,
  intro,
  projects,
}: {
  id: string;
  title: string;
  intro: string;
  projects: Project[];
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className="min-h-screen px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-muted-foreground">{intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

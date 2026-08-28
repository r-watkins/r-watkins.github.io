import { AboutSection } from "@/components/about-section";
import { Nav } from "@/components/nav";
import { ProjectSection } from "@/components/project-section";
import { projects } from "@/data/projects";

const sampleWorks = projects.filter(
  (project) => project.category === "sample-works",
);
const sideProjects = projects.filter(
  (project) => project.category === "side-projects",
);

function App() {
  return (
    <>
      <Nav />
      <main>
        <AboutSection />
        <ProjectSection
          id="sample-works"
          title="Sample Works"
          intro="A selection of professional projects — click through for the full case study."
          projects={sampleWorks}
        />
        <ProjectSection
          id="side-projects"
          title="Side Projects"
          intro="Smaller, more personal builds — experiments, tools, and things made for fun."
          projects={sideProjects}
        />
      </main>
    </>
  );
}

export default App;

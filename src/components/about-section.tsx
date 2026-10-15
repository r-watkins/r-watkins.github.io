import heroImage from "@/assets/hero.jpg";
import { buttonVariants } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 sm:flex-row sm:gap-16 sm:px-12"
    >
      <img
        src={heroImage}
        alt="Portrait of Ryan Watkins"
        width={240}
        height={240}
        className="h-48 w-48 shrink-0 rounded-full object-cover grayscale sm:h-60 sm:w-60"
      />
      <div className="max-w-md text-center sm:text-left">
        <h1 className="text-3xl font-semibold tracking-tight">
          Ryan Watkins
        </h1>
        <h3 className="font-semibold tracking-tight">
          Full-Stack Web - Design Systems - AI
        </h3>
        <p className="mt-4 text-muted-foreground">
          AI Engineer and full-stack developer with 10+ years of experience building scalable web applications, 
          developer platforms, and high-impact enterprise software. Experienced in integrating AI capabilities into 
          production developer workflows, including AI-assisted feature development, constrained code-generation 
          experiences, and reusable platform components.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            href="https://github.com/r-watkins"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ryanswatkins"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" })}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

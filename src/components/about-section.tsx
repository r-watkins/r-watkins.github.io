export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-6 py-24 sm:flex-row sm:gap-16 sm:px-12"
    >
      <img
        src="https://picsum.photos/seed/portfolio-hero/480/480"
        alt="Portrait of Ryan Watkins"
        width={240}
        height={240}
        className="h-48 w-48 shrink-0 rounded-full object-cover grayscale sm:h-60 sm:w-60"
      />
      <div className="max-w-md text-center sm:text-left">
        <h1 className="text-3xl font-semibold tracking-tight">
          Ryan Watkins
        </h1>
        <p className="mt-4 text-muted-foreground">
          I&apos;m a placeholder bio — swap this paragraph out for the real
          story: what you do, who you do it for, and what you&apos;re
          currently building. A couple of sentences is plenty; the goal is
          just to give a visitor a quick sense of who you are before they
          scroll further.
        </p>
      </div>
    </section>
  );
}

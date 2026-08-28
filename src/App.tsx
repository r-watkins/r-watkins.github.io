import { Nav } from "@/components/nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <section
          id="about"
          aria-label="About"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-lg font-medium">About section placeholder</p>
        </section>
        <section
          id="sample-works"
          aria-label="Sample Works"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-lg font-medium">Sample Works section placeholder</p>
        </section>
        <section
          id="side-projects"
          aria-label="Side Projects"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="text-lg font-medium">Side Projects section placeholder</p>
        </section>
      </main>
    </>
  );
}

export default App;

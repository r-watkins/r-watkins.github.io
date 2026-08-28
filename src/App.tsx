import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <p className="text-lg font-medium">Portfolio rebuild in progress.</p>
      <Button>Tailwind + shadcn/ui wired up</Button>
      <ModeToggle />
    </main>
  );
}

export default App;

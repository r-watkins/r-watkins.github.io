import { useActiveSection } from "@/hooks/use-active-section";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "sample-works", label: "Sample Works" },
  { id: "side-projects", label: "Side Projects" },
] as const;

const NAV_HEIGHT_PX = 64;

export function Nav() {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT_PX;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur"
    >
      <ul className="flex items-center gap-6">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollToSection(item.id)}
              aria-current={activeId === item.id ? "true" : undefined}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                activeId === item.id && "text-foreground",
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <ModeToggle />
    </nav>
  );
}

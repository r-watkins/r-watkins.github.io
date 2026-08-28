import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useActiveSection } from "@/hooks/use-active-section";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "sample-works", label: "Sample Works" },
  { id: "side-projects", label: "Side Projects" },
] as const;

const NAV_HEIGHT_PX = 64;
const MOBILE_PANEL_ID = "mobile-nav-panel";

export function Nav() {
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT_PX;
    window.scrollTo({ top, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur"
    >
      <div className="flex h-16 items-center justify-between px-6">
        <ul className="hidden items-center gap-6 sm:flex">
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

        <div className="hidden sm:block">
          <ModeToggle />
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="sm:hidden"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_PANEL_ID}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMenuOpen && (
        <div
          id={MOBILE_PANEL_ID}
          className="border-t border-border bg-background px-6 py-4 sm:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={cn(
                    "w-full rounded-md px-2 py-2 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    activeId === item.id && "text-foreground",
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-border pt-3">
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

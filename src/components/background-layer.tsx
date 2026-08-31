import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import aboutBackground from "@/assets/backgrounds/about.jpg";
import sampleWorksBackground from "@/assets/backgrounds/sample-works.jpg";
import sideProjectsBackground from "@/assets/backgrounds/side-projects.jpg";
import { useActiveSection } from "@/hooks/use-active-section";

const SECTION_BACKGROUNDS: Record<string, string> = {
  about: aboutBackground,
  "sample-works": sampleWorksBackground,
  "side-projects": sideProjectsBackground,
};

const SECTION_IDS = Object.keys(SECTION_BACKGROUNDS);

export function BackgroundLayer() {
  const activeId = useActiveSection(SECTION_IDS);
  const shouldReduceMotion = useReducedMotion();
  const activeImage = SECTION_BACKGROUNDS[activeId];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-screen overflow-hidden grayscale opacity-15 dark:opacity-10"
    >
      <AnimatePresence>
        {activeImage && (
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-cover bg-bottom"
            style={{ backgroundImage: `url(${activeImage})` }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

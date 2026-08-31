import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useActiveSection } from "@/hooks/use-active-section";

const SECTION_BACKGROUNDS: Record<string, string> = {
  about: "https://picsum.photos/seed/bg-about/1600/900",
  "sample-works": "https://picsum.photos/seed/bg-sample-works/1600/900",
  "side-projects": "https://picsum.photos/seed/bg-side-projects/1600/900",
};

const SECTION_IDS = Object.keys(SECTION_BACKGROUNDS);

export function BackgroundLayer() {
  const activeId = useActiveSection(SECTION_IDS);
  const shouldReduceMotion = useReducedMotion();
  const activeImage = SECTION_BACKGROUNDS[activeId];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-[55vh] overflow-hidden grayscale opacity-15 dark:opacity-10"
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

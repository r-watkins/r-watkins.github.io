export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  category: "sample-works" | "side-projects";
}

export const projects: Project[] = [
  {
    id: "sample-works-1",
    title: "dev-workflow AI Plugin",
    description:
      "A Claude plugin that manages the software development cycle from research to design to implementation.",
    tags: ["AI Engineering"],
    href: "https://github.com/r-watkins/dev-workflow-plugin",
    category: "sample-works",
  },
  {
    id: "sample-works-2",
    title: "Fantasy Adventure AI",
    description:
      "A text based game built on top of AI enabled chat.",
    tags: ["AI Engineering"],
    href: "https://github.com/r-watkins/fantasy-adventure-ai",
    category: "sample-works",
  },
  {
    id: "sample-works-3",
    title: "Pantry List",
    description:
      "A simple open source React Native app for making lists and taking notes.",
    tags: ["React Native"],
    href: "https://github.com/r-watkins/note-list-mobile-app",
    category: "sample-works",
  },
  {
    id: "side-projects-1",
    title: "Hop Fox Isle",
    description:
      "A small game Android game posted on Google Play.",
    tags: ["Unity"],
    href: "https://play.google.com/store/apps/details?id=com.PrettyChillGames.HoppyFox&hl=en_US",
    category: "side-projects",
  },
  {
    id: "side-projects-2",
    title: "Procedural Content Generation for Unity Game Development",
    description:
      "Book on generative game development concepts, published by Packt.",
    tags: ["Publication"],
    href: "https://www.packtpub.com/en-ie/product/procedural-content-generation-for-unity-game-development-9781785287473",
    category: "side-projects",
  },
];

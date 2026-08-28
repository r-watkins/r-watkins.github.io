export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  thumbnail: string;
  category: "sample-works" | "side-projects";
}

export const projects: Project[] = [
  {
    id: "sample-works-1",
    title: "Placeholder Project One",
    description:
      "A one- or two-sentence summary of the work: what it is, who it was for, and the problem it solved.",
    tags: ["React", "TypeScript"],
    href: "https://example.com/project-one",
    thumbnail: "https://picsum.photos/seed/sample-works-1/640/480",
    category: "sample-works",
  },
  {
    id: "sample-works-2",
    title: "Placeholder Project Two",
    description:
      "Swap this out for a real case study blurb — keep it short enough to scan in a card.",
    tags: ["Design System", "Accessibility"],
    href: "https://example.com/project-two",
    thumbnail: "https://picsum.photos/seed/sample-works-2/640/480",
    category: "sample-works",
  },
  {
    id: "sample-works-3",
    title: "Placeholder Project Three",
    description:
      "Another sample-works entry. Replace the title, description, tags, and link with the real project.",
    tags: ["Node.js", "API"],
    href: "https://example.com/project-three",
    thumbnail: "https://picsum.photos/seed/sample-works-3/640/480",
    category: "sample-works",
  },
  {
    id: "sample-works-4",
    title: "Placeholder Project Four",
    description:
      "Fourth placeholder entry, rounding out the Sample Works grid at its intended size.",
    tags: ["Next.js", "Performance"],
    href: "https://example.com/project-four",
    thumbnail: "https://picsum.photos/seed/sample-works-4/640/480",
    category: "sample-works",
  },
  {
    id: "side-projects-1",
    title: "Placeholder Side Project One",
    description:
      "A smaller, more personal build — a weekend experiment, a tool you made for yourself, a game jam entry.",
    tags: ["Personal", "Open Source"],
    href: "https://example.com/side-project-one",
    thumbnail: "https://picsum.photos/seed/side-projects-1/640/480",
    category: "side-projects",
  },
  {
    id: "side-projects-2",
    title: "Placeholder Side Project Two",
    description:
      "Swap this out for a real side project blurb — what you built and why you built it.",
    tags: ["CLI", "Rust"],
    href: "https://example.com/side-project-two",
    thumbnail: "https://picsum.photos/seed/side-projects-2/640/480",
    category: "side-projects",
  },
  {
    id: "side-projects-3",
    title: "Placeholder Side Project Three",
    description:
      "Another side-projects entry. Replace the title, description, tags, and link with the real project.",
    tags: ["Chrome Extension", "JavaScript"],
    href: "https://example.com/side-project-three",
    thumbnail: "https://picsum.photos/seed/side-projects-3/640/480",
    category: "side-projects",
  },
  {
    id: "side-projects-4",
    title: "Placeholder Side Project Four",
    description:
      "Fourth placeholder entry, rounding out the Side Projects grid at its intended size.",
    tags: ["Generative Art", "Canvas"],
    href: "https://example.com/side-project-four",
    thumbnail: "https://picsum.photos/seed/side-projects-4/640/480",
    category: "side-projects",
  },
];

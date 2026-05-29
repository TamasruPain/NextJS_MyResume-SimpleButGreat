export interface Project {
  id: number;
  project_name: string;
  image: string;
  description: string;
  technologies: string[];
  git_repo: string;
  live_link: string;
  category?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    project_name: "FormFLow - AI-Powered SaaS Form Builder!",
    image: "/project-Images/formflow.png",
    description:
      "FormFlow is SaaS application, built to design interactive forms, capture user submissions, and generate real-time AI-powered insights for every response.",
    technologies: [
      "Next.js",
      "Better Auth",
      "PostgreSQL",
      "Neon",
      "Prisma ORM",
      "zustand",
      "Upstash", 
      "Redis",
    ],
    git_repo: "https://github.com/TamasruPain/FormFlow_NextJS.git",
    live_link: "https://formflowwithai.vercel.app/",
    category: "Web App",
  },
  {
    id: 2,
    project_name: "Expenso - Personal Finance Mobile App",
    image: "/project-Images/expenso-img.png",
    description:
      "A full-featured personal finance Android app with biometric authentication, income vs. expense analytics with category-wise breakdowns.",
    technologies: [
      "React Native (Expo)",
      "Clerk",
      "Supabase",
      "zustand",
    ],
    git_repo: "https://github.com/TamasruPain/Expenso.git",
    live_link: "",
    category: "Android",
  },
  {
    id: 3,
    project_name: "School Management Dashboard [ UI/UX ]",
    image: "/project-Images/nextschool.png",
    description:
      "Developing School dashboard system, with clean UI and role-based login.",
    technologies: ["Next.js", "DaisyUI", "Tailwindcss", "fontawsome", "lucide-react", "rechart" ],
    git_repo: "https://github.com/TamasruPain/NextJs_School-Dashboard.git",
    live_link: "https://school-dashboard-frontend-five.vercel.app/",
    category: "Web App",
  },
  {
    id: 4,
    project_name: "M.T. World Wide LLP",
    image: "/project-Images/mtworldwidellp.png",
    description:
      "Built simple but attractive International Sweets and Namkeens selling website with a responsive admin dashboard for product management",
    technologies: [
      "Next.js",
      "NextAuth.js",
      "Tailwind",
      "DaisyUI",
      "bcryptjs",
      "jwt",
      "MongoDB",
    ],
    git_repo: "",
    live_link: "https://m-t-world-wide-llp.vercel.app/",
    category: "Web App",
  },

  {
    id: 5,
    project_name: "Mutualy",
    image: "/project-Images/mutualy.png",
    description:
      "Built a mutual fund management platform with role-based authentication, search filters, and live data from MFAPI",
    technologies: [
      "React+Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "jwt",
    ],
    git_repo: "https://github.com/TamasruPain/Mutualy-MERN",
    live_link: "https://mutualy-tp.vercel.app/",
    category: "Web App",
  },
  {
    id: 6,
    project_name: "PG Finder",
    image: "/project-Images/pgfinder.png",
    description:
      "Developed a PG accommodations website with user authentication, search filters, and responsive UI. ",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Bootstrap",
      "jwt",
      "axios",
    ],
    git_repo: "https://github.com/TamasruPain/PG_Finder_MERN.git",
    live_link: "https://pg-finder-tp.vercel.app/",
    category: "Web App",
  },

  {
    id: 7,
    project_name: "Book Zone",
    image: "/project-Images/bookzone.png",
    description:
      " Book Zone – a platform for managing books and users, designed to streamline library operations",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "jwt",
      "axios",
      "cors",
    ],
    git_repo: "https://github.com/TamasruPain/Book_Zone_MERN",
    live_link: "https://book-zone-tp.vercel.app/",
    category: "Web App",
  },
];

import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiAmazonaws,
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <SiAmazonaws />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "edubot-leave-management-system",
    category: "Full Stack Application",
    title: "Edubot Leave Management System",
    src: "/assets/projects-screenshots/edubot-leave/landing.png",
    screenshots: ["landing.png"],
    live: "https://lokeshreddy.me",
    github: "https://github.com/lokeshreddydevireddy",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A role-based leave management platform allowing employees,
            managers and administrators to manage leave requests, approvals
            and balances through a centralized dashboard. Built during my
            internship at Edubot Software & Services, the system streamlines
            the entire leave approval workflow with secure authentication and
            role-based access control.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Dashboard Layout</TypographyH3>
          <p className="font-mono mb-2">
            Central gateway and application monitoring interfaces engineered
            for automated handling of employee updates.
          </p>
          <SlideShow images={[`${BASE_PATH}/edubot-leave/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "vaultfy",
    category: "Cloud Storage Platform",
    title: "Vaultfy",
    src: "/assets/projects-screenshots/vaultfy/landing.jpg",
    screenshots: ["landing.jpg", "architure.jpg", "team.jpg"],
    live: "https://lokeshreddy.me",
    github: "https://github.com/lokeshreddydevireddy",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.aws,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Vaultfy is a Google Drive inspired cloud storage and file sharing
            platform supporting file uploads, downloads, storage management
            and secure access control. Built with a focus on reliability and
            secure cloud-backed storage.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">File Management Portal</TypographyH3>
          <p className="font-mono mb-2">
            Upload, download and organize files with a clean, intuitive
            interface backed by scalable cloud storage configurations.
          </p>
          <SlideShow images={[`${BASE_PATH}/vaultfy/landing.jpg`]} />
          <TypographyH3 className="my-4 mt-8">Cloud Storage Infrastructure</TypographyH3>
          <p className="font-mono mb-2">
            Architectural schematic mapping out secure file system processing, asset pipelines,
            and AWS instance connections.
          </p>
          <SlideShow images={[`${BASE_PATH}/vaultfy/architure.jpg`]} />
          <TypographyH3 className="my-4 mt-8">The Team behind Vaultfy</TypographyH3>
          <p className="font-mono mb-2">
            Collaborative distribution of interface design roles, state management setup,
            and secure cloud relays.
          </p>
          <SlideShow images={[`${BASE_PATH}/vaultfy/team.jpg`]} />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/lokesh-portfolio/landing.png",
    screenshots: ["landing.png", "navbar.png", "project.png", "skills.png"],
    live: "https://lokeshreddy.me",
    github: "https://github.com/lokeshreddydevireddy",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible. Showcase of my cloud capabilities, active
            internships, and web projects.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Beautiful 3D Objects</TypographyH3>
          <p className="font-mono mb-2">
            An interactive, floating space keyboard matrix console rendered fully in 3D right
            on the web browser layout.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark cosmic backgrounds complete with dynamic particles and custom typography frameworks.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects Showcase Matrix</TypographyH3>
          <p className="font-mono mb-2">
            A seamless interface displaying verified full stack projects and active cloud workflows.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/project.png`]} />
        </div>
      );
    },
  },
];

export default projects;
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact,
  SiTailwindcss, SiGit, SiNodedotjs, SiVite, SiFigma,
} from "react-icons/si";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

/**
 * Edit this file to personalize the template.
 * No other files need to change for basic content updates.
 */

export const site = {
  name: "Amin Salarvand",
  role: "Frontend Developer",
  bio: "I craft minimal, accessible interfaces with a focus on performance and detail. Currently building things on the web with React & TypeScript.",
  email: "salarvand.developer@gmail.com",
  location: "Earth",
  cvUrl: "/cv.pdf",
  // Replace with your Formspree endpoint: https://formspree.io
  formspreeEndpoint: "https://formspree.io/f/your-id",
};

export const about = {
  paragraphs: [
    "Hi, I'm a frontend developer who enjoys building clean, fast and accessible products. I care about typography, micro-interactions, and the small details that make software feel right.",
    "When I'm not coding, you'll find me reading design essays, taking long walks, or experimenting with side projects. I'm currently open to freelance and full-time opportunities.",
  ],
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo: string;
  github: string;
};


export const projects: Project[] = [
  {
    title: "Cloth Store",
    description:
      "A modern clothing e-commerce application built with Next.js, featuring product categories, shopping cart functionality, and a responsive shopping experience.",
    tags: ["Next.js", "React", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
    image: "/portfolio/projects/cloth-store.png",
    demo: "",
    github: "",
  },
  {
    title: "Techno Shop",
    description:
      "An e-commerce project for technology products, combining a React frontend with a Spring Boot backend and MySQL database.",
    tags: ["React", "Java", "Spring Boot", "MySQL"],
    image: "/portfolio/projects/techno-shop.png",
    demo: "",
    github: "",
  },
  {
    title: "Radio Player",
    description:
      "A personal web-based radio player built with React and JavaScript, with a Python Flask service supporting its AI feature.",
    tags: ["React", "JavaScript", "Python", "Flask"],
    image: "/portfolio/projects/radio-player.png",
    demo: "",
    github: "",
  },
];


export type Skill = { name: string; Icon: IconType };

export const skills: Skill[] = [
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Vite", Icon: SiVite },
  { name: "Git", Icon: SiGit },
  { name: "Figma", Icon: SiFigma },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/your-username", Icon: FiGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-username", Icon: FiLinkedin },
  { name: "Twitter", href: "https://twitter.com/your-username", Icon: FiTwitter },
  { name: "Email", href: "mailto:hello@example.com", Icon: FiMail },
];

export const nav = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

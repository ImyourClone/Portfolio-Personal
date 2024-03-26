import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vueIMG from"@/public/vue.png";
import vueIMG2 from"@/public/vue2.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Manila",
    description:
      "I graduated at Access Computer college. I immediately found a job as a Tellecollector.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Bernales And Associate",
    location: "Quezon City.",
    description:
      "I worked as Tellecollector for 1yr and 5months.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Todolist",
    description:
      "I worked as a junior developer on this  project  1 month. Users can make there own to do list.",
    tags: ["Vue.js", "Next.js", "Javascript","Node.js"],
    imageUrl: vueIMG,
  },
  {
    title: "ExpensesTracker",
    description:
      "This is my second website making with the vue.js",
    tags: ["Vue.js", "Next.js", "Javascript","Node.js"],
    imageUrl: vueIMG2,

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Python",
  "Framer Motion",
] as const;
"use client";
import React from 'react';
import Sectionheading from './section-heading';
import {motion,} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
    ref={ref} id="about"
    className="mb-28 max-w-[45rem] text-center leading-1 sm:mb-40 scroll-mt-20"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    >   
      <Sectionheading>About me</Sectionheading>
    
        <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Technology</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">Front End web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
           Pyton, Ruby, React, Next.js, Node.js,Vue.js. 
        </span>
        </p>
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my friends. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Fundamental of basic programming</span>.
        </p>
    </motion.section>
  );
}

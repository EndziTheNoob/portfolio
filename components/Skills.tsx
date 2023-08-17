'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

//Setting up motion for each skill
const faceInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  //Turning object into a function so I can use it below to animate each skill separately with delay
  //Passing index so animation applies for each skill separately
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gradient-to-tr from-violet-50 to-transparent border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={faceInAnimationVariants}
            initial="initial"
            whileInView="animate" //animation starts when it got into the view
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

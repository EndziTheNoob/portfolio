'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      id="about"
      //Using ref in the proper section which I want to come to the view
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a communicative person with a passion in creating things. After
        several years as a PR manager, I discovered my desire to dive into the
        world of front-end development to uncover the magic behind captivating
        designs and applications
      </p>
      <p></p>
    </motion.section>
  );
}

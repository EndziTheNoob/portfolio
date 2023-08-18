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
        I am a communicative person with a passion for creating things. After
        spending several years as a PR manager for prominent technology brands,
        I discovered my desire to dive into the world of frontend development,
        unraveling the magic behind captivating designs and applications.
      </p>
      <p>
        My journey began with several online courses, and it gained significant
        momentum with my participation in the intensive semester-long{' '}
        <i>Czechitas Digital Web Academy</i>. In addition to coding, I have a
        love for digital drawing, animation, and I am constantly amazed by video
        game graphics that push the boundaries of what is possible.
      </p>
    </motion.section>
  );
}

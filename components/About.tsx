'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
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

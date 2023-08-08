'use client';

import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  //Creating hook useInView so I know when the about section will come to the view (for active section set up) + import
  //Adding threshold, so section About is not active immediately when the page load, setting up according to the size of the section
  //Same set up in each section component
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      //Using ref in the proper section which I want to come to the view
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
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

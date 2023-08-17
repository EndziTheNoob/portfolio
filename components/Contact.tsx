'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(,100%,38rem)] text-center"
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Reach me out at{' '}
        <a className="underline" href="mailto:angelika.bauerova@gmail.com">
          angelika.bauerova@gmail.com
        </a>
      </p>
    </section>
  );
}

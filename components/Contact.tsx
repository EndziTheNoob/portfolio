import React from 'react';
import SectionHeading from './SectionHeading';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(,100%,38rem)]">
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Reach me out directly at
        <a className="underline" href="mailto:angelika.bauerova@gmail.com">
          angelika.bauerova@gmail.com
        </a>
        or through this form.
        {''}
      </p>
      <form className="mt-10">
        <input className="h-14 rounded-lg border borderBlack" type="email" />
        <textarea className="h-52 m-3 rounded-lg borderBlack p-4" />
        <button type="submit">
          Submit
          <FaPaperPlane />
        </button>
      </form>
    </section>
  );
}

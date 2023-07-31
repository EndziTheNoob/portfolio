import Image from 'next/image';
import React from 'react';

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center"></div>
      <div>
        <Image src="/portrait.jpg" alt="potrait" />
      </div>
    </section>
  );
}

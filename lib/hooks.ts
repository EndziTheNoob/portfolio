import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import type { SectionName } from './types';

//Hook for tracking active section
export function useSectionInView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Home');
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return {
    ref,
  };
}

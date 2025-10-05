// contexts/SectionRefsContext.jsx
import { createContext, useContext, useRef } from 'react';

const SectionRefsContext = createContext();

export const SectionRefsProvider = ({ children }) => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const value = {
    heroRef,
    aboutRef,
    projectsRef,
    contactRef,
    scrollToSection
  };

  return (
    <SectionRefsContext.Provider value={value}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within SectionRefsProvider');
  }
  return context;
};
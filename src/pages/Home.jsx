// pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from '../components/Footer';
import Timeline from '../components/TimeLine';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  const timelineRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isProjectsInView = useInView(projectsRef, { once: true, margin: "-100px" });
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Global scroll animations
    const sections = [aboutRef.current, projectsRef.current, contactRef.current];
    
    sections.forEach(section => {
      if (section) {
        gsap.fromTo(section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Parallax effects for background elements
    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: "main",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-beige-200 text-brown-900 overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 parallax-bg pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-12 grid-rows-12 gap-2 w-full h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="bg-brown-900" />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="min-h-screen relative"
        >
          <Hero onExplore={() => scrollToSection(aboutRef)} />
        </section>

        {/* About Section */}
        <section 
          ref={aboutRef}
          className="min-h-screen relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <About />
          </motion.div>
        </section>

        {/* Timeline section */}
         <section 
          ref={timelineRef}
          className="min-h-screen relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isTimelineInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Timeline />
          </motion.div>
        </section>

        {/* Projects Section */}
        <section 
          ref={projectsRef}
          className="min-h-screen relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isProjectsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.div>
        </section>

        {/* Contact Section */}
        <section 
          ref={contactRef}
          className="min-h-screen relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isContactInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </section>
      </main>

      {/*  Footer Section */}
     <section 
          ref={footerRef}
          className=" relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isFooterInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Footer/>
          </motion.div>
        </section>
    </div>
  );
};
// components/Hero.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Terminal, Zap, Box, FileDown } from "lucide-react";
import HeroName from "./HeroName";
import { useSectionRefs } from "../contexts/SectionRefsContext";
import HeroImg from "../../public/brutimg.png";
import HeroImage from "./HeroImg";

export default function Hero() {
  const titleRef = useRef(null);
  const boxesRef = useRef(null);
  const resumeBtnRef = useRef(null);
  const mainTextRef = useRef(null);
  const buttonsRef = useRef(null);
  const floatingIconRef = useRef(null);

  // === Download Resume Function ===
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Uzair-Resume.pdf";
    link.download = "Uzair-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // === Scroll to section using IDs ===
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate name letters
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          y: () => 100 + Math.random() * 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        });
        gsap.to(titleRef.current.children, {
          opacity: 1,
          duration: 0.2,
          delay: 1.1,
        });
      }

      // Animate rotating boxes with brutalist feel
      if (boxesRef.current) {
        gsap.to(boxesRef.current.children, {
          rotation: 360,
          duration: 40, // Slower for more brutalist feel
          repeat: -1,
          ease: "none",
          stagger: 1,
        });
      }

      // Enhanced resume button animation
      if (resumeBtnRef.current) {
        gsap.fromTo(
          resumeBtnRef.current,
          {
            y: -80,
            x: 80,
            opacity: 0,
            scale: 0,
            rotation: 15,
          },
          {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            delay: 0.5,
          }
        );

        // Brutalist hover effect
        resumeBtnRef.current.addEventListener("mouseenter", () => {
          gsap.to(resumeBtnRef.current, {
            scale: 1.1,
            rotation: -2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        resumeBtnRef.current.addEventListener("mouseleave", () => {
          gsap.to(resumeBtnRef.current, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Main text animation with staggered brutalist effect
      if (mainTextRef.current) {
        const words = mainTextRef.current.textContent.split(" ");
        mainTextRef.current.innerHTML = words
          .map((word) => `<span class="word">${word}</span>`)
          .join(" ");

        gsap.fromTo(
          ".word",
          {
            y: 50,
            opacity: 0,
            rotationX: 90,
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            delay: 1.2,
          }
        );
      }

      // Buttons animation with brutalist impact
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          {
            scale: 0,
            y: 100,
            rotationY: 90,
          },
          {
            scale: 1,
            y: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            delay: 1.8,
          }
        );
      }

      // Enhanced floating icon animation
      if (floatingIconRef.current) {
        gsap.to(floatingIconRef.current, {
          rotation: 360,
          duration: 8,
          repeat: -1,
          ease: "none",
        });

        gsap.to(floatingIconRef.current, {
          y: -20,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Background grid animation
      const gridItems = document.querySelectorAll(".grid-item");
      gsap.fromTo(
        gridItems,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 0.1,
          duration: 1.5,
          stagger: 0.02,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen bg-[#E8DCC4] relative overflow-hidden brutalist-hero">
      {/* BRUTALIST BACKGROUND GRID */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="grid grid-cols-12 grid-rows-12 gap-1 w-full h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="grid-item bg-[#3E2723] opacity-0" />
          ))}
        </div>
      </div>

      {/* BACKGROUND DECORATIVE BOXES */}
      <div
        ref={boxesRef}
        className="absolute inset-0 pointer-events-none z-[5]"
      >
        <Box className="absolute top-20 left-10 w-16 h-16 text-[#3E2723] opacity-15" />
        <Box className="absolute bottom-32 right-20 w-24 h-24 text-[#3E2723] opacity-15" />
        <Box className="absolute top-1/2 left-1/3 w-12 h-12 text-[#3E2723] opacity-15" />
        <Box className="absolute top-1/4 right-1/4 w-20 h-20 text-[#8B4513] opacity-10" />
      </div>

      {/* === RESUME BUTTON (TOP RIGHT) === */}
      <div className="relative w-full">
        <motion.button
          ref={resumeBtnRef}
          onClick={downloadResume}
          className="absolute top-6 right-6 z-[30] bg-[#3E2723] text-[#E8DCC4] border-4 border-[#3E2723]
    px-6 py-3 font-['Space_Grotesk'] font-bold text-lg cursor-pointer
    hover:bg-[#8B4513] hover:border-[#8B4513] hover:text-[#F5E6D3] transition-all duration-300 
    flex items-center gap-2 brutalist-shadow hover:brutalist-shadow-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileDown className="w-5 h-5" />
          <span>RESUME</span>
        </motion.button>
      </div>

      {/* === MAIN CONTENT === */}
      <div className="container mx-auto px-6 pt-32 relative z-[20]">
        {/* Terminal Badge */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div
            className="inline-flex items-center gap-2 bg-[#3E2723] text-[#E8DCC4] px-4 py-2 
          border-4 border-[#3E2723] font-['Space_Mono'] font-bold brutalist-shadow"
          >
            <Terminal className="w-5 h-5" />
            <span>FULL STACK DEVELOPER</span>
          </div>
        </motion.div>

        {/* Name and Image Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-12">
          {/* Name on the left */}
          <div className="flex-1">
            <HeroName />
          </div>

          {/* Brutalist Image Frame on the right */}
          <div className="flex-1 relative">
            <div className="brutalist-image-frame">
              {/* <img
                src={HeroImg}
                alt="Brutalist code art"
                className="w-full h-[300px] object-cover brutalist-image"
              /> */}
              <HeroImage />
              {/* Overlay grid */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 pointer-events-none">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-[#3E2723] opacity-10" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Statement */}
        <motion.div
          ref={mainTextRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl mb-12"
        >
          <p className="text-2xl md:text-3xl font-['Space_Mono'] font-bold text-[#3E2723] leading-relaxed">
            I BUILD{" "}
            <span className="bg-[#3E2723] text-[#E8DCC4] px-3 py-1 brutalist-text-highlight">
              RADICAL
            </span>{" "}
            DIGITAL EXPERIENCES THAT{" "}
            <span className="bg-[#8B4513] text-[#F5E6D3] px-3 py-1 brutalist-text-highlight">
              BREAK
            </span>{" "}
            THE RULES
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          ref={buttonsRef}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="bg-[#3E2723] text-[#E8DCC4] px-8 py-4 font-['Space_Grotesk'] font-bold text-xl 
            border-4 border-[#3E2723] hover:bg-[#8B4513] hover:border-[#8B4513] hover:text-[#F5E6D3] 
            transition-all duration-300 cursor-pointer brutalist-shadow hover:brutalist-shadow-hover"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW WORK
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="bg-[#F5E6D3] text-[#3E2723] px-8 py-4 font-['Space_Grotesk'] font-bold text-xl 
            border-4 border-[#3E2723] hover:bg-[#8B4513] hover:text-[#F5E6D3] hover:border-[#8B4513]
            transition-all duration-300 cursor-pointer brutalist-shadow hover:brutalist-shadow-hover"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT
          </motion.button>
        </motion.div>
      </div>

      {/* === FLOATING ICON (BOTTOM RIGHT) === */}
      <motion.div
        ref={floatingIconRef}
        className="absolute bottom-10 right-10 z-[10]"
      >
        <div className="bg-[#8B4513] text-[#F5E6D3] p-6 border-4 border-[#3E2723] brutalist-shadow">
          <Zap className="w-12 h-12" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[10]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center text-[#3E2723] font-['Space_Mono'] text-sm font-bold"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>SCROLL</span>
          <motion.div
            className="w-1 h-6 bg-[#3E2723] mt-2"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

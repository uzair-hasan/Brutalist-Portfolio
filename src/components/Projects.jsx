import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Code2,
  Palette,
  Cpu,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AZULMAN",
    category: "FULL-STACK DEVELOPMENT",
    description: "HOME SERVICES APPLICATION",
    color: "#D4A574",
    year: "2025",
    tech: ["REACT", "JAVASCRIPT", "TAILWIND CSS", "PYTHON", "AGILE"],
    icon: Code2,
    liveUrl: "https://azulman.com/",
  },
  {
    title: "CHAT APPLICATION",
    category: "FULL-STACK DEVELOPMENT",
    description: "A responsive chat platform built with the MERN stack",
    color: "#8B4513",
    year: "2024",
    tech: ["REACT JS", "NODE JS", "SOCKET.IO","TAILWIND CSS"],
    icon: Palette,
    liveUrl: "https://full-stack-chat-app-eghm.onrender.com/login",
  },
  {
    title: "FRUTIGER INDIA",
    category: "WEB DEVELOPMENT",
    description: "Developed the complete front-end for FRUTIGER INDIA, creating a platform to showcase their products and services globally",
    color: "#E8DCC4",
    year: "2023",
    tech: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "JQUERY", "REACT JS"],
    icon: Cpu,
    liveUrl:"https://frutigerindia.com/"
  },
  {
    title: "HELPING HAND",
    category: "FULL-STACK DEVELOPMENT",
    description: "Designed referral-based earning features for transparent income tracking, continuously enhanced based on user feedback.",
    color: "#A0826D",
    year: "2023",
    tech: ["REACT JS", "NODE JS", "SOLIDITY", "MYSQL", "BLOCKCHAIN", "METAMASK"],
    icon: Zap,
    liveUrl:"https://helpinghnd.co.in/"
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Prevent white flash
      gsap.set(sectionRef.current, { opacity: 1 });

      // Background text animation (one-time)
      gsap.fromTo(
        ".background-text",
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 0.05,
          duration: 1.2,
          ease: "power2.out",
        }
      );

      // Section title animation (one-time)
      gsap.fromTo(
        ".section-title",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none", // Only play once
          },
        }
      );

      // Cards animation with staggered effect (one-time)
      const cards = document.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none none", // Only play once
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen bg-[#3E2723] py-32 relative overflow-hidden opacity-0"
      style={{ background: "#3E2723" }}
    >
      {/* Background Text */}
      <div className="background-text absolute top-0 right-0 text-[18rem] md:text-[25rem] font-['Archivo_Black'] text-[#E8DCC4] opacity-0 pointer-events-none leading-none select-none">
        WORK
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 gap-2 w-full h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-[#E8DCC4] opacity-20"></div>
          ))}
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-20 w-12 h-12 border-4 border-[#D4A574] opacity-20 rotate-45"></div>
      <div className="absolute bottom-40 right-32 w-8 h-8 border-4 border-[#E8DCC4] opacity-20 rotate-12"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-[#8B4513] opacity-20 rotate-45"></div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 relative">
          <h2
            className="section-title font-['Archivo_Black'] text-7xl md:text-8xl lg:text-9xl text-[#E8DCC4] mb-6 leading-none tracking-tighter opacity-0"
            style={{ textShadow: "8px 8px 0 rgba(139, 69, 19, 0.4)" }}
          >
            SELECTED
            <br />
            PROJECTS
          </h2>

          <div className="flex items-center gap-6">
            <div className="h-2 w-24 bg-[#D4A574]"></div>
            <p className="font-['Space_Mono'] text-[#E8DCC4] text-xl font-bold bg-[#8B4513] px-4 py-2 border-2 border-[#E8DCC4]">
              2023 - 2025
            </p>
            <div className="h-2 flex-1 bg-[#E8DCC4] opacity-20"></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group cursor-pointer opacity-0"
            >
              <div
                className="border-4 border-[#3E2723] p-8 relative overflow-hidden min-h-[400px] flex flex-col hover:scale-[1.02] transition-transform duration-300"
                style={{
                  backgroundColor: project.color,
                }}
              >
                {/* Project Icon */}
                <div className="absolute top-6 right-6 opacity-80">
                  <project.icon className="w-12 h-12 text-[#3E2723] opacity-60" />
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-8 h-8 text-[#3E2723]" />
                </div>

                {/* Category Badge */}
                <div className="mb-6">
                  <span className="font-['Space_Mono'] text-sm font-bold text-[#3E2723] bg-[#F5E6D3] px-3 py-2 border-2 border-[#3E2723] inline-block">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-black text-[#3E2723] mb-4 leading-tight flex-1">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="font-['Space_Mono'] text-[#3E2723] font-bold text-lg mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="font-['Space_Mono'] text-xs font-bold text-[#F5E6D3] bg-[#3E2723] bg-opacity-10 px-2 py-1 border border-[#3E2723]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-[#3E2723] border-opacity-30">
                  <span className="font-['Space_Mono'] text-[#3E2723] font-black text-2xl">
                    {project.year}
                  </span>
                  <div className="flex gap-3">
                    <div
                      onClick={() => window.open(project.gitUrl, "_blank")}
                      className="bg-[#3E2723] text-[#E8DCC4] p-3 border-2 border-[#3E2723] hover:bg-[#F5E6D3] hover:text-[#3E2723] transition-all duration-300 cursor-pointer"
                    >
                      <Github className="w-5 h-5" />
                    </div>
                    <div
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="bg-[#3E2723] text-[#E8DCC4] p-3 border-2 border-[#3E2723] hover:bg-[#F5E6D3] hover:text-[#3E2723] transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#3E2723] group-hover:w-full transition-all duration-400 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-[#E8DCC4] opacity-40"></div>
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-[#E8DCC4] opacity-40"></div>
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-[#E8DCC4] opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-[#E8DCC4] opacity-40"></div>
    </section>
  );
}

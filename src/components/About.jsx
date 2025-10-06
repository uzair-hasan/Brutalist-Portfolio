import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Code2,Atom, Server , Palette, Rocket, Coffee, Terminal, Cpu, Database, Zap } from 'lucide-react';

const skills = [
  
  { icon: Code2, text: 'HTML', color: 'bg-[#D4A574]' },
  { icon: Coffee, text: 'JAVA SCRIPT', color: 'bg-[#8B4513]' },
  { icon: Palette, text: 'CSS', color: 'bg-[#E8DCC4]' },
  { icon: Atom, text: 'REACT JS', color: 'bg-[#A0826D]' },
  { icon: Server , text: 'NODE', color: 'bg-[#A0826D] text-[#F5E6D3]' },
  { icon: Cpu, text: 'NEXT JS', color: 'bg-[#F5E6D3]' },
  { icon: Database, text: 'GIT', color: 'bg-[#8B4513]' },
  { icon: Zap, text: 'MY SQL', color: 'bg-[#D4A574]' },
];

export default function About() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with brutalist impact
      if (titleRef.current) {
        gsap.fromTo(titleRef.current,
          { 
            x: -200, 
            opacity: 0,
            rotationY: 90 
          },
          { 
            x: 0, 
            opacity: 1,
            rotationY: 0,
            duration: 1.2,
            ease: "power3.out"
          }
        );
      }

      // Skills grid animation
      if (skillsRef.current) {
        gsap.fromTo(skillsRef.current.children,
          { 
            scale: 0, 
            y: 50,
            rotation: 180 
          },
          { 
            scale: 1, 
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 0.5
          }
        );
      }

      // Background pattern animation
      const patternLines = document.querySelectorAll('.pattern-line');
      gsap.fromTo(patternLines,
        { scaleX: 0, opacity: 0 },
        { 
          scaleX: 1, 
          opacity: 0.1,
          duration: 2,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen bg-[#8B4513] py-32 relative overflow-hidden">
      {/* Enhanced Brutalist Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="pattern-line h-px bg-[#3E2723] mb-8 transform origin-left"
              style={{ opacity: 0 }}
            />
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-[#F5E6D3] opacity-20 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-12 h-12 border-4 border-[#E8DCC4] opacity-20 rotate-12"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 border-4 border-[#3E2723] opacity-20 rotate-45"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 
                ref={titleRef}
                className="font-['Archivo_Black'] text-7xl md:text-8xl lg:text-9xl text-[#F5E6D3] mb-8 leading-none tracking-tight"
                style={{ textShadow: '8px 8px 0 rgba(62, 39, 35, 0.4)' }}
              >
                WHO
                <br />
                AM I?
              </h2>

              <div className="space-y-8">
                <motion.p 
                  className="font-['Space_Mono'] text-xl md:text-2xl text-[#F5E6D3] font-bold leading-relaxed"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  I'M A{' '}
                  <span className="bg-[#3E2723] text-[#E8DCC4] px-3 py-2 border-2 border-[#F5E6D3] inline-block transform -rotate-1 hover:rotate-0 transition-transform duration-300 cursor-default">
                    CREATIVE DEVELOPER
                  </span>{' '}
                  WITH PASSION FOR DESIGNS.
                </motion.p>

                <motion.p 
                  className="font-['Space_Mono'] text-xl md:text-2xl text-[#F5E6D3] font-bold leading-relaxed"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  I am dedicated to building robust, scalable, and user-friendly web applications that solve real-world problems.
                  <span className="bg-[#F5E6D3] text-[#3E2723] px-3 py-2 border-2 border-[#3E2723] inline-block transform rotate-1 hover:rotate-0 transition-transform duration-300 cursor-default">
                       Full Stack Solutions
                  </span>
                   {' '}are at the core of my approach, ensuring seamless integration between front-end and back-end technologies.
                </motion.p>

                <motion.p 
                  className="font-['Space_Mono'] text-xl md:text-2xl text-[#F5E6D3] font-bold leading-relaxed"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                 My focus is on clean code, efficient architecture, and delivering high-quality digital experiences.
                  <span className="bg-[#E8DCC4] text-[#3E2723] px-2 py-1 border border-[#3E2723]">Reliable</span>,{' '}
                  <span className="bg-[#D4A574] text-[#3E2723] px-2 py-1 border border-[#3E2723]">Maintainable</span>,{' '}
                  <span className="bg-[#3E2723] text-[#F5E6D3] px-2 py-1 border border-[#F5E6D3]">Scalable</span> solutions are my priority.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills & Status */}
          <div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Enhanced Skills Grid */}
              <div className="bg-[#F5E6D3] border-4 border-[#3E2723] p-8 brutalist-shadow hover:brutalist-shadow-hover transition-all duration-300">
                <h3 className="font-['Space_Grotesk'] text-4xl font-bold mb-8 text-[#3E2723] text-center border-b-4 border-[#3E2723] pb-4">
                  MY ARSENAL
                </h3>

                <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: Math.random() * 8 - 4,
                        y: -5 
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`${skill.color} border-4 border-[#3E2723] p-4 cursor-pointer transition-all duration-300 hover:border-[#8B4513] group`}
                    >
                      <skill.icon className="w-8 h-8 mb-2 text-[#3E2723] group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-['Space_Mono'] text-lg font-bold text-[#3E2723] block text-center">
                        {skill.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Status Card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="bg-[#3E2723] text-[#F5E6D3] border-4 border-[#F5E6D3] p-8 brutalist-shadow-invert relative overflow-hidden"
              >
                {/* Animated background pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                  <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-[#F5E6D3]"></div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-['Space_Mono'] text-sm font-bold bg-[#F5E6D3] text-[#3E2723] px-3 py-1 border-2 border-[#3E2723]">
                      CURRENT STATUS
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-[#D4A574] rounded-full animate-pulse" />
                      <span className="font-['Space_Mono'] text-sm font-bold">AVAILABLE</span>
                    </div>
                  </div>
                  <p className="font-['Space_Mono'] text-xl font-bold text-center">
                    OPEN TO CREATIVE OPPORTUNITIES 
                  </p>
                  <div className="flex justify-center mt-4">
                    <div className="w-3/4 h-1 bg-[#F5E6D3] opacity-30"></div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Brutalist Element */}
              <motion.div
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="bg-[#E8DCC4] border-4 border-[#3E2723] p-6 text-center"
              >
                <p className="font-['Space_Mono'] font-bold text-[#3E2723] text-lg">
                  READY TO BUILD SOMETHING RADICAL?
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-[#F5E6D3] opacity-40"></div>
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-[#F5E6D3] opacity-40"></div>
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-[#F5E6D3] opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-[#F5E6D3] opacity-40"></div>
    </section>
  );
}
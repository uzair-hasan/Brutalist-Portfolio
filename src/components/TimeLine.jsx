// components/Timeline.jsx
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Code, GraduationCap, Briefcase, Award, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    year: '2025',
    title: 'SOFTWARE DEVELOPER',
    company: 'ORIENS DEV SEC OPS',
    description: 'Building scalable systems using React , focusing on performance, reliability, and modern web development best practices.',
    icon: Briefcase,
    color: '#D4A574',
    type: 'work'
  },
  {
    year: '2024',
    title: 'SOFTWARE DEVELOPER TRAINEE',
    company: 'ORIENS DEV SEC OPS',
    description: 'Contributed to enterprise web app development, collaborating with backend teams, implementing features, debugging, and optimizing UI for improved user experience.',
    icon: Code,
    color: '#8B4513',
    type: 'work'
  },
  {
    year: '2023',
    title: 'FULL STACK DEVELOPER',
    company: 'APPZMINE TECH',
    description: 'Developed web applications and streamlined development workflows, ensuring efficient collaboration and rapid feature delivery across the full stack.',
    icon: Zap,
    color: '#E8DCC4',
    type: 'work'
  },
  {
    year: '2022',
    title: 'FRONT END DEVELOPER',
    company: 'APPZMINE TECH',
    description: 'Collaborated with designers and backend engineers to build responsive web interfaces using modern front-end frameworks.',
    icon: Calendar,
    color: '#A0826D',
    type: 'education'
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Prevent white flash
      gsap.set(sectionRef.current, { opacity: 1 });

      // Section title animation
      gsap.fromTo('.timeline-title',
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
            trigger: '.timeline-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Timeline items animation
      const items = document.querySelectorAll('.timeline-item');
      gsap.fromTo(items,
        {
          x: -100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Animate the timeline line
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIconBg = (type) => {
    switch(type) {
      case 'work': return 'bg-[#D4A574]';
      case 'education': return 'bg-[#8B4513]';
      case 'achievement': return 'bg-[#E8DCC4]';
      case 'project': return 'bg-[#A0826D]';
      default: return 'bg-[#3E2723]';
    }
  };

  const getIconText = (type) => {
    switch(type) {
      case 'work': return 'text-[#3E2723]';
      case 'education': return 'text-[#F5E6D3]';
      case 'achievement': return 'text-[#3E2723]';
      case 'project': return 'text-[#3E2723]';
      default: return 'text-[#F5E6D3]';
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="timeline" 
      className="min-h-screen bg-[#E8DCC4] py-32 relative overflow-hidden opacity-0"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 grid-rows-10 gap-1 w-full h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-[#3E2723]"></div>
          ))}
        </div>
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-[#3E2723] opacity-20 rotate-45"></div>
      <div className="absolute bottom-40 left-32 w-12 h-12 border-4 border-[#8B4513] opacity-20 rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 border-4 border-[#A0826D] opacity-20 rotate-45"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="timeline-title font-['Archivo_Black'] text-7xl md:text-8xl lg:text-9xl text-[#3E2723] mb-6 leading-none tracking-tighter opacity-0"
            style={{ textShadow: '8px 8px 0 rgba(139, 69, 19, 0.3)' }}
          >
            JOURNEY
          </h2>
          
          <div className="flex items-center justify-center gap-6">
            <div className="h-2 w-24 bg-[#8B4513]"></div>
            <p className="font-['Space_Mono'] text-[#3E2723] text-xl font-bold bg-[#F5E6D3] px-4 py-2 border-2 border-[#3E2723]">
              2022 - 2025
            </p>
            <div className="h-2 w-24 bg-[#8B4513]"></div>
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-8 top-0 bottom-0 w-1 bg-[#3E2723] transform origin-top md:left-1/2 md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item group relative flex items-center gap-8 opacity-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'
                }`}>
                  <div className="bg-[#F5E6D3] border-4 border-[#3E2723] p-6 relative">
                    {/* Year Badge */}
                    <div className="absolute -top-4 left-6 bg-[#3E2723] text-[#F5E6D3] px-4 py-1 font-['Space_Mono'] font-bold text-sm border-2 border-[#3E2723]">
                      {item.year}
                    </div>

                    <h3 className="font-['Space_Grotesk'] text-2xl font-black text-[#3E2723] mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="font-['Space_Mono'] text-lg font-bold text-[#8B4513] mb-3">
                      {item.company}
                    </p>
                    
                    <p className="font-['Space_Mono'] text-[#3E2723] font-bold leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 w-full h-1"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>

                {/* Icon Node */}
                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 ${getIconBg(item.type)} border-4 border-[#3E2723] flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-8 h-8 ${getIconText(item.type)}`} />
                  </motion.div>
                  
                  {/* Connecting line from icon to card */}
                  <div className={`absolute top-1/2 w-8 h-1 bg-[#3E2723] ${
                    index % 2 === 0 ? 'right-full' : 'left-full'
                  } hidden md:block`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>

          {/* Start/End Markers */}
          <div className="flex justify-between items-center mt-12 px-8">
            <div className="text-center">
              <div className="w-8 h-8 bg-[#3E2723] border-2 border-[#E8DCC4] mx-auto mb-2"></div>
              <span className="font-['Space_Mono'] text-[#3E2723] font-bold text-sm">START</span>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 bg-[#8B4513] border-2 border-[#E8DCC4] mx-auto mb-2"></div>
              <span className="font-['Space_Mono'] text-[#3E2723] font-bold text-sm">PRESENT</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-['Space_Mono'] text-2xl font-bold text-[#3E2723] mb-6">
            READY TO WRITE THE NEXT CHAPTER?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#3E2723] text-[#E8DCC4] px-8 py-4 font-['Space_Grotesk'] font-black text-xl border-4 border-[#3E2723] hover:bg-[#8B4513] hover:text-[#F5E6D3] transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            LET'S COLLABORATE
          </motion.button>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-[#3E2723] opacity-40"></div>
    </section>
  );
}
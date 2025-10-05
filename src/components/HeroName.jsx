// components/HeroName.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroName() {
  const nameRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = nameRef.current.querySelectorAll(".letter");
      const backgroundGrid = containerRef.current.querySelectorAll(".grid-line");

      // Main timeline
      const tl = gsap.timeline({ 
        defaults: { 
          duration: 1.2, 
          ease: "power4.out" 
        } 
      });

      // Animate background grid first
      tl.fromTo(backgroundGrid,
        { 
          scaleX: 0,
          opacity: 0 
        },
        { 
          scaleX: 1,
          opacity: 0.1,
          stagger: 0.05,
          duration: 1.5
        }
      );

      // Letter animation with brutalist effects
      letters.forEach((letter, i) => {
        const delay = i * 0.08;
        
        tl.fromTo(letter,
          { 
            y: 100 + Math.random() * 80,
            opacity: 0,
            rotationX: 90,
            rotationZ: Math.random() * 20 - 10,
            scale: 0.5
          },
          { 
            y: 0,
            opacity: 1,
            rotationX: 0,
            rotationZ: 0,
            scale: 1,
            duration: 1.4,
            ease: "back.out(1.7)",
            delay: delay
          },
          delay
        );

        // Add shadow animation after letter appears
        tl.fromTo(letter,
          { 
            textShadow: "0 0 0 transparent" 
          },
          { 
            textShadow: "8px 8px 0 rgba(62, 39, 35, 0.3)",
            duration: 0.6,
            ease: "power2.out"
          },
          delay + 0.3
        );
      });

      // Add subtle hover effects to letters
      letters.forEach(letter => {
        letter.addEventListener('mouseenter', () => {
          gsap.to(letter, {
            y: -10,
            rotationZ: Math.random() * 10 - 5,
            color: "#8B4513",
            duration: 0.3,
            ease: "power2.out"
          });
        });

        letter.addEventListener('mouseleave', () => {
          gsap.to(letter, {
            y: 0,
            rotationZ: 0,
            color: "#3E2723",
            duration: 0.4,
            ease: "elastic.out(1, 0.5)"
          });
        });
      });

      // Continuous subtle animation
      tl.to(letters, {
        y: () => Math.random() * 4 - 2,
        rotationZ: () => Math.random() * 2 - 1,
        duration: 3,
        stagger: {
          each: 0.1,
          from: "random",
          repeat: -1,
          yoyo: true
        },
        ease: "sine.inOut"
      }, "+=1");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const firstLine = "UZAIR";
  const secondLine = "HASAN";

  const letterStyle = { 
    display: "inline-block", 
    overflow: "hidden",
    cursor: "none",
    position: "relative",
    zIndex: 2
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Brutalist Background Grid */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div 
            key={i}
            className="grid-line h-px bg-[#3E2723] mb-4 transform origin-left"
            style={{ opacity: 0 }}
          />
        ))}
      </div>

      {/* Corner Decorations */}
      <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#3E2723] opacity-40"></div>

      <h1
        ref={nameRef}
        className="text-[6rem] md:text-[8rem] lg:text-[7rem] leading-[0.8] mb-8 relative z-[2]"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#3E2723",
          fontWeight: 900,
          letterSpacing: "-0.02em",
        }}
      >
        {/* First Line */}
        <div className="relative">
          {firstLine.split("").map((char, i) => (
            <span 
              key={`first-${i}`} 
              className="letter relative"
              style={letterStyle}
              data-char={char}
            >
              {char}
              {/* Underline effect */}
              <span 
                className="absolute bottom-0 left-0 w-full h-1 bg-[#8B4513] transform scale-x-0 origin-left"
                style={{ opacity: 0.6 }}
              ></span>
            </span>
          ))}
        </div>

        {/* Second Line with offset for brutalist effect */}
        <div className="relative mt-2 ml-8 md:ml-12">
          {secondLine.split("").map((char, i) => (
            <span 
              key={`second-${i}`} 
              className="letter relative"
              style={letterStyle}
              data-char={char}
            >
              {char}
              {/* Underline effect */}
              <span 
                className="absolute bottom-0 left-0 w-full h-1 bg-[#8B4513] transform scale-x-0 origin-left"
                style={{ opacity: 0.6 }}
              ></span>
            </span>
          ))}
        </div>
      </h1>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-[3]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#3E2723] opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
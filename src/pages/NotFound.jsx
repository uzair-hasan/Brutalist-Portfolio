import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const NotFound = () => {
  const containerRef = useRef(null);

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Stagger animation for numbers
  const numberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // Button hover animation
  const buttonVariants = {
    initial: { 
      scale: 1,
      boxShadow: "8px 8px 0px 0px #8B7355"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "4px 4px 0px 0px #8B7355",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      boxShadow: "2px 2px 0px 0px #8B7355"
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#F5F1E6] flex items-center justify-center p-4 font-mono relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-[#8B7355] rotate-45"
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-[#A68A64] rotate-12"
      />
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-1/3 w-16 h-16 border-4 border-[#D4BFA0] -rotate-45"
      />

      {/* Main content */}
      <div className="text-center relative z-10">
        {/* 404 Numbers with individual animation */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          {['4', '0', '4'].map((number, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={numberVariants}
              initial="hidden"
              animate="visible"
              className="text-9xl md:text-12xl font-bold text-[#5D4037] relative"
            >
              {number}
              {/* Decorative underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="h-2 bg-[#8B7355] mt-2 origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Message */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-[#5D4037] mb-6 uppercase tracking-wider"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-lg md:text-xl text-[#8B7355] mb-8 max-w-md mx-auto leading-relaxed"
        >
          This is not the page you are looking for. The link might be broken or the page may have been removed.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-4 bg-[#A68A64] text-[#F5F1E6] font-bold text-lg uppercase border-4 border-[#5D4037] relative cursor-pointer"
            onClick={() => window.history.back()}
          >
            Go Back
            {/* Brutalist corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#5D4037]" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#5D4037]" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#5D4037]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#5D4037]" />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-4 bg-[#D4BFA0] text-[#5D4037] font-bold text-lg uppercase border-4 border-[#8B7355] relative cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            Home Page
            {/* Brutalist corner decorations */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#8B7355]" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#8B7355]" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#8B7355]" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#8B7355]" />
          </motion.button>
        </motion.div>

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute -bottom-10 -left-10 w-20 h-20 border-4 border-[#8B7355] rotate-45"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute -top-10 -right-10 w-16 h-16 border-4 border-[#A68A64] -rotate-45"
        />
      </div>
    </div>
  );
};

export default NotFound;
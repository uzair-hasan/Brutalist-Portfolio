import { motion } from "framer-motion";
import { Heart, ArrowUp, Coffee, Zap } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

   
  };

   const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

  return (
    <footer className="bg-[#3E2723] border-t-8 border-[#E8DCC4] py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-6 gap-1 w-full h-full">
          {Array.from({ length: 72 }).map((_, i) => (
            <div key={i} className="border border-[#E8DCC4]"></div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-10 w-8 h-8 border-2 border-[#D4A574] opacity-20 rotate-45"></div>
      <div className="absolute bottom-8 right-16 w-6 h-6 border-2 border-[#8B4513] opacity-20 rotate-12"></div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 border-2 border-[#E8DCC4] opacity-20 rotate-45"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Name Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-4"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
                transition: { duration: 0.3 },
              }}
              className="bg-[#D4A574] text-[#3E2723] px-6 py-3 border-4 border-[#E8DCC4] font-['Space_Grotesk'] font-black text-xl cursor-pointer hover:bg-[#8B4513] hover:text-[#F5E6D3] transition-all duration-300"
            >
              <a
                href="https://www.instagram.com/_________sarcastic__________/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                UZAIR HASAN
                <Zap className="w-5 h-5" />
              </a>
            </motion.div>
            <p className="font-['Space_Mono'] text-[#E8DCC4] text-sm font-bold text-center lg:text-left">
              FULL STACK DEVELOPER
            </p>
          </motion.div>

          {/* Crafted With Love */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 font-['Space_Mono'] text-[#E8DCC4] font-bold"
          >
            <span className="text-lg">CRAFTED WITH</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="flex items-center gap-1"
            >
              <Heart className="w-6 h-6 fill-[#8B4513] text-[#8B4513]" />
              <Coffee className="w-5 h-5 text-[#D4A574]" />
            </motion.div>
            <span className="text-lg">& BRUTALISM</span>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center lg:items-end gap-2"
          >
            <div className="font-['Space_Mono'] text-[#E8DCC4] font-bold text-sm text-center lg:text-right">
              © {new Date().getFullYear()} ALL RIGHTS RESERVED
            </div>
            <div className="font-['Space_Mono'] text-[#E8DCC4] text-xs opacity-80">
              NO TRACKING • NO COOKIES • JUST CODE
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="absolute bottom-3 right-8 bg-[#8B4513] text-[#F5E6D3] p-3 border-2 border-[#E8DCC4] hover:bg-[#D4A574] hover:text-[#3E2723] transition-all duration-300 cursor-pointer"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>

        {/* Separator Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-[#D4A574] via-[#8B4513] to-[#E8DCC4] mt-8 origin-left"
        />

        {/* Quick Links */}
       
      {/* Quick Links - UPDATED */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap justify-center gap-6 mt-6"
      >
        {[
          { label: 'HOME', id: 'hero' },
          { label: 'WORK', id: 'projects' },
          { label: 'ABOUT', id: 'about' },
          { label: 'CONTACT', id: 'contact' }
        ].map((link) => (
          <motion.button
            key={link.id}
            whileHover={{ scale: 1.05, y: -2 }}
            className="font-['Space_Mono'] text-[#E8DCC4] text-sm font-bold hover:text-[#D4A574] transition-colors duration-300 cursor-pointer"
            onClick={() => scrollToSection(link.id)}
          >
            {link.label}
          </motion.button>
        ))}
      </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-2 mt-6"
        >
          <div className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></div>
          <span className="font-['Space_Mono'] text-[#E8DCC4] text-xs font-bold">
            CURRENTLY BUILDING SOMETHING RADICAL
          </span>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E8DCC4] opacity-40"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E8DCC4] opacity-40"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#E8DCC4] opacity-40"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#E8DCC4] opacity-40"></div>
    </footer>
  );
}

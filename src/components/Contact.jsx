import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send, X, CheckCircle, AlertCircle } from 'lucide-react';
import { useSectionRefs } from '../contexts/SectionRefsContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  

  const socialLinks = [
    { icon: Github, label: 'GITHUB', color: 'bg-[#D4A574]', url: 'https://github.com/uzair-hasan' },
    { icon: Linkedin, label: 'LINKEDIN', color: 'bg-[#E8DCC4]', url: 'https://www.linkedin.com/in/uzair-hasan-4a37a5169/' },
    { icon: Mail, label: 'EMAIL', color: 'bg-[#A0826D]', url: 'mailto:0309uzair@gmail.com' },
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'NAME IS REQUIRED';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'NAME MUST BE AT LEAST 2 CHARACTERS';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'EMAIL IS REQUIRED';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'INVALID EMAIL FORMAT';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'MESSAGE IS REQUIRED';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'MESSAGE MUST BE AT LEAST 10 CHARACTERS';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // Clear any previous errors
    setErrors({});

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success modal
      setShowModal(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      setErrors({ submit: 'FAILED TO SEND MESSAGE. TRY AGAIN.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#D4A574] py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 text-[25rem] font-['Archivo_Black'] text-[#3E2723] opacity-5 pointer-events-none rotate-12">
        !!!
      </div>

      {/* Floating Decorations */}
      <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-[#3E2723] opacity-20 rotate-45"></div>
      <div className="absolute top-1/3 right-32 w-12 h-12 border-4 border-[#8B4513] opacity-20 rotate-12"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 border-4 border-[#E8DCC4] opacity-20 rotate-45"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-16">
            <h2 className="font-['Archivo_Black'] text-7xl md:text-8xl lg:text-9xl text-[#3E2723] leading-none mb-8">
              LET'S
              <br />
              TALK
            </h2>
            <p className="font-['Space_Mono'] text-xl md:text-2xl font-bold text-[#3E2723]">
              GOT A PROJECT? IDEA? OR JUST WANT TO SAY HI?
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F5E6D3] border-4 border-[#3E2723] p-8 md:p-12 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="font-['Space_Mono'] text-sm font-bold text-[#3E2723] block mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border-4 p-4 font-['Space_Mono'] text-lg font-bold focus:outline-none transition-colors bg-white ${
                    errors.name ? 'border-[#8B4513] bg-[#F5E6D3]' : 'border-[#3E2723] focus:border-[#8B4513]'
                  }`}
                  placeholder="Tyler Durden"
                />
                {errors.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mt-2"
                  >
                    <AlertCircle className="w-4 h-4 text-[#8B4513]" />
                    <span className="font-['Space_Mono'] text-sm font-bold text-[#8B4513]">
                      {errors.name}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="font-['Space_Mono'] text-sm font-bold text-[#3E2723] block mb-2">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border-4 p-4 font-['Space_Mono'] text-lg font-bold focus:outline-none transition-colors bg-white ${
                    errors.email ? 'border-[#8B4513] bg-[#F5E6D3]' : 'border-[#3E2723] focus:border-[#8B4513]'
                  }`}
                  placeholder="projectmayhem.fc.com"
                />
                {errors.email && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mt-2"
                  >
                    <AlertCircle className="w-4 h-4 text-[#8B4513]" />
                    <span className="font-['Space_Mono'] text-sm font-bold text-[#8B4513]">
                      {errors.email}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label className="font-['Space_Mono'] text-sm font-bold text-[#3E2723] block mb-2">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full border-4 p-4 font-['Space_Mono'] text-lg font-bold focus:outline-none transition-colors resize-none bg-white ${
                    errors.message ? 'border-[#8B4513] bg-[#F5E6D3]' : 'border-[#3E2723] focus:border-[#8B4513]'
                  }`}
                  placeholder="LET'S BUILD SOMETHING RADICAL..."
                />
                {errors.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mt-2"
                  >
                    <AlertCircle className="w-4 h-4 text-[#8B4513]" />
                    <span className="font-['Space_Mono'] text-sm font-bold text-[#8B4513]">
                      {errors.message}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full border-4 py-6 font-['Space_Grotesk'] text-xl md:text-2xl font-bold transition-all flex items-center justify-center gap-3 cursor-pointer ${
                  isSubmitting 
                    ? 'bg-[#A0826D] border-[#A0826D] text-[#3E2723] cursor-not-allowed' 
                    : 'bg-[#3E2723] border-[#3E2723] text-[#E8DCC4] hover:bg-[#8B4513] hover:border-[#8B4513] hover:text-[#F5E6D3]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-6 h-6" />
                    </motion.div>
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    SEND MESSAGE
                  </>
                )}
              </motion.button>

              {/* Submit Error */}
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 justify-center p-4 bg-[#8B4513] border-2 border-[#3E2723]"
                >
                  <AlertCircle className="w-5 h-5 text-[#F5E6D3]" />
                  <span className="font-['Space_Mono'] text-sm font-bold text-[#F5E6D3]">
                    {errors.submit}
                  </span>
                </motion.div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, rotate: 3 }}
                className={`${link.color} border-4 border-[#3E2723] p-6 flex flex-col items-center justify-center gap-2 cursor-pointer group hover:bg-opacity-90 transition-all duration-300`}
              >
                <link.icon className="w-8 h-8 text-[#3E2723] group-hover:scale-110 transition-transform" />
                <span className="font-['Space_Mono'] text-xs font-bold text-[#3E2723]">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#3E2723] bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              className="bg-[#F5E6D3] border-4 border-[#3E2723] p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[#3E2723] hover:text-[#8B4513] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Success Content */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="mb-6"
                >
                  <CheckCircle className="w-16 h-16 text-[#8B4513] mx-auto" />
                </motion.div>
                
                <h3 className="font-['Space_Grotesk'] text-3xl font-black text-[#3E2723] mb-4">
                  MESSAGE SENT!
                </h3>
                
                <p className="font-['Space_Mono'] text-lg font-bold text-[#3E2723] mb-6">
                  THANKS FOR REACHING OUT. I'LL GET BACK TO YOU SOON.
                </p>

                <motion.button
                  onClick={() => setShowModal(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#3E2723] text-[#F5E6D3] px-8 py-3 font-['Space_Mono'] font-bold border-2 border-[#3E2723] hover:bg-[#8B4513] transition-colors cursor-pointer"
                >
                  GOT IT
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-[#3E2723] opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-[#3E2723] opacity-40"></div>
    </section>
  );
}
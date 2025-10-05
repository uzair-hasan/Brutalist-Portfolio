// components/CustomCursor.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [context, setContext] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Context detection
    const handleHoverStart = (e) => {
      const target = e.target;
      if (target.closest('button, a, [role="button"]')) {
        setHovered(true);
        if (target.classList.contains('brutalist-btn')) {
          setContext('button');
        } else if (target.classList.contains('project-card')) {
          setContext('project');
        } else if (target.classList.contains('text-link')) {
          setContext('link');
        }
      }
    };

    const handleHoverEnd = () => {
      setHovered(false);
      setContext('default');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      scale: 1,
      backgroundColor: '#8B4513',
    },
    button: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 2,
      backgroundColor: '#D2691E',
    },
    project: {
      x: position.x - 12,
      y: position.y - 12,
      scale: 1.5,
      backgroundColor: '#A0522D',
      borderRadius: '0%',
    },
    link: {
      x: position.x - 8,
      y: position.y - 8,
      scale: 1.2,
      backgroundColor: '#CD853F',
      borderRadius: '50%',
    },
    clicked: {
      scale: 0.8,
      backgroundColor: '#5D4037',
    }
  };

  if (hidden) return null;

  return (
    <motion.div
      className="custom-cursor"
      variants={cursorVariants}
      animate={[
        clicked ? 'clicked' : 'default',
        hovered ? context : 'default'
      ]}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
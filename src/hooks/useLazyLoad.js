// hooks/useLazyLoad.js
import { useEffect, useRef, useState } from 'react';

export const useLazyLoad = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// components/LazyImage.jsx
import React from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [ref, isVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: '50px',
  });

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <img src={src} alt={alt} {...props} />
      ) : (
        <div className="bg-brown-200 animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;
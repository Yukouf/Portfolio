import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [ref, isVisible] as const;
};

export const useParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
};

export const useVisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simuler un compteur de visiteurs (en production, ça viendrait d'une API)
    const savedCount = localStorage.getItem('visitorCount');
    const currentCount = savedCount ? parseInt(savedCount) : Math.floor(Math.random() * 10000) + 5000;
    
    // Incrementer à chaque visite
    const newCount = currentCount + 1;
    localStorage.setItem('visitorCount', newCount.toString());

    // Animation du compteur
    setIsAnimating(true);
    let current = 0;
    const increment = Math.ceil(newCount / 100);
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= newCount) {
        current = newCount;
        clearInterval(timer);
        setIsAnimating(false);
      }
      setCount(current);
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return { count, isAnimating };
};


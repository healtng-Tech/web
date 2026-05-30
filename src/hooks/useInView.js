import { useEffect, useRef, useState } from 'react';

/**
 * useInView
 * Reemplaza framer-motion whileInView con IntersectionObserver nativo.
 * Sin dependencias externas. Cleanup garantizado — sin fugas de memoria.
 */
export function useInView({
  threshold  = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once       = true,
} = {}) {
  const ref     = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
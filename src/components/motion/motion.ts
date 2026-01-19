/**
 * Motion utilities for scroll-triggered animations
 * Respects prefers-reduced-motion
 */

export interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Calculate stagger delay for a given index
 */
export function getStaggerDelay(index: number, baseDelay: number = 80): number {
  return index * baseDelay;
}

/**
 * Initialize reveal animations on elements with [data-reveal] attribute
 */
export function initRevealAnimations(options: RevealOptions = {}): void {
  if (typeof window === 'undefined') return;

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    once = true,
  } = options;

  // If user prefers reduced motion, show all elements immediately
  if (prefersReducedMotion()) {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay || '0', 10);

          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);

          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          entry.target.classList.remove('revealed');
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Initialize stagger animations on container elements with [data-stagger] attribute
 * Children will receive staggered delays automatically
 */
export function initStaggerAnimations(baseDelay: number = 80): void {
  if (typeof window === 'undefined') return;

  if (prefersReducedMotion()) {
    document.querySelectorAll('[data-stagger] > *').forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = '1';
      element.style.transform = 'none';
    });
    return;
  }

  document.querySelectorAll('[data-stagger]').forEach((container) => {
    const children = container.children;
    Array.from(children).forEach((child, index) => {
      const element = child as HTMLElement;
      if (element.hasAttribute('data-reveal')) {
        element.dataset.revealDelay = String(getStaggerDelay(index, baseDelay));
      }
    });
  });
}

/**
 * Initialize all motion systems
 */
export function initMotion(options: RevealOptions = {}): void {
  initStaggerAnimations();
  initRevealAnimations(options);
}

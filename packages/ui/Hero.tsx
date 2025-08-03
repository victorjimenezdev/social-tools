'use client';

import Image from 'next/image';
import React from 'react';
import { buttonVariants } from './components/Button';
import { useIntersectionObserver } from './useIntersectionObserver';

interface HeroProps {
  title: string;
  subtitle: string;
  cta: { href: string; label: string };
  imageAlt: string;
}

export function Hero({ title, subtitle, cta, imageAlt }: HeroProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const { ref, visible } = useIntersectionObserver<HTMLDivElement>(
    prefersReducedMotion
  );

  return (
    <section
      ref={ref}
      className={`pt-12 pb-8 md:pt-24 md:pb-16 text-center transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-black">{title}</h1>
      <p className="mt-4 max-w-2xl mx-auto">{subtitle}</p>
      <a
        href={cta.href}
        className={`${buttonVariants({})} bg-gradient-to-r from-primary to-accent text-white mt-8 inline-block`}
      >
        {cta.label}
      </a>
      <div className="mt-12 flex justify-center">
        <Image src="/hero-phones.png" alt={imageAlt} width={640} height={760} />
      </div>
    </section>
  );
}

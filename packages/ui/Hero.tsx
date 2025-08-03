import * as React from 'react';

export function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-24 text-center md:py-32">
      <div className="flex max-w-2xl flex-col items-center gap-6">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Discover Social Tools
        </h1>
        <p className="text-base leading-relaxed md:text-lg">
          Free utilities to boost your social media game.
        </p>
        <a
          href="/tools"
          className="btn-primary font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#6554FF]"
        >
          Browse Tools
        </a>
      </div>
      <img src="/hero-mockup.png" alt="" className="mt-12 w-full max-w-md" />
    </section>
  );
}

export default Hero;

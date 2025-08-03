import * as React from 'react';

export function Hero() {
  return (
    <section className="max-w-2xl mx-auto text-center pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">Discover Social Tools</h1>
      <p className="mb-8 text-lg">Free utilities to boost your social media game.</p>
      <a href="/tools" className="btn-primary">Browse Tools</a>
      <img
        src="/hero-mockup.png"
        alt=""
        className="mx-auto mt-12"
      />
    </section>
  );
}

export default Hero;

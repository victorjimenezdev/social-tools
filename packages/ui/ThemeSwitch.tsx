'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './Icon';

export function ThemeSwitch() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 md:static flex h-10 w-10 items-center justify-center rounded-full border border-accent/20"
    >
      <span className="sr-only">Toggle dark mode</span>
      {theme === 'dark' ? (
        <Icon as={FontAwesomeIcon} icon={faSun} />
      ) : (
        <Icon as={FontAwesomeIcon} icon={faMoon} />
      )}
    </button>
  );
}

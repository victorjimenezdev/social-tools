'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import styles from './ThemeSwitch.module.scss';

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
      <button type="button" onClick={toggleTheme} className={styles.button}>
        <span className="sr-only">Toggle dark mode</span>
        {theme === 'dark' ? (
          <FontAwesomeIcon icon={faSun} className="h-6 w-6" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="h-6 w-6" />
        )}
      </button>
  );
}

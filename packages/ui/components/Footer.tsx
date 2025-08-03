import * as React from 'react';
import { LayerStack } from '../LayerStack';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 text-center text-sm sm:flex-row">
        <span>
          © {year} Social Tools Hub –{' '}
          <a
            href="#"
            className="hover:underline"
            aria-label="Privacy policy"
          >
            Privacy
          </a>{' '}
          ·{' '}
          <a
            href="#"
            className="hover:underline"
            aria-label="Contact us"
          >
            Contact
          </a>
        </span>
        <nav className="flex gap-2" aria-label="Secondary">
          <a
            href="#"
            aria-label="Twitter"
            className="rounded-full bg-white p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="rounded-full bg-white p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </nav>
      </div>
      <LayerStack direction="bottom" />
    </footer>
  );
}

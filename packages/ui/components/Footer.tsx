import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LayerStack } from '../LayerStack';
import { Icon } from '../Icon';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surfaceAlt dark:bg-dark-surfaceAlt">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 text-center text-sm sm:flex-row">
        <span>
          © {year} Social Tools Hub –{' '}
          <a href="#" className="hover:underline" aria-label="Privacy policy">
            Privacy
          </a>{' '}
          ·{' '}
          <a href="#" className="hover:underline" aria-label="Contact us">
            Contact
          </a>
        </span>
        <nav className="flex gap-2" aria-label="Secondary">
          <a
            href="#"
            aria-label="Twitter"
            className="p-2 rounded-full border border-accent/20"
          >
            <Icon as={FontAwesomeIcon} icon={faTwitter} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="p-2 rounded-full border border-accent/20"
          >
            <Icon as={FontAwesomeIcon} icon={faGithub} />
          </a>
        </nav>
      </div>
      <LayerStack direction="bottom" />
    </footer>
  );
}

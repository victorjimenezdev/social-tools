import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LayerStack } from '../LayerStack';
import styles from './Footer.module.scss';

  export function Footer() {
    const year = new Date().getFullYear();
    return (
      <footer className={styles.footer}>
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
            <a href="#" aria-label="Twitter" className={styles.navLink}>
              <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className={styles.navLink}>
              <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
            </a>
          </nav>
      </div>
      <LayerStack direction="bottom" />
    </footer>
  );
}

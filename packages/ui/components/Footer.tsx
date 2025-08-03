import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { LayerStack } from '../LayerStack';
import { Icon } from '../Icon';
import styles from './Footer.module.scss';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles['footer__inner']}>
        <span className={styles['footer__text']}>
          © {year} Social Tools Hub –{' '}
          <a
            href="#"
            className={styles['footer__link']}
            aria-label="Privacy policy"
          >
            Privacy
          </a>{' '}
          ·{' '}
          <a
            href="#"
            className={styles['footer__link']}
            aria-label="Contact us"
          >
            Contact
          </a>
        </span>
        <nav className={styles['footer__social']} aria-label="Secondary">
          <a
            href="#"
            aria-label="Twitter"
            className={styles['footer__social-link']}
          >
            <Icon as={FontAwesomeIcon} icon={faTwitter} />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className={styles['footer__social-link']}
          >
            <Icon as={FontAwesomeIcon} icon={faGithub} />
          </a>
        </nav>
      </div>
      <LayerStack direction="bottom" />
    </footer>
  );
}

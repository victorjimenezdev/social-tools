import * as React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './Icon';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only"
        aria-label="Skip to content"
      >
        <Icon as={FontAwesomeIcon} icon={faArrowDown} />
      </a>
      <Header />
      <main id="main" className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default AppShell;

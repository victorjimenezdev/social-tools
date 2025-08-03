import * as React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main" className="container mx-auto p-4">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default AppShell;

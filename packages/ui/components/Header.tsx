'use client';

import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import { Lobster_Two } from 'next/font/google';
import { LayerStack } from '../LayerStack';

const lobster = Lobster_Two({
  subsets: ['latin'],
  weight: '400',
});

const navItems = [
  { href: '/learn-more', label: 'Learn More', variant: 'outline' as const },
  { href: '/tools', label: 'Browse Tools', variant: 'filled' as const },
];

export function Header() {
  const pathname = usePathname();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:ring">
        Skip to content
      </a>
      <header className="bg-gray-50">
        <LayerStack direction="top" />
        <Disclosure as="nav" role="navigation" aria-label="Primary">
          {({ open }) => (
            <NavContent
              open={open}
              pathname={pathname}
              buttonRef={buttonRef}
              firstLinkRef={firstLinkRef}
            />
          )}
        </Disclosure>
      </header>
    </>
  );
}

interface NavContentProps {
  open: boolean;
  pathname: string | null;
  buttonRef: React.RefObject<HTMLButtonElement>;
  firstLinkRef: React.RefObject<HTMLAnchorElement>;
}

function NavContent({
  open,
  pathname,
  buttonRef,
  firstLinkRef,
}: NavContentProps) {
  React.useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
    } else {
      buttonRef.current?.focus();
    }
  }, [open, buttonRef, firstLinkRef]);

  const isActive = (href: string) =>
    pathname === href || (href === '/tools' && pathname?.startsWith('/tool'));

  const linkClass = (href: string, variant: 'outline' | 'filled') => {
    const base = 'px-4 py-2 rounded-full transition-colors';
    const style =
      variant === 'outline'
        ? 'border-2 border-primary text-primary hover:bg-primary/10'
        : 'bg-primary text-primary-foreground hover:bg-primary/90';
    const active = isActive(href) ? ' ring-2 ring-primary' : '';
    return `${base} ${style}${active}`;
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a
          href="/"
          className={`${lobster.className} text-2xl${
            pathname === '/' ? ' text-primary font-semibold' : ' font-bold'
          }`}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Social Tools Hub
        </a>
        <div className="sm:hidden">
          <Disclosure.Button
            ref={buttonRef}
            className="rounded p-2"
            aria-label="Toggle navigation"
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </Disclosure.Button>
        </div>
        <div className="hidden sm:flex sm:space-x-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClass(item.href, item.variant)}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <Disclosure.Panel className="sm:hidden" data-testid="mobile-nav">
        <div className="container mx-auto flex flex-col space-y-2 p-4">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClass(item.href, item.variant)}
              ref={index === 0 ? firstLinkRef : undefined}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </Disclosure.Panel>
    </>
  );
}


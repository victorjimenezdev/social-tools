'use client';

import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import { LayerStack } from '../LayerStack';
import { ThemeSwitch } from '../ThemeSwitch';

const navItems = [
  { href: '/learn-more', label: 'Learn More' },
  { href: '/tools', label: 'Browse Tools' },
];

interface HeaderProps {
  pathname?: string | null;
}

export function Header({ pathname: propPathname }: HeaderProps = {}) {
  const pathname = propPathname ?? usePathname();
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null);

  return (
    <header className="sticky top-0 z-10 h-16 bg-surface shadow dark:bg-dark-surface">
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

  const linkClass = (href: string) =>
    `transition-colors hover:text-accent${isActive(href) ? ' text-primary' : ''}`;

  return (
    <>
      <div className="container flex h-16 items-center justify-between gap-6 px-4">
        <a
          href="/"
          className={`text-2xl font-bold${pathname === '/' ? ' text-primary' : ''}`}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          Social Tools Hub
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
          <Disclosure.Button
            ref={buttonRef}
            className="md:hidden p-2"
            aria-label="Toggle navigation"
          >
            <span aria-hidden="true">{open ? '✕' : '☰'}</span>
          </Disclosure.Button>
          <ThemeSwitch />
        </div>
      </div>
      <Disclosure.Panel className="md:hidden" data-testid="mobile-nav">
        <div className="container flex flex-col gap-4 p-4">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
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


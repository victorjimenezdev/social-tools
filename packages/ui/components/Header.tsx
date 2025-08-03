'use client';

import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { usePathname } from 'next/navigation';
import { tools } from '@lib/tools';

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

  const linkClass = (href: string) =>
    `px-2 py-1${pathname === href ? ' text-primary font-semibold' : ''}`;

  return (
    <>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a
          href="/"
          className={`text-xl font-bold${
            pathname === '/' ? ' text-primary font-semibold' : ''
          }`}
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
          {tools.map((tool) => {
            const href = `/tool/${tool.slug}`;
            return (
              <a key={tool.slug} href={href} className={linkClass(href)}>
                {tool.title}
              </a>
            );
          })}
        </div>
      </div>
      <Disclosure.Panel className="sm:hidden">
        <div className="container mx-auto flex flex-col space-y-1 p-4">
          {tools.map((tool, index) => {
            const href = `/tool/${tool.slug}`;
            return (
              <a
                key={tool.slug}
                href={href}
                className={linkClass(href)}
                ref={index === 0 ? firstLinkRef : undefined}
              >
                {tool.title}
              </a>
            );
          })}
        </div>
      </Disclosure.Panel>
    </>
  );
}


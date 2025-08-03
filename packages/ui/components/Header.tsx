'use client';

import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { tools } from '@lib/tools';

export function Header() {
  return (
    <header className="bg-gray-50">
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Disclosure as="nav" role="navigation" aria-label="Primary">
        {({ open }) => (
          <>
            <div className="container mx-auto flex items-center justify-between p-4">
              <a href="/" className="text-xl font-bold">
                Social Tools Hub
              </a>
              <div className="sm:hidden">
                <Disclosure.Button
                  className="rounded p-2"
                  aria-label="Toggle navigation"
                >
                  <span aria-hidden="true">{open ? '✕' : '☰'}</span>
                </Disclosure.Button>
              </div>
              <div className="hidden sm:flex sm:space-x-4">
                {tools.map((tool) => (
                  <a
                    key={tool.slug}
                    href={`/tool/${tool.slug}`}
                    className="px-2 py-1"
                  >
                    {tool.title}
                  </a>
                ))}
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="container mx-auto flex flex-col space-y-1 p-4">
                {tools.map((tool) => (
                  <a
                    key={tool.slug}
                    href={`/tool/${tool.slug}`}
                    className="px-2 py-1"
                  >
                    {tool.title}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

"use client";

import * as React from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { LayerStack } from "../LayerStack";
import { ThemeSwitch } from "../ThemeSwitch";
import styles from "./Header.module.scss";

const navItems = [
  { href: "/learn-more", label: "Learn More" },
  { href: "/tools", label: "Browse Tools" },
];

interface HeaderProps {
  pathname?: string | null;
}

/**
 * Render the site header with primary navigation links.
 *
 * @param {HeaderProps} [props] - Optional component props.
 * @returns {JSX.Element} The rendered header component.
 */
export function Header({ pathname: propPathname }: HeaderProps = {}) {
  const pathname = propPathname ?? usePathname();

  /**
   * Determine if the given href matches the current path.
   *
   * @param {string} href - Target link href.
   * @returns {boolean} True if the link is active.
   */
  const isActive = (href: string): boolean =>
    pathname === href || (href === "/tools" && pathname?.startsWith("/tool"));

  return (
    <header className={styles.header} role="banner">
      <LayerStack direction="top" />
      <nav className={styles["site-nav"]} role="navigation" aria-label="Primary">
        <a
          href="/"
          className={styles["site-nav__logo"]}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Social Tools Hub
        </a>
        <ul className={styles["site-nav__list"]}>
          {navItems.map((item) => (
            <li key={item.href} className={styles["site-nav__item"]}>
              <a
                href={item.href}
                className={clsx(
                  styles["site-nav__link"],
                  isActive(item.href) && styles["site-nav__link--active"]
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </nav>
    </header>
  );
}



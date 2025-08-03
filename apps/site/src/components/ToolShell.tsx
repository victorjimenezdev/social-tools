import { ReactNode } from 'react';
import Head from 'next/head';
import { Breadcrumb } from '@ui/index';
import { breadcrumbLd } from '@lib/seo';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface Props {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default function ToolShell({ children, breadcrumbs }: Props) {
  const ld = breadcrumbs && breadcrumbs.length > 0
    ? breadcrumbLd(breadcrumbs.map(({ name, href }) => ({ name, url: href })))
    : null;

  return (
    <>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <>
          <Head>{ld}</Head>
          <Breadcrumb items={breadcrumbs} />
        </>
      )}
      {children}
    </>
  );
}

import React from "react";
import AdsProvider, { AdSlot } from "@ads/index";
import AnalyticsProvider from "@ads/analytics";
import AxeDevtools from "../components/AxeDevtools";
import Head from "next/head";

// Basic SEO component for default metadata
function Seo() {
  return (
    <Head>
      <title>Social Tools</title>
      <meta name="description" content="Social tools and utilities" />
    </Head>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <AdsProvider />
        <AnalyticsProvider />
        {process.env.NODE_ENV !== "production" && <AxeDevtools />}
        <Seo />
        <main className="mx-auto max-w-4xl p-4">{children}</main>
        <div className="mx-auto my-4 flex justify-center">
          <AdSlot />
        </div>
      </body>
    </html>
  );
}

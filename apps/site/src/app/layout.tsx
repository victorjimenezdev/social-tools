import React from "react";
import "./globals.css";
import AdsProvider, { AdSlot } from "@ads/index";
import AnalyticsProvider from "@ads/analytics";
import AxeDevtools from "../components/AxeDevtools";
import Head from "next/head";
import { Header, Footer } from "@ui/index";
import { Inter } from "next/font/google";

// Basic SEO component for default metadata
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <AdsProvider />
        <AnalyticsProvider />
        {process.env.NODE_ENV !== "production" && <AxeDevtools />}
        <Seo />
        <Header />
        <main id="main" className="container mx-auto p-4">
          {children}
        </main>
        <div className="mx-auto my-4 flex justify-center">
          <AdSlot />
        </div>
        <Footer />
      </body>
    </html>
  );
}

import type { ReactNode } from "react";
import "./globals.css";
import AdsProvider, { AdSlot } from "@ads/index";
import AnalyticsProvider from "@ads/analytics";
import AxeDevtools from "../components/AxeDevtools";
import Head from "next/head";
import { Header, Footer } from "@ui/index";
import { DM_Sans } from "next/font/google";

// Basic SEO component for default metadata
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dm-sans",
});

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
  children: ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="min-h-screen font-sans">
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

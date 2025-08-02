import React from "react";
import AdsProvider from "@ads/index";
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
        <Seo />
        <main className="mx-auto max-w-4xl p-4">{children}</main>
        <div className="mx-auto my-4 flex justify-center">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
            data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </body>
    </html>
  );
}

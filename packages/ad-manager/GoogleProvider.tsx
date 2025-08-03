import * as React from "react";
import Script from "next/script";

/**
 * Loads the Google AdSense script when a publisher ID is provided.
 */
export const GoogleProvider: React.FC = () => {
  const client = process.env.NEXT_PUBLIC_ADSENSE_ID;
  if (!client) return null;
  return (
    <Script
      id="adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
};

export default GoogleProvider;

import * as React from "react";
import Script from "next/script";

export const AnalyticsProvider: React.FC = () => {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <Script
      id="plausible"
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
    />
  );
};

export default AnalyticsProvider;

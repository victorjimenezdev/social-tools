import * as React from "react";
import GoogleProvider from "./GoogleProvider";
import ExoClickProvider from "./ExoClickProvider";

const getNetwork = () => process.env.NEXT_PUBLIC_AD_NETWORK ?? "adsense";

export const AdsProvider: React.FC = () => {
  const network = getNetwork();
  return network === "exoclick" ? <ExoClickProvider /> : <GoogleProvider />;
};

export const AdSlot: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  style,
  ...rest
}) => {
  const network = getNetwork();
  if (network === "exoclick") {
    return (
      <div
        className={["exoclick", className].filter(Boolean).join(" ")}
        data-id={process.env.NEXT_PUBLIC_EXOCLICK_ZONE}
        style={style}
        {...rest}
      />
    );
  }
  return (
    <ins
      className={["adsbygoogle", className].filter(Boolean).join(" ")}
      style={{ display: "block", ...style }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
      data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true"
      {...rest}
    />
  );
};

export default AdsProvider;

import * as React from "react";
import Script from "next/script";

/**
 * Loads the ExoClick script and renders a sample ad slot.
 */
export const ExoClickProvider: React.FC = () => {
  const pid = process.env.NEXT_PUBLIC_EXOCLICK_PID;
  const zone = process.env.NEXT_PUBLIC_EXOCLICK_ZONE;
  if (!pid) return null;
  return (
    <>
      <Script async src={`https://a.exoclick.com/tag.php?pid=${pid}`} />
      {zone && <div className="exoclick" data-id={zone} />}
    </>
  );
};

export default ExoClickProvider;

import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";

vi.mock("next/script", () => ({
  default: (props: any) => <div data-testid="script" {...props} />,
}));

import { AdsProvider } from "./index";

afterEach(() => {
  cleanup();
  delete process.env.NEXT_PUBLIC_AD_NETWORK;
  delete process.env.NEXT_PUBLIC_ADSENSE_ID;
  delete process.env.NEXT_PUBLIC_EXOCLICK_PID;
});

describe("AdsProvider", () => {
  it("renders AdSense script when network is adsense", () => {
    process.env.NEXT_PUBLIC_AD_NETWORK = "adsense";
    const id = "ca-pub-123";
    process.env.NEXT_PUBLIC_ADSENSE_ID = id;
    render(<AdsProvider />);
    const script = screen.getByTestId("script");
    expect(script.getAttribute("src")).toBe(
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`
    );
  });

  it("renders ExoClick script when network is exoclick", () => {
    process.env.NEXT_PUBLIC_AD_NETWORK = "exoclick";
    const pid = "999";
    process.env.NEXT_PUBLIC_EXOCLICK_PID = pid;
    render(<AdsProvider />);
    const script = screen.getByTestId("script");
    expect(script.getAttribute("src")).toBe(
      `https://a.exoclick.com/tag.php?pid=${pid}`
    );
  });
});

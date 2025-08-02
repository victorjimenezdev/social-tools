import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/script", () => ({
  default: (props: any) => <div data-testid="script" {...props} />,
}));

import { AdsProvider } from "./index";

describe("AdsProvider", () => {
  it("renders Script with correct src", () => {
    const id = "ca-pub-123";
    process.env.NEXT_PUBLIC_ADSENSE_ID = id;
    render(<AdsProvider />);
    const script = screen.getByTestId("script");
    expect(script.getAttribute("src")).toBe(
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${id}`
    );
  });
});

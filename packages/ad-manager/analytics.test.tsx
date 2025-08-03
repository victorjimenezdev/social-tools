import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/script", () => ({
  default: (props: any) => <div data-testid="script" {...props} />,
}));

import AnalyticsProvider from "./analytics";

describe("AnalyticsProvider", () => {
  it("renders Plausible script when domain is set", () => {
    process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN = "example.com";
    render(<AnalyticsProvider />);
    const script = screen.getByTestId("script");
    expect(script.getAttribute("src")).toBe(
      "https://plausible.io/js/script.js"
    );
    expect(script.getAttribute("data-domain")).toBe("example.com");
  });

  it("returns null when domain is missing", () => {
    delete process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
    const { container } = render(<AnalyticsProvider />);
    expect(container.firstChild).toBeNull();
  });
});

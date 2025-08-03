import * as React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("@axe-core/react", () => ({
  default: vi.fn(),
}));
vi.mock("react-dom", () => ({}));

import AxeDevtools from "./AxeDevtools";

describe("AxeDevtools", () => {
  it("initializes axe-core when not in production", async () => {
    render(<AxeDevtools />);
    await new Promise((r) => setTimeout(r, 0));
    const axe = await import("@axe-core/react");
    expect(axe.default).toHaveBeenCalled();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { metadataFor, breadcrumbLd } from "./seo";

describe("metadataFor", () => {
  it("builds metadata with canonical and open graph tags", () => {
    const meta = metadataFor({ title: "My Tool", description: "Great" });
    expect(meta).toMatchObject({
      title: "My Tool",
      description: "Great",
      alternates: { canonical: "/tool/my-tool" },
      openGraph: {
        title: "My Tool",
        description: "Great",
        url: "/tool/my-tool",
      },
    });
  });
});

describe("breadcrumbLd", () => {
  it("outputs breadcrumb json-ld", () => {
    const { container } = render(
      breadcrumbLd([{ name: "Home", url: "/" }])
    );
    const script = container.querySelector("script");
    const data = JSON.parse(script?.textContent || "{}");
    expect(data).toHaveProperty("@context", "https://schema.org");
    expect(data).toHaveProperty("@type", "BreadcrumbList");
    expect(data).toHaveProperty("itemListElement");
  });
});

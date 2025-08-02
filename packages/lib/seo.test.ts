import { describe, it, expect } from "vitest";
import { metadataFor } from "./seo";

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

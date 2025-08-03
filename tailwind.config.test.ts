import config from "./tailwind.config";
import { describe, it, expect } from "vitest";

describe("tailwind design tokens", () => {
  it("defines Pastel Pomegranate light palette", () => {
    expect(config.theme?.extend?.colors?.light).toMatchObject({
      surface: "#FFFBF7",
      primary: "#EB5675",
      accent: "#6554FF",
      text: "#26252D",
    });
  });

  it("defines Midnight Plum dark palette", () => {
    expect(config.theme?.extend?.colors?.dark).toMatchObject({
      surface: "#14131A",
      primary: "#F06A82",
      accent: "#8B84FF",
      text: "#E5E4EA",
    });
  });

  it("exposes card box shadow", () => {
    expect(config.theme?.extend?.boxShadow?.card).toBe(
      "0 3px 8px rgba(0,0,0,0.04)"
    );
  });
});

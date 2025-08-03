import { beforeEach, afterEach, vi } from "vitest";

let errorSpy: ReturnType<typeof vi.spyOn>;
let warnSpy: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  errorSpy = vi
    .spyOn(console, "error")
    .mockImplementation((...args) => {
      throw new Error(args.join(" "));
    });
  warnSpy = vi
    .spyOn(console, "warn")
    .mockImplementation((...args) => {
      throw new Error(args.join(" "));
    });
});

afterEach(() => {
  errorSpy.mockRestore();
  warnSpy.mockRestore();
});

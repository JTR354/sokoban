import { it, describe, expect } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePlayerStore } from "../player";
import { beforeEach } from "vitest";

describe("player", () => {
  beforeEach(() => {
    const { result } = renderHook(usePlayerStore);
    act(() => {
      result.current.reset();
    });
  });
  it("should move to left", () => {
    const { result } = renderHook(usePlayerStore);
    act(() => {
      result.current.movePlayerToLeft();
    });
    expect(result.current.player.x).toBe(0);
  });
  it("should move to right", () => {
    const { result } = renderHook(usePlayerStore);
    act(() => {
      result.current.movePlayerToRight();
    });
    expect(result.current.player.x).toBe(2);
  });
  it("should move to up", () => {
    const { result } = renderHook(usePlayerStore);
    act(() => {
      result.current.movePlayerToUp();
    });
    expect(result.current.player.y).toBe(0);
  });
  it("should move to down", () => {
    const { result } = renderHook(usePlayerStore);
    act(() => {
      result.current.movePlayerToDown();
    });
    expect(result.current.player.y).toBe(2);
  });
});

import { it, describe, expect } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePlayerStore } from "../player";

describe("player", () => {
  it("should move to left", () => {
    const { result } = renderHook(usePlayerStore);
    act(() => {
      result.current.movePlayerToLeft();
    });
    expect(result.current.player.x).toBe(0);
  });
});

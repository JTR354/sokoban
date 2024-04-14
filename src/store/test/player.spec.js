import { it, describe, expect } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePlayerStore } from "../player";
import { beforeEach } from "vitest";
import { useMapStore } from "../map";

describe("player", () => {
  describe("normal move", () => {
    beforeEach(() => {
      const { result } = renderHook(useMapStore);
      act(() => {
        result.current.setMap([
          [2, 2, 2],
          [2, 2, 2],
          [2, 2, 2],
        ]);
      });
    });
    it("should move to left", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToLeft();
      });
      expect(result.current.player.x).toBe(0);
    });
    it("should move to right", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToRight();
      });
      expect(result.current.player.x).toBe(2);
    });
    it("should move to up", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToUp();
      });
      expect(result.current.player.y).toBe(0);
    });
    it("should move to down", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToDown();
      });
      expect(result.current.player.y).toBe(2);
    });
  });

  describe("collision move", () => {
    beforeEach(() => {
      const { result } = renderHook(useMapStore);
      act(() => {
        result.current.setMap([
          [1, 1, 1],
          [1, 2, 1],
          [1, 1, 1],
        ]);
      });
    });
    it("should not move to left when player collision the wall", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToLeft();
      });
      expect(result.current.player.x).toBe(1);
    });
    it("should not move to right when player collision the wall", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToRight();
      });
      expect(result.current.player.x).toBe(1);
    });
    it("should not move to up when player collision the wall", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToUp();
      });
      expect(result.current.player.x).toBe(1);
    });
    it("should not move to down when player collision the wall", () => {
      const { result } = renderHook(usePlayerStore);
      act(() => {
        result.current.setPlayer({ x: 1, y: 1 });
        result.current.movePlayerToDown();
      });
      expect(result.current.player.x).toBe(1);
    });
  });
});

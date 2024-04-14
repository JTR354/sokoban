import { describe } from "vitest";
import { useMapStore } from "../map";
import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react";
import { expect } from "vitest";
import { it } from "vitest";

describe("map", () => {
  it("setupMap", () => {
    const newMap = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ];
    const { result } = renderHook(useMapStore);
    act(() => {
      result.current.setMap(newMap);
    });
    expect(result.current.map).toBe(newMap);
  });
});

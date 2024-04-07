import { create } from "zustand";

export const MapTile = {
  WALL: 1,
  FLOOR: 2,
};

export const useMapStore = create(() => {
  return {
    map: [
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ],
  };
});

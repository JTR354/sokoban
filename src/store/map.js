import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const MapTile = {
  WALL: 1,
  FLOOR: 2,
};

export const useMapStore = create(
  immer((set, get) => {
    return {
      map: [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ],
      setMap(newMap) {
        set((state) => {
          state.map = newMap;
        });
      },
      isWall(position) {
        return get().map[position.x][position.y] === MapTile.WALL;
      },
    };
  }),
);

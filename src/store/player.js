import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useMapStore } from "./map";

export const usePlayerStore = create(
  immer((set, get) => {
    return {
      player: {
        x: 1,
        y: 1,
      },
      _move(dx, dy) {
        const { x, y } = get().player;
        const { isWall } = useMapStore.getState();
        const nextPosition = {
          x: x + dx,
          y: y + dy,
        };
        if (isWall(nextPosition)) return;
        get().setPlayer(nextPosition);
      },
      setPlayer(position) {
        return set(() => {
          return { player: position };
        });
      },
      movePlayerToLeft() {
        get()._move(-1, 0);
      },
      movePlayerToRight() {
        get()._move(1, 0);
      },
      movePlayerToUp() {
        get()._move(0, -1);
      },
      movePlayerToDown() {
        get()._move(0, 1);
      },
    };
  }),
);

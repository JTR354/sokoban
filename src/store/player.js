import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const usePlayerStore = create(
  immer((set) => {
    return {
      player: {
        x: 1,
        y: 1,
      },
      movePlayerToLeft() {
        return set((state) => {
          state.player.x -= 1;
        });
      },
    };
  }),
);

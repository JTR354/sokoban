import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { useMapStore } from "./map";

export const usePlayerStore = create(
  immer((set) => {
    return {
      player: {
        x: 1,
        y: 1,
      },
      setPlayer(player = { x: 1, y: 1 }) {
        return set((state) => {
          state.player = player;
        });
      },
      movePlayerToLeft() {
        return set((state) => {
          const { isWall } = useMapStore.getState();
          const nextPosition = {
            x: state.player.x - 1,
            y: state.player.y,
          };
          if (isWall(nextPosition)) return;
          state.player.x -= 1;
        });
      },
      movePlayerToRight() {
        return set((state) => {
          const { isWall } = useMapStore.getState();
          const nextPosition = {
            x: state.player.x + 1,
            y: state.player.y,
          };
          if (isWall(nextPosition)) return;
          state.player.x += 1;
        });
      },
      movePlayerToUp() {
        return set((state) => {
          const { isWall } = useMapStore.getState();
          const nextPosition = {
            x: state.player.x,
            y: state.player.y - 1,
          };
          if (isWall(nextPosition)) return;
          state.player.y -= 1;
        });
      },
      movePlayerToDown() {
        return set((state) => {
          const { isWall } = useMapStore.getState();
          const nextPosition = {
            x: state.player.x,
            y: state.player.y + 1,
          };
          if (isWall(nextPosition)) return;
          state.player.y += 1;
        });
      },
    };
  }),
);

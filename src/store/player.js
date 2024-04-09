import { create } from "zustand";

export const usePlayerStore = create(() => {
  return {
    player: {
      x: 1,
      y: 1,
    },
  };
});

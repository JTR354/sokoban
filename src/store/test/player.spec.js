import { usePlayerStore } from "../player";

describe("player", () => {
  it("should move to left", () => {
    const { player } = usePlayerStore();
    movePlayerToLeft();
    expect(player.x).toBe(0);
  });
});

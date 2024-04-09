import { useEffect } from "react";
import PlayerImg from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";
const Player = () => {
  const { player, movePlayerToLeft } = usePlayerStore();
  const STEP = 32;
  const position = {
    left: `${player.x * STEP}px`,
    top: `${player.y * STEP}px`,
  };
  useEffect(() => {
    const keyup = "keyup";
    const handlerKeyUp = (e) => {
      switch (e.code) {
        case "ArrowLeft":
          console.log(e.code);
          movePlayerToLeft();

          break;
      }
    };

    window.addEventListener(keyup, handlerKeyUp);
    return () => {
      window.removeEventListener(keyup, handlerKeyUp);
    };
  }, []);
  return (
    <div className="absolute" style={{ ...position }}>
      <img src={PlayerImg} alt="" />
    </div>
  );
};
export default Player;

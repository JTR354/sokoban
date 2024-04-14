import { useEffect } from "react";
import PlayerImg from "../../assets/keeper.png";
import { usePlayerStore } from "../../store/player";

const useMove = () => {
  const {
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToUp,
    movePlayerToDown,
  } = usePlayerStore();
  useEffect(() => {
    const keyup = "keyup";
    const handlerKeyUp = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          movePlayerToLeft();
          break;
        case "ArrowRight":
          movePlayerToRight();
          break;
        case "ArrowUp":
          movePlayerToUp();
          break;
        case "ArrowDown":
          movePlayerToDown();
          break;
      }
    };
    window.addEventListener(keyup, handlerKeyUp);
    return () => {
      window.removeEventListener(keyup, handlerKeyUp);
    };
  }, []);
};

const usePosition = () => {
  const { player } = usePlayerStore();
  const STEP = 32;
  const position = {
    left: `${player.x * STEP}px`,
    top: `${player.y * STEP}px`,
  };
  return position;
};

const Player = () => {
  useMove();
  return (
    <div className="absolute" style={{ ...usePosition() }}>
      <img src={PlayerImg} alt="" />
    </div>
  );
};
export default Player;

import WallImg from "../../assets/wall.png";
import FloorImg from "../../assets/floor.png";
import { useMapStore, MapTile } from "../../store/map";

const Map = () => {
  const { map } = useMapStore();
  return (
    <>
      {map.map((row, i) => {
        return (
          <div key={i} className="flex">
            {row.map((col, j) => {
              return (
                <div key={j}>
                  {col === MapTile.WALL ? <img src={WallImg} /> : null}
                  {col === MapTile.FLOOR ? <img src={FloorImg} /> : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Map;

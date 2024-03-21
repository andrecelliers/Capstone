import {
  Stage,
  Container,
  Sprite,
  Text,
  Graphics,
  withFilters,
  useTick,
} from "@pixi/react";
import { useState, useCallback, useRef, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import * as PIXI from "pixi.js";
import Player from "../components/ChallengePage/BridgeSwimmer/Player.jsx";

const ChallengePage = () => {
  const [playerPosition, setplayerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "w":
          setplayerPosition((pos) => ({ ...pos, y: pos.y - 5 }));
          break;
        case "s":
          setplayerPosition((pos) => ({ ...pos, y: pos.y + 5 }));
          break;
        case "a":
          setplayerPosition((pos) => ({ ...pos, x: pos.x - 5 }));
          break;
        case "d":
          setplayerPosition((pos) => ({ ...pos, x: pos.x + 5 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ReactBootStrap.Container fluid className="d-flex justify-content-center">
      <Stage
        width={350}
        height={750}
        options={{
          backgroundColor: 0x012b30,
          antialias: true,
        }}
      >
        <Player x={playerPosition.x} y={playerPosition.y} />
      </Stage>
    </ReactBootStrap.Container>
  );
};
export default ChallengePage;

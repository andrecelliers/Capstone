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
  const [view, setView] = useState({ width: 350, height: 700 });

  const [playerPosition, setplayerPosition] = useState({
    x: view.width / 2,
    y: view.height * 0.8,
  });

  useEffect(() => {
    // TODO: I want to move the player when the button is held then stop with it is released
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          setplayerPosition((pos) => ({ ...pos, x: pos.x - 5 }));
          break;
        case "ArrowRight":
          setplayerPosition((pos) => ({ ...pos, x: pos.x + 5 }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case "ArrowLeft":
          // setplayerPosition((pos) => ({ ...pos, x: pos.x - 5 }));
          break;
        case "ArrowRight":
          // setplayerPosition((pos) => ({ ...pos, x: pos.x + 5 }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <ReactBootStrap.Container fluid className="d-flex justify-content-center">
      <Stage
        width={view.width}
        height={view.height}
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

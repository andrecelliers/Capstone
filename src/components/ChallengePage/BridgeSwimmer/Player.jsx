import React, { useState, useEffect } from "react";
import { Sprite, useTick } from "@pixi/react";
import Background from "./Background";

const player =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";

const Player = (props) => {
  const [playerPosition, setplayerPosition] = useState({
    x: props.x,
    y: props.y,
  });
  const [keys, setKeys] = useState({
    ArrowLeft: false,
    ArrowRight: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((keys) => ({ ...keys, [e.key]: true }));
    };

    const handleKeyUp = (e) => {
      setKeys((keys) => ({ ...keys, [e.key]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useTick((delta) => {
    setplayerPosition((pos) => ({
      x: pos.x + (keys.ArrowRight - keys.ArrowLeft) * 5 * delta,
      y: pos.y + (props.backgroundPos >= 0) * -2 * delta,
    }));

    // Prevent player from going out of bounds
    if (playerPosition.x < 0) {
      setplayerPosition((pos) => ({ ...pos, x: 0 }));
    } else if (playerPosition.x > 350) {
      setplayerPosition((pos) => ({ ...pos, x: 350 }));
    }
  });

  return (
    <Sprite
      image={player}
      x={playerPosition.x}
      y={playerPosition.y}
      anchor={0.5}
    />
  );
};

export default Player;

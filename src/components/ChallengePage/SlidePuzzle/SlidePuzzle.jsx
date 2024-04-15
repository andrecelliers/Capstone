import React, { useEffect, useState } from "react";
import { Stage, Sprite } from "@pixi/react";
import * as PIXI from "pixi.js";
import { loadBaseImageAsset } from "./slidePuzzleUtil";

const SlidePuzzle = () => {
  const [view, setView] = useState({
    width: 348,
    height: 348,
  });
  const [pSettings, setpSettings] = useState({
    image: "/test.png",
    size: 4,
    blockSize: view.width / 4,
  });
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    loadBaseImageAsset(pSettings.image).then((baseBlockTexture) => {
      const newBlocks = [];
      for (let i = 0; i < Math.pow(pSettings.size, 2); i++) {
        const newBlock = (
          <Sprite
            key={`block-${i}`}
            image={"/test.png"}
            x={(i % pSettings.size) * pSettings.blockSize}
            y={Math.floor(i / pSettings.size) * pSettings.blockSize}
          />
        );
        newBlocks.push(newBlock);
      }
      setBlocks(newBlocks);
    });
  }, []);

  return (
    <Stage
      width={view.width}
      height={view.height}
      options={{
        backgroundColor: 0x012b30,
        antialias: true,
      }}
    >
      {blocks}
    </Stage>
  );
};

export default SlidePuzzle;

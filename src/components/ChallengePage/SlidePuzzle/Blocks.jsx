import React, { useState, useEffect } from "react";
import { useApp, Sprite } from "@pixi/react";
import * as PIXI from "pixi.js";
import * as PIXICORE from "@pixi/core";
import { loadSpriteSheet } from "../../../utils/slidePuzzleUtil";
import imageSrc from "/test.png";

const Blocks = () => {
  const app = useApp();
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState([]);
  const [puzzleSize, setPuzzleSize] = useState(4);
  const [blockSize, setBlockSize] = useState(app.view.width / puzzleSize);

  useEffect(() => {
    if (blocks.length === 0) {
      loadSpriteSheet(imageSrc, blockSize, puzzleSize).then((textures) => {
        setBlocks(textures);
      });
    } else {
      setLoading(false);
    }
  }, [blocks]);

  if (loading) return;

  return (
    <React.Fragment>
      {blocks.map((block, i) => {
        console.log(block);
        console.log(block instanceof PIXI.Texture);
        console.log(block instanceof PIXICORE.Texture);
        return <Sprite key={i} texture={block} x={0} y={0} />;
      })}
    </React.Fragment>
  );
};

export default Blocks;

import React, { useState, useEffect } from "react";
import { useApp, Sprite } from "@pixi/react";
import * as PIXI from "pixi.js";
import imageSrc from "/test.png";

const Blocks = () => {
  const app = useApp();
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState([]);
  const [puzzleSize, setPuzzleSize] = useState(4);
  const [blockSize, setBlockSize] = useState(app.view.width / puzzleSize);

  useEffect(() => {
    const loadPuzzle = async () => {
      await PIXI.Assets.load(imageSrc).then((res) => {
        let tempBlocks = [];
        for (let i = 0; i < puzzleSize; i++) {
          for (let j = 0; j < puzzleSize; j++) {
            const tempBlock = new PIXI.Texture(res);
            tempBlock.trim = new PIXI.Rectangle(
              (app.view.width / puzzleSize) * j,
              (app.view.height / puzzleSize) * i,
              app.view.width / puzzleSize,
              app.view.height / puzzleSize
            );
            tempBlock.updateUvs();
            tempBlocks.push(tempBlock);
          }
        }

        setBlocks(tempBlocks);
        setLoading(false);
      });
    };

    if (blocks.length === 0) loadPuzzle();
  }, [blocks]);

  if (loading) return;

  return (
    <React.Fragment>
      {/* {blocks.map((block, i) => {
        console.log(block);
        <Sprite key={i} texture={block} x={0} y={0} />;
      })} */}
      <Sprite texture={blocks[0]} x={0} y={0} />
    </React.Fragment>
  );
};

export default Blocks;

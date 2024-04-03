import * as PIXI from "pixi.js";

const createSpriteSheetData = (imageUrl, frameSize, numFrames) => {

  const pixiSpriteSheet = {
    frames: [],
    meta: {
      image: imageUrl,
      format: "RGBA8888",
      size: { w: frameSize * numFrames, h: frameSize * numFrames },
      scale: 1,
    },
  };

  for (let i = 0; i < Math.pow(numFrames, 2); i++) {
    pixiSpriteSheet.frames[i] =  {
      frame: {
        x: frameSize * (i % numFrames),
        y: frameSize * Math.floor(i / numFrames),
        w: frameSize,
        h: frameSize,
      },
      rotated: false,
      trimmed: true,
      spriteSourceSize: {
        x: 0,
        y: 0,
        w: frameSize,
        h: frameSize,
      },
      sourceSize: {
        w: frameSize,
        h: frameSize,
      },
    };
  }

  return pixiSpriteSheet;
}

const loadSpriteSheet = async (spriteSheet) => {

  return await spriteSheet.parse();
};
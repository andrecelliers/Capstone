import * as PIXI from "pixi.js";

const createSpriteSheetData = (imageSrc, frameSize, numFrames) => {

  const pixiSpriteSheet = {
    frames: [],
    meta: {
      image: imageSrc,
      format: "RGBA8888",
      size: { w: frameSize * numFrames, h: frameSize * numFrames },
      scale: 1,
    },
  };

  for (let i = 0; i < Math.pow(numFrames, 2); i++) {
    const x = (i % numFrames) * frameSize;
    const y = Math.floor(i / numFrames) * frameSize;
  
    pixiSpriteSheet.frames[i] = {
      frame: { x, y, w: frameSize, h: frameSize },
      sourceSize: { w: frameSize, h: frameSize },
      spriteSourceSize: { x: 0, y: 0, w: frameSize, h: frameSize },
      trimmed: false,
      rotated: false,
    };
  }

  return pixiSpriteSheet;
}

export const loadSpriteSheet = async (imageSrc, frameSize, numFrames) => {
  // Generate the sprite sheet data
  const spriteSheetData = createSpriteSheetData(imageSrc, frameSize, numFrames);

  // Add the image to the asset loader then load it
  PIXI.Assets.add({alias: 'blockBaseImage', src: imageSrc});
  const baseTexture = await PIXI.Assets.load('blockBaseImage');

  // Create the sprite sheet, parse it, and return the textures as an array
  const spriteSheet = new PIXI.Spritesheet(baseTexture, spriteSheetData, "blockSpriteSheet");
  return spriteSheet.parse().then(() => {
    return Object.values(spriteSheet.textures);
  });
};


export const loadBaseImageAsset = async (imageSrc) => {
  // Add the image to the asset loader then load it
  PIXI.Assets.add({alias: 'blockBaseImage', src: imageSrc});
  return PIXI.Assets.load('blockBaseImage');
};
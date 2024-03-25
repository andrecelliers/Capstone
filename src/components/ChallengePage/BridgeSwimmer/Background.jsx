import React from "react";
import { Sprite, useTick } from "@pixi/react";

const Background = (props) => {
  useTick((delta) => {
    // Move the background up
    props.setBackgroundY((prevY) => (prevY < 0 ? prevY + delta : 0));
  });

  return <Sprite image={props.image} x={0} y={props.backgroundY} anchor={0} />;
};

export default Background;

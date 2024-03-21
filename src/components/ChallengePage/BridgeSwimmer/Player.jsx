import React, { useState } from "react";
import { Sprite, useTick } from "@pixi/react";

const player =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";

const Player = (props) => {
  return <Sprite image={player} x={props.x} y={props.y} anchor={0.5} />;
};

export default Player;

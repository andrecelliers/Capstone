import React, { useState } from "react";
import { Sprite, useTick } from "@pixi/react";

const player =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";

let i = 0;

const Player = (props) => {
  return <Sprite image={player} x={props.x} y={props.y} />;
};

export default Player;

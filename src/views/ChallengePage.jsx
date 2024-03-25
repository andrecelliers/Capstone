import { Stage } from "@pixi/react";
import { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import * as PIXI from "pixi.js";
import backGroundImage from "../assets/BridgeRunner/Map.png";
import Player from "../components/ChallengePage/BridgeSwimmer/Player.jsx";
import Background from "../components/ChallengePage/BridgeSwimmer/Background.jsx";

const ChallengePage = () => {
  const [view, setView] = useState({ width: 350, height: 700 });
  const [backgroundY, setBackgroundY] = useState(-1400 + view.height);

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
        <Background
          image={backGroundImage}
          backgroundY={backgroundY}
          setBackgroundY={setBackgroundY}
        />
        <Player
          x={view.width / 2}
          y={view.height * 0.8}
          backgroundPos={backgroundY}
        />
      </Stage>
    </ReactBootStrap.Container>
  );
};
export default ChallengePage;

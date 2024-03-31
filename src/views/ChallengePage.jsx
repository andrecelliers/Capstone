import { Stage, useApp, AppProvider } from "@pixi/react";
import { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import * as PIXI from "pixi.js";
import Blocks from "../components/ChallengePage/SlidePuzzle/Blocks";

const ChallengePage = () => {
  const [view, setView] = useState({ width: 3072, height: 3072 });
  const app = new PIXI.Application();

  return (
    <ReactBootStrap.Container fluid className="d-flex justify-content-center">
      <AppProvider value={app}>
        <Stage
          width={view.width}
          height={view.height}
          options={{
            backgroundColor: 0x012b30,
            antialias: true,
          }}
        >
          <Blocks />
        </Stage>
      </AppProvider>
    </ReactBootStrap.Container>
  );
};
export default ChallengePage;

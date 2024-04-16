import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const KeyContainer = (props) => {
  const [colorState, setcolorState] = useState(0);

  return (
    <Button
      variant="light"
      onClick={() =>
        props.handleActiveWordChange(props.letter, props.activeIndex)
      }
      className="keyboardKey d-flex flex-column justify-content-center text-center border border-dark bg-light rounded p-1"
    >
      {props.letter}
    </Button>
  );
};

export default KeyContainer;

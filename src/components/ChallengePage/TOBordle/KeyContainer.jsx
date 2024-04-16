import React, { useState } from "react";
import { Button } from "react-bootstrap";

const KeyContainer = (props) => {
  const [colorState, setcolorState] = useState(0);

  const handleLetterClick = (letter) => {
    console.log("Letter clicked: ", letter);
  };

  return (
    <Button
      variant="light"
      onClick={() => handleLetterClick(props.letter)}
      className="keyboardKey d-flex flex-column justify-content-center text-center border border-dark bg-light rounded p-1"
    >
      {props.letter}
    </Button>
  );
};

export default KeyContainer;

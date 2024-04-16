import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from "react-dom/test-utils";

const KeyContainer = (props) => {
  const [colorState, setcolorState] = useState(0);
  const { activeWord, setActiveWord } = props;

  const handleLetterClick = (letter) => {
    if (activeWord.length <= 5) {
      setActiveWord(activeWord + letter);
    }
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

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const KeyContainer = (props) => {
  const [bgColor, setbgColor] = useState("light");
  const [fontColor, setFontColor] = useState("");

  useEffect(() => {
    switch (props.colorState) {
      case 0:
        setbgColor("light");
        break;
      case 1:
        setbgColor("dark");
        setFontColor("text-white");
        break;
      case 2:
        setbgColor("warning");
        break;
      case 3:
        setbgColor("success");
        setFontColor("text-white");
        break;
      default:
        setbgColor("light");
        break;
    }
  }, [props.colorState]);

  return (
    <Button
      variant={bgColor}
      onClick={() =>
        props.handleActiveWordChange(props.letter, props.activeIndex)
      }
      className={`keyboardKey d-flex flex-column justify-content-center text-center border border-dark rounded p-1 ${fontColor}`}
    >
      {props.letter}
    </Button>
  );
};

export default KeyContainer;

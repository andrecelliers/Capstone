import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const LetterContainer = ({ letterKey, letter, colorState }) => {
  const [bgColor, setbgColor] = useState("bg-light");
  const [fontColor, setFontColor] = useState("");

  useEffect(() => {
    switch (colorState) {
      case 0:
        setbgColor("bg-light");
        break;
      case 1:
        setbgColor("bg-dark");
        setFontColor("text-white");
        break;
      case 2:
        setbgColor("bg-success");
        setFontColor("text-white");
        break;
      case 3:
        setbgColor("bg-warning");
        break;
      default:
        setbgColor("bg-light");
        break;
    }
  }, [colorState]);

  return (
    <Col
      key={`${letterKey}-letter`}
      className={`d-flex flex-column justify-content-center letter text-center border border-dark ${bgColor} ${fontColor}`}
      children={letter}
    />
  );
};

export default LetterContainer;

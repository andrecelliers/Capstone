import React, { useState } from "react";
import { Col } from "react-bootstrap";

const LetterContainer = (props) => {
  const [colorState, setColorState] = useState(0);
  const [letterState, setLetterState] = useState("E");

  return (
    <Col
      key={`${props.letterKey}-${props.wordKey}-letter`}
      className="d-flex flex-column justify-content-center letter text-center border border-dark bg-light"
      children={letterState}
    />
  );
};

export default LetterContainer;

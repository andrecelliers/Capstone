import React, { useState } from "react";
import { Col } from "react-bootstrap";

const LetterContainer = ({ letterKey, letter }) => {
  const [colorState, setColorState] = useState(0);

  return (
    <Col
      key={`${letterKey}-letter`}
      className="d-flex flex-column justify-content-center letter text-center border border-dark bg-light"
      children={letter}
    />
  );
};

export default LetterContainer;

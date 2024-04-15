import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Guesses from "./Guesses";
import KeyboardCustom from "./KeyboardCustom";
import "./css.css";

const TOBordle = () => {
  const [view, setView] = useState({
    width: 350,
    height: 700,
  });

  return (
    <Container fluid className="p-0">
      <Row className="d-flex justify-content-center">
        <Guesses />
      </Row>
      <Row className="bufferRow" />
      <KeyboardCustom />
    </Container>
  );
};

export default TOBordle;

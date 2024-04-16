import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GuessContainer from "./GuessContainer";
import KeyboardContainer from "./KeyboardContainer";
import "./css.css";

const TOBordle = () => {
  const [word, setWord] = useState("WATER");
  const [words, setWords] = useState(["START", "WORDY"]);
  const [activeWord, setActiveWord] = useState("");

  return (
    <Row>
      <Col sm={0} md={3} />
      <Col>
        <GuessContainer word={word} words={words} activeWord={activeWord} />
        <Row className="bufferRow" />
        <KeyboardContainer
          word={word}
          words={words}
          setWords={setWords}
          activeWord={activeWord}
          setActiveWord={setActiveWord}
        />
      </Col>
      <Col sm={0} md={3} />
    </Row>
  );
};

export default TOBordle;

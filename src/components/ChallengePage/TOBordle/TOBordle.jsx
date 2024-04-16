import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GuessContainer from "./GuessContainer";
import KeyboardContainer from "./KeyboardContainer";
import "./css.css";

const TOBordle = () => {
  const [correctWord, setCorrectWord] = useState("WATER");
  const [words, setWords] = useState(["", "", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveWordChange = (letter) => {
    setWords((prev) => {
      const newWords = [...prev];
      if (newWords[activeIndex].length < 5) {
        newWords[activeIndex] += letter;
      }
      return newWords;
    });
  };

  // useEffect(() => {
  //   console.log(words[activeIndex]);
  // }, [words, activeIndex]);

  return (
    <Row>
      <Col sm={0} md={3} />
      <Col>
        <GuessContainer
          correctWord={correctWord}
          words={words}
          activeIndex={activeIndex}
        />
        <Row className="bufferRow" />
        <KeyboardContainer handleActiveWordChange={handleActiveWordChange} />
      </Col>
      <Col sm={0} md={3} />
    </Row>
  );
};

export default TOBordle;

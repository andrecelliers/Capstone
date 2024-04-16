import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GuessContainer from "./GuessContainer";
import KeyboardContainer from "./KeyboardContainer";
import "./css.css";

const TOBordle = () => {
  const [correctWord, setCorrectWord] = useState("WATER");
  const [words, setWords] = useState(["", "", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveWordChange = (letter, index) => {
    setWords((prev) => {
      const newWords = [...prev];
      if (letter === "<") {
        newWords[index] = newWords[index].slice(0, -1);
      } else if (letter === "#") {
        if (newWords[index].length === 5) {
          setActiveIndex((prev) => prev + 1);
        }
      } else if (newWords[index].length < 5) {
        newWords[index] += letter;
      }
      return newWords;
    });
  };

  // useEffect(() => {
  //   console.log(`I: ${activeIndex} : ${words[activeIndex]}`);
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
        <KeyboardContainer
          handleActiveWordChange={handleActiveWordChange}
          correctWord={correctWord}
          words={words}
          activeIndex={activeIndex}
        />
      </Col>
      <Col sm={0} md={3} />
    </Row>
  );
};

export default TOBordle;

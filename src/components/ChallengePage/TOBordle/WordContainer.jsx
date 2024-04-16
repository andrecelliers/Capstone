import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import LetterContainer from "./LetterContainer";

const WordContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    if (isLoading) {
      for (let i = 0; i < 5; i++) {
        setLetters((prev) => [
          ...prev,
          <LetterContainer key={`${i}-letter`} />,
        ]);
      }

      setIsLoading(false);
    }
  }, []);

  if (isLoading) return;
  return (
    <Row key={`${props.wordKey}-word`}>{letters.map((letter) => letter)}</Row>
  );
};

export default WordContainer;

import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import LetterContainer from "./LetterContainer";

const WordContainer = ({ word, wordKey }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    if (isLoading) {
      for (let i = 0; i < 5; i++) {
        setLetters((prev) => [
          ...prev,
          <LetterContainer
            key={`${i}-letter`}
            letterKey={i}
            letter={word[i]}
          />,
        ]);
      }

      setIsLoading(false);
    } else {
      console.log(word);
      const newLetters = [];
      setLetters((prev) => {
        const newLetters = [...prev];
        newLetters[word.length - 1] = (
          <LetterContainer
            key={`${word.length - 1}-letter`}
            letterKey={word.length - 1}
            letter={word[word.length - 1]}
          />
        );
        return newLetters;
      });
    }
  }, [word]);

  if (isLoading) return;
  return <Row key={`${wordKey}-word`}>{letters.map((letter) => letter)}</Row>;
};

export default WordContainer;

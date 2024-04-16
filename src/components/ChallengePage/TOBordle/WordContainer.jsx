import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import LetterContainer from "./LetterContainer";

const WordContainer = ({ word, wordKey }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [letters, setLetters] = useState([]);
  const [wordLength, setWordLength] = useState(0);

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
      const newLetters = [];
      setLetters((prev) => {
        const newLetters = [...prev];
        if (wordLength == word.length - 1) {
          newLetters[word.length - 1] = (
            <LetterContainer
              key={`${word.length - 1}-letter`}
              letterKey={word.length - 1}
              letter={word[word.length - 1]}
            />
          );
        } else {
          newLetters[word.length] = (
            <LetterContainer
              key={`${word.length}-letter`}
              letterKey={word.length}
              letter={""}
            />
          );
        }
        setWordLength(word.length);
        return newLetters;
      });
    }
  }, [word]);

  if (isLoading) return;
  return <Row key={`${wordKey}-word`}>{letters.map((letter) => letter)}</Row>;
};

export default WordContainer;

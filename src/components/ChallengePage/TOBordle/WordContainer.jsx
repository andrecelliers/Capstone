import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import LetterContainer from "./LetterContainer";

const WordContainer = ({ word, correctWord, wordKey, isEntered }) => {
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
              colorState={0}
            />
          );
        }
        setWordLength(word.length);
        return newLetters;
      });
    }
  }, [word]);

  useEffect(() => {
    if (isEntered) {
      setLetters((prev) => {
        const newLetters = [...prev];
        for (let i = 0; i < word.length; i++) {
          let colorState = 1;
          if (word[i] === correctWord[i]) {
            colorState = 2;
          } else if (correctWord.includes(word[i])) {
            colorState = 3;
          }

          newLetters[i] = (
            <LetterContainer
              key={`${i}-letter`}
              letterKey={i}
              letter={word[i]}
              colorState={colorState}
            />
          );
        }
        return newLetters;
      });
    }
  }, [isEntered]);

  if (isLoading) return;
  return <Row key={`${wordKey}-word`}>{letters.map((letter) => letter)}</Row>;
};

export default WordContainer;

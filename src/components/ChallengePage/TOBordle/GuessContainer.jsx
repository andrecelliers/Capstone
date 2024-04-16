import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WordContainer from "./WordContainer";

const GuessContainer = ({ correctWord, words, activeIndex }) => {
  const [isloading, setIsloading] = useState(true);
  const [wordRow, setWordRows] = useState([]);

  useEffect(() => {
    if (isloading) {
      for (let i = 0; i < 6; i++) {
        setWordRows((prev) => [
          ...prev,
          <WordContainer
            key={`${i}`}
            correctWord={correctWord}
            word={words[i]}
          />,
        ]);
      }
      setIsloading(false);
    }
  }, []);

  useEffect(() => {
    const newWordRows = [];
    setWordRows((prev) => {
      const newWords = [...prev];
      newWords[activeIndex] = (
        <WordContainer
          key={`${activeIndex}`}
          correctWord={correctWord}
          word={words[activeIndex]}
        />
      );
      return newWords;
    });
  }, [activeIndex, words]);

  if (isloading) return null;
  return (
    <Row className="d-flex justify-content-center">
      {wordRow.map((WordContainer) => WordContainer)}
    </Row>
  );
};

export default GuessContainer;

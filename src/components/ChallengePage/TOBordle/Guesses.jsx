import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Letter {
  constructor(letter, wordKey, letterKey) {
    this.letter = letter;
    this.isNot = false;
    this.isWrong = false;
    this.isCorrect = false;
    this.container = (
      <Col
        key={`${wordKey}-${letterKey}-letter`}
        className="d-flex flex-column justify-content-center letter text-center border border-dark bg-light"
      >
        {letter}
      </Col>
    );
  }
}

class Word {
  constructor(word, wordKey) {
    this.word = word;
    this.letters = [];
    for (let i = 0; i < word.length; i++) {
      this.letters.push(new Letter(word[i], wordKey, i));
    }
    this.container = (
      <Row key={`${wordKey}-word`}>
        {this.letters.map((letter) => letter.container)}
      </Row>
    );
  }
}

const Guesses = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (words.length) return;
    for (let i = 0; i < 6; i++) {
      setWords((prev) => [...prev, new Word("WORD" + i, i)]);
    }
  }, []);

  return words.map((word) => {
    return word.container;
  });
};

export default Guesses;

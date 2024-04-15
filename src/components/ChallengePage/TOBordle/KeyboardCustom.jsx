import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Letter {
  constructor(letter) {
    this.letter = letter;
    this.isNot = false;
    this.isWrong = false;
    this.isCorrect = false;
    this.container = (
      <Col
        key={`${letter}-keyboard`}
        className="keyboardKey d-flex flex-column justify-content-center text-center border border-dark bg-light rounded p-1"
      >
        {letter}
      </Col>
    );
  }
}

class Keyboard {
  constructor(keyboardLetters) {
    this.letters = [[], [], []];

    for (let i = 0; i < keyboardLetters.length; i++) {
      for (let j = 0; j < keyboardLetters[i].length; j++) {
        this.letters[i].push(new Letter(keyboardLetters[i][j]));
      }
    }
    this.container = (
      <Row className="d-flex justify-content-center">
        <Row className="d-flex justify-content-evenly my-1">
          {this.letters[0].map((letter) => letter.container)}
        </Row>
        <Row className="d-flex justify-content-evenly my-1">
          {this.letters[1].map((letter) => letter.container)}
        </Row>
        <Row className="d-flex justify-content-evenly my-1">
          {this.letters[2].map((letter) => letter.container)}
        </Row>
      </Row>
    );
  }
}

const KeyboardCustom = () => {
  const [keyboardLetters, setKeyboardLetters] = useState([
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M", "<"],
  ]);
  const [keyboard, setKeyboard] = useState();

  useEffect(() => {
    if (keyboard) return;
    setKeyboard(new Keyboard(keyboardLetters));
  }, []);

  return keyboard && keyboard.container;
};

export default KeyboardCustom;

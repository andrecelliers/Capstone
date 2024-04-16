import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import KeyContainer from "./KeyContainer";

class Keyboard {
  constructor(keyboardLetters, setActiveWord) {
    this.letters = [[], [], []];

    for (let i = 0; i < keyboardLetters.length; i++) {
      for (let j = 0; j < keyboardLetters[i].length; j++) {
        this.letters[i].push(new Letter(keyboardLetters[i][j], setActiveWord));
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

const KeyboardContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [keyboardLetters, setKeyboardLetters] = useState([
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["#", "Z", "X", "C", "V", "B", "N", "M", "<"],
  ]);
  const [keyboard, setKeyboard] = useState([[], [], []]);

  useEffect(() => {
    if (isLoading) {
      const newKeyboard = keyboardLetters.map((row, i) => {
        return row.map((letter, j) => {
          return <KeyContainer key={`${i}-${j}-key`} letter={letter} />;
        });
      });

      setKeyboard(newKeyboard);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return;
  return (
    <Row className="d-flex justify-content-center">
      {keyboard.map((keyRow, i) => (
        <Row key={`${i}-keyRow`} className="d-flex justify-content-evenly my-1">
          {keyRow.map((key) => key)}
        </Row>
      ))}
    </Row>
  );
};

export default KeyboardContainer;

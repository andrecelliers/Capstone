import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import KeyContainer from "./KeyContainer";

const KeyboardContainer = (props) => {
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
          return (
            <KeyContainer
              key={`${i}-${j}-key`}
              letter={letter}
              handleActiveWordChange={props.handleActiveWordChange}
              activeIndex={props.activeIndex}
            />
          );
        });
      });

      setKeyboard(newKeyboard);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const newKeyboard = keyboardLetters.map((row, i) => {
      return row.map((letter, j) => {
        return (
          <KeyContainer
            key={`${i}-${j}-key`}
            letter={letter}
            handleActiveWordChange={props.handleActiveWordChange}
            activeIndex={props.activeIndex}
          />
        );
      });
    });

    setKeyboard(newKeyboard);
  }, [props.activeIndex]);

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

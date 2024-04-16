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
              colorState={0}
            />
          );
        });
      });

      setKeyboard(newKeyboard);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (props.activeIndex === 0) return;
    console.log(props.activeIndex);
    const newKeyboard = keyboardLetters.map((row, i) => {
      return row.map((letter, j) => {
        let colorState = 0;
        for (let k = 0; k < props.activeIndex; k++) {
          const word = props.words[k];
          if (word.includes(letter)) {
            if (word.indexOf(letter) === props.correctWord.indexOf(letter)) {
              colorState = colorState < 3 ? 3 : colorState;
            }
            if (props.correctWord.includes(letter)) {
              colorState = colorState < 2 ? 2 : colorState;
            }
            colorState = colorState < 1 ? 1 : colorState;
          }
        }

        return (
          <KeyContainer
            key={`${i}-${j}-key`}
            letter={letter}
            handleActiveWordChange={props.handleActiveWordChange}
            activeIndex={props.activeIndex}
            colorState={colorState}
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

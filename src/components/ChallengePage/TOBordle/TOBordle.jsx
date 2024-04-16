import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Modal } from "react-bootstrap";
import GuessContainer from "./GuessContainer";
import KeyboardContainer from "./KeyboardContainer";
import CustomButton from "../../Common/CustomButton";
import "./css.css";

const TOBordle = () => {
  const { key } = useParams();
  const [correctWord, setCorrectWord] = useState("WATER");
  const [words, setWords] = useState(["", "", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [show, setShow] = useState(false);
  const handleShowReward = () => setShowReward(true);
  const handleShow = () => setShow(true);
  const handleRewardClose = () => setShowReward(false);
  const handleClose = () => setShow(false);

  const handleActiveWordChange = (letter, index) => {
    setWords((prev) => {
      const newWords = [...prev];
      if (letter === "<") {
        newWords[index] = newWords[index].slice(0, -1);
      } else if (letter === "#") {
        if (newWords[index].length === 5 && activeIndex < 6) {
          setActiveIndex((prev) => prev + 1);
        }
        if (newWords[index] === correctWord) {
          handleShowReward();
        }
        if (activeIndex === 6) {
          handleShow(0);
        }
      } else if (newWords[index].length < 5) {
        newWords[index] += letter;
      }
      return newWords;
    });
  };

  return (
    <Row>
      <Modal show={showReward} onHide={handleRewardClose}>
        <Modal.Header>
          <Modal.Title>Congrats!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You got the word!</Modal.Body>
        <Modal.Footer>
          <CustomButton text="Rewards" link={`/reward/${key}`} />
        </Modal.Footer>
      </Modal>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Better Luck next time!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Try again</Modal.Body>
        <Modal.Footer>
          <CustomButton text="Rewards" link={`/challenge/${key}`} />
        </Modal.Footer>
      </Modal>
      <Col sm={0} md={2} />
      <Col className="mt-3">
        <GuessContainer
          correctWord={correctWord}
          words={words}
          activeIndex={activeIndex}
        />
        <Row className="bufferRow" />
        <KeyboardContainer
          handleActiveWordChange={handleActiveWordChange}
          correctWord={correctWord}
          words={words}
          activeIndex={activeIndex}
        />
      </Col>
      <Col sm={0} md={2} />
    </Row>
  );
};

export default TOBordle;

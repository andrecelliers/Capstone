import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WordContainer from "./WordContainer";

const GuessContainer = (props) => {
  const [isloading, setIsloading] = useState(true);
  const [wordRow, setWordRows] = useState([]);

  useEffect(() => {
    if (isloading) {
      for (let i = 0; i < 6; i++) {
        setWordRows((prev) => [...prev, <WordContainer key={`${i}-word`} />]);
      }
      setIsloading(false);
    }
  }, []);

  if (isloading) return null;
  return (
    <Row className="d-flex justify-content-center">
      {wordRow.map((word) => word)}
    </Row>
  );
};

export default GuessContainer;

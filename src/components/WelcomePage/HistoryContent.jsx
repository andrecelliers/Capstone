import React from "react";
import { Container, Image } from "react-bootstrap";

const HistoryContent = (props) => {
  return (
    <Container fluid className="bg-body-secondary p-4">
      <Image src={props.historyImage} className="float-end m-2" />
      <p>{props.historyContent}</p>
    </Container>
  );
};

export default HistoryContent;

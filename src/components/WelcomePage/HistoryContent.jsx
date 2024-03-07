import React from "react";
import { Container, Image } from "react-bootstrap";

const HistoryContent = (props) => {
  return (
    <Container
      fluid
      className="bg-body-secondary border border-dark-subtle rounded-2 shadow px-3 pt-3 pb-2"
    >
      <Image
        src={props.historyImage}
        className="border border-dark-subtle rounded-2 float-end m-2"
      />
      <h5>{props.historyHeader}</h5>
      <hr />
      <p>{props.historyContent}</p>
    </Container>
  );
};

export default HistoryContent;

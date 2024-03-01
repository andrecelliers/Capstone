import React from "react";
import Container from "react-bootstrap/Container";

const Banner = (props) => {
  return (
    <Container fluid className="bg-body-primary">
      <h1>{props.bannerHeader}</h1>
      <p>{props.bannerSubtitle}</p>
    </Container>
  );
};

export default Banner;

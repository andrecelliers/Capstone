import React from "react";
import Container from "react-bootstrap/Container";

const Banner = (props) => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center bg-body-primary m-2"
    >
      <h1>{props.bannerHeader}</h1>
      {props.bannerSubtitle ? <p>{props.bannerSubtitle}</p> : null}
    </Container>
  );
};

export default Banner;

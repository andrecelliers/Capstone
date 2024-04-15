import React from "react";
import { Container, Image } from "react-bootstrap";
import "../../assets/css/ContentContainer.css";

const ContentConatiner = (props) => {
  console.log(props.Image);
  return (
    <Container
      fluid
      className="content-container bg-body-secondary border border-dark-subtle rounded-2 shadow px-3 pt-3 pb-2"
    >
      {props.Image && (
        <Container className="disable-float">
          <Image
            src={props.Image}
            className={`border border-dark-subtle rounded-2 float-end m-2 ${window.innerWidth <= 768 ? "disable-float" : "float-end"}`}
            height={250}
            width={250}
            alt={`${props.Header} Image`}
          />
        </Container>
      )}
      {props.Header && (
        <>
          <h5>{props.Header}</h5>
          <hr className="px-1" />
        </>
      )}

      <p>{props.Content}</p>
    </Container>
  );
};

export default ContentConatiner;

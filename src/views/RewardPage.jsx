import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Bannner from "../components/Common/Banner";
import CustomButton from "../components/Common/CustomButton";
import ContentConatiner from "../components/Common/ContentContainer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function RewardPage() {
  const { key } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Confetti Hook

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Bannner bannerHeader="Congratulations!" />
      </Row>
      <Row className="pb-2">
        <Container md={"6"} className="d-flex justify-content-center my-1">
          <Image src="/Trophy.png" width={300} />
        </Container>
      </Row>
      <Row>
        <Container fluid className="d-flex justify-content-evenly">
          <Button
            variant="primary"
            onClick={handleShow}
            className="customButton"
          >
            Enter Prize
          </Button>
          <CustomButton text="Return" link={`/welcome/${key}`} />
        </Container>
      </Row>
      <Row className="py-3 px-1">
        <ContentConatiner Content="In order to qualify for your prize, enter your details with the 'Enter Prize' button. Ballots will count only once per person per challenge." />
      </Row>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="userForm.ControlNameInput">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter name here"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.ControlEmailInput">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="example@email.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.ControlPhoneInput">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="textarea" placeholder="(555) 555-5555" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="customButton"
          >
            Cancel
          </Button>
          <Button variant="primary" className="customButton">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RewardPage;

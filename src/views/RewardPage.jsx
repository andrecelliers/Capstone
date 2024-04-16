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
import Confetti from 'react-confetti'

function RewardPage() {
  const { key } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { width, height } = 500;

  const [validated, set_Validated] = useState(false);
  const [form_Data, set_Form_Data] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const submitFn = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    set_Validated(true);
  };
  const chngFn = (event) => {
    const {name, value } = event.target;
    set_Form_Data({
      ...form_Data,
      [name]: value,
    });
  };
    
  
  // Confetti Hook

  return (
    <>
    <Confetti
      width={width}
      height={height}
    />
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
            className="customButton">
            Enter Prize
          </Button>
          {/*link={`/welcome/${key}`} original, hardcoding for temp fix */}
          <CustomButton text="Return" link={`/welcome/`} />
        </Container>
      </Row>
      <Row className="py-3 px-1">
        <ContentConatiner Content="In order to qualify for your prize, enter your details with the 'Enter Prize' button. Ballots will count only once per person per challenge." />
      </Row>
      <Modal dialogClassName="my-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={submitFn}>
            <Form.Group className="mb-3" controlId="userForm.ControlNameInput">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="user"
                placeholder="Enter name here"
                autoFocus
                value={form_Data.user}
                onChange={chngFn}
                pattern="^[a-zA-Z ]+$"
                required
                isInvalid={
                  validated &&
                  !/^[a-zA-Z0-9 ]+$/.test(form_Data.user)
                }
              />
            <Form.Control.Feedback type="invalid">
                Please enter a valid username (alphanumeric
                characters only).
            </Form.Control.Feedback>              
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.ControlEmailInput">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@email.com"
                value={form_Data.email}
                onChange={chngFn}
                required
                isInvalid={
                  validated &&
                  !/^\S+@\S+\.\S+$/.test(form_Data.email)                  
                }
             />
              <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
              </Form.Control.Feedback>        
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.ControlPhoneInput">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="number"
                name="phoneNo"          
                placeholder="(555) 555-5555"
                value={form_Data.phoneNo}
                onChange={chngFn}
                pattern="^\d{10}$"
                required
                isInvalid={
                  validated &&
                  !/^\d{10}$/.test(form_Data.phoneNo)
                }
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid 10-digit phone number.
              </Form.Control.Feedback>
            </Form.Group>
            <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="customButton"
          >
            Cancel
          </Button>
          <Button type="submit"
            variant="primary" 
            className="customButton"
          >
            Submit
          </Button>
        </Modal.Footer>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RewardPage;

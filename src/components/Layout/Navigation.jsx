import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Logo from "/TOB125Stamp.png";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { key } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
      navigate('/welcome/');
  };


  return (
    <Navbar expand="sm" className="bg-body-tertiary px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to={`/welcome/`}>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Bridgewater 125
        </Navbar.Brand>
        <Nav.Link onClick={goBack}>Back</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;

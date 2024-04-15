import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Logo from "/TOB125Stamp.png";

const Navigation = () => {
  const { key } = useParams();

  return (
    <Navbar expand="sm" className="bg-body-tertiary px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to={`/welcome/${key}`}>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Bridgewater 125
        </Navbar.Brand>
        <Nav.Link href="#">Back</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Navigation;

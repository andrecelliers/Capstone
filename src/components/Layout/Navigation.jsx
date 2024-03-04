import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import pageData from "../../utils/page-content.json";
import Logo from "../../assets/TOB125Stamp.png";

const Navigation = () => {
  const [pages, setPages] = useState({});

  useEffect(() => {
    setPages(pageData);
  }, []);

  return (
    <Navbar className="bg-body-tertiary px-3">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="#" className="">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Bridgewater 125
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {pages ? (
            <Nav className="me-auto">
              <NavDropdown title="Welcome Pages" id="basic-nav-dropdown">
                {Object.entries(pages).map((name) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      to={`/welcome/${name[0]}`}
                      key={name[0]}
                    >
                      {name[1].title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown title="Challenge Pages" id="basic-nav-dropdown">
                {Object.entries(pages).map((name) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      to={`/challenge/${name[0]}`}
                      key={name[0]}
                    >
                      {name[1].title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <NavDropdown title="Reward Pages" id="basic-nav-dropdown">
                {Object.entries(pages).map((name) => {
                  return (
                    <NavDropdown.Item
                      as={Link}
                      to={`/reward/${name[0]}`}
                      key={name[0]}
                    >
                      {name[1].title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto">"Loading..."</Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

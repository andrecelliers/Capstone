import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, NavDropdown, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import pageData from "../../utils/page-content.json";
import Logo from "/TOB125Stamp.png";

const Navigation = () => {
  const [pages, setPages] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setPages(pageData);
  }, []);

  return (
    <Navbar expand="sm" className="bg-body-tertiary px-3">
      <Container fluid>
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
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbar-expand=-sm"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {pages ? (
              <Nav className="me-auto">
                <NavDropdown title="Welcome Pages" id="offcanvasNavbarsm">
                  {Object.entries(pages).map((name) => {
                    return (
                      <NavDropdown.Item
                        as={Link}
                        to={`/welcome/${name[0]}`}
                        key={name[0]}
                        onClick={handleClose}
                      >
                        {name[1].title}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                <NavDropdown title="Challenge Pages" id="offcanvasNavbarsm">
                  {Object.entries(pages).map((name) => {
                    return (
                      <NavDropdown.Item
                        as={Link}
                        to={`/challenge/${name[0]}`}
                        key={name[0]}
                        onClick={handleClose}
                      >
                        {name[1].title}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
                <NavDropdown title="Reward Pages" id="offcanvasNavbarsm">
                  {Object.entries(pages).map((name) => {
                    return (
                      <NavDropdown.Item
                        as={Link}
                        to={`/reward/${name[0]}`}
                        key={name[0]}
                        onClick={handleClose}
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;

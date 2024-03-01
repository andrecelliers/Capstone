import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Logo from "../../assets/TOB125Stamp.png";

function Navigation() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="#">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Bridgewater 125
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#">Back</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;

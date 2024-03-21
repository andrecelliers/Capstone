import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../../assets/css/Layout.css";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container fluid className="content">
        <Row>
          <Col sm={0}> </Col>
          <Col sm={12} md={7}>
            <Outlet />
          </Col>
          <Col sm={0}> </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;

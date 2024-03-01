import React from "react";
import "./assets/App.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Common/Navigation";
import Footer from "./components/Common/Footer";
import WelcomePage from "./views/WelcomePage";

function App() {
  return (
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
      <Navigation />
      <WelcomePage />
      <Footer />
    </Container>
  );
}

export default App;

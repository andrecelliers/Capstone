import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Banner from "../components/Common/Banner";
import HistoryContent from "../components/WelcomePage/HistoryContent";
import CustomButton from "../components/Common/CustomButton";

const WelcomePage = () => {
  return (
    <>
      <Row>
        <Banner bannerHeader="Welcome to Bridgewater 125!" />
      </Row>
      <Row>
        <HistoryContent
          historyHeader="History Header"
          historyContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus egestas sed sed risus pretium. Velit ut tortor pretium viverra suspendisse potenti. Nam aliquam sem et tortor consequat id porta nibh. Elementum integer enim neque volutpat. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Proin libero nunc consequat interdum varius. Consectetur adipiscing elit pellentesque habitant. Odio pellentesque diam volutpat commodo sed. Mauris a diam maecenas sed enim ut sem viverra aliquet. Tortor vitae purus faucibus ornare suspendisse sed nisi. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. A diam maecenas sed enim ut sem viverra. Tempus egestas sed sed risus pretium. Nunc aliquet bibendum enim facilisis gravida neque convallis. Vitae sapien pellentesque habitant morbi. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Enim praesent elementum facilisis leo vel fringilla. Eleifend donec pretium vulputate sapien nec sagittis. At urna condimentum mattis pellentesque id. Suscipit tellus mauris a diam maecenas. Sed felis eget velit aliquet sagittis id consectetur. Diam vel quam elementum pulvinar etiam non quam lacus."
          historyImage="https://via.placeholder.com/200"
        />
      </Row>
      <Row className="d-flex py-3">
        <Container fluid className="d-flex justify-content-center">
          <CustomButton text="Start Challenge" link="/challenge" size="lg" />
        </Container>
      </Row>
      <Row>
        <h4>What is this?</h4>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
          egestas sed sed risus pretium. Velit ut tortor pretium viverra
          suspendisse potenti. Nam aliquam sem et tortor consequat id porta
          nibh. Elementum integer enim neque volutpat. Vestibulum lectus mauris
          ultrices eros in cursus turpis massa. Proin libero nunc consequat
          interdum varius. Consectetur adipiscing elit pellentesque habitant.
          Odio pellentesque diam volutpat commodo sed. Mauris a diam maecenas
          sed enim ut sem viverra aliquet. Tortor vitae purus faucibus ornare
          suspendisse sed nisi. Pellentesque pulvinar pellentesque habitant
          morbi tristique senectus et.
        </p>
      </Row>
    </>
  );
};

export default WelcomePage;

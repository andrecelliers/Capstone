import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Banner from "../components/Common/Banner";
import CustomButton from "../components/Common/CustomButton";
import ContentConatiner from "../components/Common/ContentContainer";
import pagaData from "../utils/page-content.json";

const WelcomePage = () => {
  const { key } = useParams();

  return (
    <>
      <Row>
        <Banner bannerHeader="Welcome to Bridgewater 125!" />
      </Row>
      <Row className="px-1">
        <ContentConatiner
          Header={pagaData[key].header}
          Content={pagaData[key].content}
          Image="https://via.placeholder.com/200"
        />
      </Row>
      <Row className="d-flex py-3">
        <Container fluid className="d-flex justify-content-center">
          <CustomButton
            text="Start Challenge"
            link={`/challenge/${key}`}
            size="lg"
          />
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

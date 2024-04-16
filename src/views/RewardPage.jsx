import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Bannner from "../components/Common/Banner";
import CustomButton from "../components/Common/CustomButton";
import ContentConatiner from "../components/Common/ContentContainer";
import { useParams } from "react-router-dom";

function RewardPage() {
  const { key } = useParams();

  // Confetti Hook

  return (
    <>
      <Row className="d-flex justify-content-center">
        <Bannner bannerHeader="Congradulations!" />
      </Row>
      <Row className="pb-2">
        <Container md={"6"} className="d-flex justify-content-center my-1">
          <Image src="/Trophy.png" width={300} />
        </Container>
      </Row>
      <Row>
        <Container fluid className="d-flex justify-content-evenly">
          <CustomButton text="Enter Prize" />
          <CustomButton text="Return" link={`/welcome/${key}`} />
        </Container>
      </Row>
      <Row className="py-3 px-1">
        <ContentConatiner
          Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus
        egestas sed sed risus pretium. Velit ut tortor pretium viverra
        suspendisse potenti. Nam aliquam sem et tortor consequat id porta
        nibh. Elementum integer enim neque volutpat. Vestibulum lectus
        mauris ultrices eros in cursus turpis massa. Proin libero nunc
        consequat interdum varius. Consectetur adipiscing elit pellentesque
        habitant. Odio pellentesque diam volutpat commodo sed. Mauris a diam
        maecenas sed enim ut sem viverra aliquet. Tortor vitae purus
        faucibus ornare suspendisse sed nisi. Pellentesque pulvinar
        pellentesque habitant morbi tristique senectus et. A diam maecenas
        sed enim ut sem viverra."
        />
      </Row>
    </>
  );
}

export default RewardPage;

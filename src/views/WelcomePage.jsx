import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Banner from "../components/Common/Banner";
import CustomButton from "../components/Common/CustomButton";
import ContentConatiner from "../components/Common/ContentContainer";
import pageData from "../utils/page-content.json";

const WelcomePage = () => {
  const { key } = useParams();

  return (
    <>
      <Row>
        <Banner bannerHeader="Welcome to the Bridgewater 125 Scavenger Hunt" />
      </Row>
      <Row className="px-1">
        <ContentConatiner
          Header={pageData[key ? key : "oldwrdsdaoangne"].header}
          Content={pageData[key ? key : "oldwrdsdaoangne"].content}
          Image={pageData[key ? key : "oldwrdsdaoangne"].image}
        />
      </Row>
      <Row className="d-flex py-3">
        <Container fluid className="d-flex justify-content-center">
          <CustomButton
            text="Start Challenge"
            link={`/challenge/${key ? key : "oldwrdsdaoangne"}`}
            size="lg"
          />
        </Container>
      </Row>
      <Row>
        <h4>What is this?</h4>
        <hr />
        <p>
          For Bridgewater's 125th anniversary, we've scattered QR codes throughout local parks and areas of significance, scan the QR code with your phone and complete the challenge in order to qualify for a prize draw hosted by the Town of Bridgewater.
        </p>
      </Row>
    </>
  );
};

export default WelcomePage;

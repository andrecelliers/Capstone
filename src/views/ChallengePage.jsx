import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useParams } from "react-router-dom";
import SlidePuzzle from "../components/ChallengePage/SlidePuzzle/SlidePuzzle";
import pageData from "../utils/page-content.json";

// Create a mapping of strings to components
const componentMapping = {
  SlidePuzzle: SlidePuzzle,
  // Add other components here
};

const ChallengePage = () => {
  const { key } = useParams();

  // Get the component name from pageData
  const componentName =
    pageData[key]?.challenge || pageData["default"].challenge;

  // Get the component from the mapping
  const Component = componentMapping[componentName];

  return (
    <ReactBootStrap.Container fluid className="d-flex justify-content-center">
      {Component ? <Component /> : null}
    </ReactBootStrap.Container>
  );
};

export default ChallengePage;

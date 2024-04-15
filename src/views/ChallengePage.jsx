import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useParams } from "react-router-dom";
import SlidePuzzle from "../components/ChallengePage/SlidePuzzle/SlidePuzzle";
import TOBordle from "../components/ChallengePage/TOBordle/TOBordle";
import pageData from "../utils/page-content.json";

// Create a mapping of strings to components
const componentMapping = {
  SlidePuzzle: SlidePuzzle,
  TOBordle: TOBordle,
  // Add other components here
};

const ChallengePage = () => {
  const { key } = useParams();

  // Get the component name from pageData
  const componentName =
    pageData[key]?.challenge || pageData["default"].challenge;

  // Get the component from the mapping
  const Component = componentMapping[componentName];

  return Component ? <Component /> : null;
};

export default ChallengePage;

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CustomButton = (props) => {
  const [isLinked, setIsLinked] = useState(false);

  useEffect(() => {
    if (props.link) {
      setIsLinked(true);
    }
  }, []);

  return (
    <>
      {isLinked ? (
        <Link to={props.link}>
          <Button size={props.size}>{props.text}</Button>
        </Link>
      ) : (
        <Button size={props.size}>{props.text}</Button>
      )}
    </>
  );
};

export default CustomButton;

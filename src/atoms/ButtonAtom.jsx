"use client";
import React from "react";
import PropTypes from "prop-types";
import { Button } from "flowbite-react";

const ButtonAtom = ({ ...props }) => {
  const [count, setCount] = React.useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  const onReset = () => {
    setCount(0);
  };
  return (
    <>
      <Button {...props} onClick={onClick}>
        {count && count > 0 ? `Clicked ${count} times` : "Clilck me"}
      </Button>
      <Button onClick={onReset}>Reset</Button>
    </>
  );
};

ButtonAtom.propTypes = {
  children: PropTypes.node.isRequired,
  props: PropTypes.object,
};

export default ButtonAtom;

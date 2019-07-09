import React from "react";

const SpecialButton = (props) => {
  return (
    <div onClick={() => props.inputCalc(props.special)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </div>
  );
};

export default SpecialButton;

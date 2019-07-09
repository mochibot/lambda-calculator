import React from "react";

const Display = (props) => {
  return <div className='calculatorDisplay'>{/* Display any props data here */}{props.expression}</div>;
};

export default Display;
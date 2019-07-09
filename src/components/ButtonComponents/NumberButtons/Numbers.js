import React, { useState } from "react";

import NumberButton from './NumberButton';
//import any components needed
import { numbers } from '../../../data';
//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberBtns] = useState(numbers);

  return (
    <div className='calculatorNumbers'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberBtns.map(item => <NumberButton inputCalc={props.inputCalc} number={item}/>)}
    </div>
  );
};

export default Numbers;

import React, { useState } from "react";

import OperatorButton from './OperatorButton';
//import any components needed
import { operators } from '../../../data';
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorBtns] = useState(operators);
  return (
    <div className='calculatorOperators'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       in any props needed by the child component*/}
      {operatorBtns.map(item => <OperatorButton key={item.value} inputCalc={props.inputCalc} operator={item}/>)}
    </div>
  );
};

export default Operators;
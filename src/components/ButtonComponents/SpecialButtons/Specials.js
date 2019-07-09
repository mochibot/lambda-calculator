import React, { useState } from "react";

import SpecialButton from './SpecialButton';
//import any components needed
import { specials } from '../../../data';
//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialBtns] = useState(specials);
  return (
    <div className='calculatorSpecials'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {specialBtns.map(item => <SpecialButton inputCalc={props.inputCalc} special={item}/>)}
    </div>
  );
};

export default Specials;

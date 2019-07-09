import React, { useState } from "react";
import * as math from 'mathjs';
import "./App.scss";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials'

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [expression, setExpression] = useState('0')

  const inputCalc = (value) => {
    if (expression === '0') {
      setExpression(value);
    } else {
      if (value === 'C') {
        setExpression('0')
      } else if (value === '.') {
        let regex = /[%\+\-\*\/]/g
        if (regex.test(expression)) {
          if (expression.split(regex)[expression.split(regex).length - 1].includes('.')) {
            setExpression(expression);
          } else {
            setExpression(expression + value);
          }
        } else {
          if (expression.includes('.')) {
            setExpression(expression);
          } else {
            setExpression(expression + value);
          }
        }
      } else if (value === '+/-'){
        setExpression(expression * -1);
      } else if (value === '=') {
        setExpression(math.evaluate(expression))
      } else if (value === '+' || value === '-' || value === '*' || value === '%' || value === '/') {
        if (['+', '-', '*', '/', '%'].some(item => item === expression[expression.length - 1])) {
          setExpression(expression.slice(0, expression.length - 1) + value);
        } else {
          setExpression(expression + value);
        }
      } else {
        setExpression(expression + value);
      }
    }
  }

  return (
    <div className="calculatorContainer">
      <Logo />
      <Display expression={expression}/>
      <div className="calculatorKeys">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <div className="calculatorKeysLeft">
          <Specials inputCalc={inputCalc}/>
          <Numbers inputCalc={inputCalc}/>
        </div>
        <div className="calculatorKeysRight">
          <Operators inputCalc={inputCalc}/>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    display: '0',
  });

  const buttonClick = (buttonName) => {
    let display = '0';
    const { total, next, operation } = calculate(state, buttonName);
    if (operation !== null && operation !== undefined) {
      display = next !== null && next !== undefined ? next : '0';
    } else if (next !== null && next !== undefined) {
      display = next;
    } else if (total !== null && total !== undefined) {
      display = total;
    }
    setState({
      total,
      next,
      operation,
      display,
    });
  };

  return (
    <div className="calc-cont">
      <CalculatorDisplay value={state.display} />
      <CalculatorButton type="clear" caption="AC" handleClick={buttonClick} />
      <CalculatorButton type="sign" caption="+/-" handleClick={buttonClick} />
      <CalculatorButton type="percentage" caption="%" handleClick={buttonClick} />
      <CalculatorButton type="division" caption="&#247;" handleClick={buttonClick} />
      <CalculatorButton type="digit-7" caption="7" handleClick={buttonClick} />
      <CalculatorButton type="digit-8" caption="8" handleClick={buttonClick} />
      <CalculatorButton type="digit-9" caption="9" handleClick={buttonClick} />
      <CalculatorButton type="times" caption="&times;" handleClick={buttonClick} />
      <CalculatorButton type="digit-4" caption="4" handleClick={buttonClick} />
      <CalculatorButton type="digit-5" caption="5" handleClick={buttonClick} />
      <CalculatorButton type="digit-6" caption="6" handleClick={buttonClick} />
      <CalculatorButton type="minus" caption="-" handleClick={buttonClick} />
      <CalculatorButton type="digit-1" caption="1" handleClick={buttonClick} />
      <CalculatorButton type="digit-2" caption="2" handleClick={buttonClick} />
      <CalculatorButton type="digit-3" caption="3" handleClick={buttonClick} />
      <CalculatorButton type="plus" caption="+" handleClick={buttonClick} />
      <CalculatorButton type="digit-0" caption="0" handleClick={buttonClick} />
      <CalculatorButton type="dot" caption="." handleClick={buttonClick} />
      <CalculatorButton type="equals" caption="=" handleClick={buttonClick} />
    </div>
  );
}
export default Calculator;

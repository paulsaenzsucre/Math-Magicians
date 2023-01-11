import React from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-cont">
        <CalculatorDisplay value="0." />
        <CalculatorButton type="clear" caption="AC" />
        <CalculatorButton type="sign" caption="+/-" />
        <CalculatorButton type="percentage" caption="%" />
        <CalculatorButton type="division" caption="&#247;" />
        <CalculatorButton type="digit-7" caption="7" />
        <CalculatorButton type="digit-8" caption="8" />
        <CalculatorButton type="digit-9" caption="9" />
        <CalculatorButton type="times" caption="&times;" />
        <CalculatorButton type="digit-4" caption="4" />
        <CalculatorButton type="digit-5" caption="5" />
        <CalculatorButton type="digit-6" caption="6" />
        <CalculatorButton type="minus" caption="-" />
        <CalculatorButton type="digit-1" caption="1" />
        <CalculatorButton type="digit-2" caption="2" />
        <CalculatorButton type="digit-3" caption="3" />
        <CalculatorButton type="plus" caption="+" />
        <CalculatorButton type="digit-0" caption="0" />
        <CalculatorButton type="dot" caption="." />
        <CalculatorButton type="equals" caption="=" />
      </div>
    );
  }
}
export default Calculator;

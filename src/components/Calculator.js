import React from 'react';
import calculate from '../logic/calculate';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      display: '0',
    };
  }

  buttonClick = (buttonName) => {
    let display = '0';
    const { total, next, operation } = calculate(this.state, buttonName);
    if (operation !== null && operation !== undefined) {
      display = next !== null && next !== undefined ? next : '0';
    } else if (next !== null && next !== undefined) {
      display = next;
    } else if (total !== null && total !== undefined) {
      display = total;
    }
    this.setState({
      total,
      next,
      operation,
      display,
    });
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calc-cont">
        <CalculatorDisplay value={display} />
        <CalculatorButton type="clear" caption="AC" handleClick={this.buttonClick} />
        <CalculatorButton type="sign" caption="+/-" handleClick={this.buttonClick} />
        <CalculatorButton type="percentage" caption="%" handleClick={this.buttonClick} />
        <CalculatorButton type="division" caption="&#247;" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-7" caption="7" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-8" caption="8" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-9" caption="9" handleClick={this.buttonClick} />
        <CalculatorButton type="times" caption="&times;" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-4" caption="4" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-5" caption="5" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-6" caption="6" handleClick={this.buttonClick} />
        <CalculatorButton type="minus" caption="-" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-1" caption="1" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-2" caption="2" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-3" caption="3" handleClick={this.buttonClick} />
        <CalculatorButton type="plus" caption="+" handleClick={this.buttonClick} />
        <CalculatorButton type="digit-0" caption="0" handleClick={this.buttonClick} />
        <CalculatorButton type="dot" caption="." handleClick={this.buttonClick} />
        <CalculatorButton type="equals" caption="=" handleClick={this.buttonClick} />
      </div>
    );
  }
}
export default Calculator;

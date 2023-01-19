import React from 'react';
import Calculator from '../components/Calculator';

class CalculatorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div className="calcPageCont">
      <h1 className="pageTitle">Let&apos;s do some math!</h1>
      <Calculator />
    </div>

  )
}
export default CalculatorPage;

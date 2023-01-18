import React from 'react';

class CalculatorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const text = 'CALCULATOR PAGE';
    return (
      <h1>{text}</h1>
    );
  }
}
export default CalculatorPage;

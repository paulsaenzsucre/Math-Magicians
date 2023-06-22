import React from 'react';
import PropTypes from 'prop-types';

class CalculatorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return (
      <div className="calc-display">
        <span className="calc-display-text">{value}</span>
      </div>
    );
  }
}

CalculatorDisplay.propTypes = {
  value: PropTypes.string.isRequired,
};

export default CalculatorDisplay;

import React from 'react';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, caption } = this.props;
    return (
      <div className={`${type} calc-btn`}>
        <span className="btn-caption">{caption}</span>
      </div>
    );
  }
}

CalculatorButton.propTypes = {
  type: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default CalculatorButton;

import React from 'react';
import PropTypes from 'prop-types';

class CalculatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buttonClick = () => {
    const { caption, handleClick } = this.props;
    handleClick(caption);
  }

  render() {
    const { type, caption } = this.props;
    return (
      <button type="button" className={`${type} calc-btn`} onClick={this.buttonClick}>
        <span className="btn-caption">{caption}</span>
      </button>
    );
  }
}

CalculatorButton.propTypes = {
  type: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorButton;

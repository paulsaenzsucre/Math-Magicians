import React from 'react';

class QuotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const text = 'QUOTE PAGE';
    return (
      <h1>{text}</h1>
    );
  }
}
export default QuotePage;

import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const text = 'HOME PAGE';
    return (
      <h1>{text}</h1>
    );
  }
}

export default HomePage;

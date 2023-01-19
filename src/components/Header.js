import React from 'react';
import Navbar from './Navbar';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <header>
      <h1 className="appName">Math Magicians</h1>
      <Navbar />
    </header>
  )
}
export default Header;

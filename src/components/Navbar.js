import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.#links = [
      {
        id: 0,
        path: '/',
        text: 'Home',
      },
      {
        id: 1,
        path: '/calculator',
        text: 'Calculator',
      },
      {
        id: 2,
        path: '/quote',
        text: 'Quote',
      },
    ];
    this.state = {
      isActive: false,
    };
  }

  #links;

  render = () => {
    const { isActive } = this.state;
    return (
      <nav className="navBar">
        <ul className="navBarCont">
          {this.#links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={isActive ? 'active-link' : 'none'}
                exact="true"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default Navbar;

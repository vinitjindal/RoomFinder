import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render() {
    return (
      <nav className=" nav-wrapper red darken-4">
        <div className="container">
            <Link to="/" className='brand-logo '>My brand</Link>
            <ul className="right">
              <li>
                <Link to='/About'>AboutUs</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/FindHere'>Find Here</Link>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

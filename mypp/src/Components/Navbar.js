import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {



  render() {
    return (
      <div>
          <nav className=" nav-wrapper #01579b light-blue darken-2">
            <div>
                <Link to='/' className='brand-logo'><i className="fa fa-fw fa-home"></i>Newbies Residence</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">

                  <li> <Link to='/About'><i className="fa fa-globe"></i>AboutUs</Link> </li>
                  <li> <Link to='/contact'><i className="fa fa-envelope"></i>Contact</Link> </li>
                  <li> <Link to='/FindHere'><i className="fa fa-search"></i>Find Here</Link> </li>
                  <li> <Link to='/login'><i className="fa fa-sign-in"></i>login</Link> </li>

                </ul>
            </div>
          </nav>
          <ul className="sidenav" id="mobile-demo">
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
    );
  }
}

export default Navbar;

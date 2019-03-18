import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Modal from 'react-awesome-modal';
import Login from './Login';


class Navbar extends Component {

      state = {
          VisibleSearch:false,
          VisibleLogin : false,
      }


  openSearch=()=>{
    this.setState({
        VisibleSearch : true
    });
  }

 openLogin=()=>{
   this.setState({
       VisibleLogin : true
   });
 }

  closeLogin=()=> {
      this.setState({
          VisibleLogin : false
      });
  }

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
                    <li onClick={ ()=> this.openSearch()  }> <Link to='/FindHere'><i className="fa fa-search"></i>Find Here</Link> </li>
                    <li onClick={ ()=> this.openLogin()  }> <Link to='/home/login'><i className="fa fa-sign-in"></i>login</Link> </li>
              </ul>
            </div>
          </nav>
          <Login closeLogin = { this.closeLogin } state1 = { this.state.VisibleLogin }/>


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

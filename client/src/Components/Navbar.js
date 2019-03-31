import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Modal from 'react-awesome-modal';
import Login from './Login';
import Register from './Register';

class Navbar extends Component {

      state = {
           VisibleLogin : false,
           visibleSignUp : false,

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

  openSignUp=()=>{
    this.setState({
        VisibleSignUp : true
    });
  }

   closeSignUp=()=> {
       this.setState({
           VisibleSignUp : false
       });
   }
  render() {
     return (
      <div>
          <nav className=" nav-wrapper #01579b light-blue darken-2">
                <Link to='/' className='brand-logo'><i className="fa fa-fw fa-home"></i>Newbies Residence</Link>
                <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">

                    <li> <Link to='/About'><i className="fa fa-globe"></i>AboutUs</Link> </li>
                    <li> <Link to='/contact'><i className="fa fa-envelope"></i>Contact</Link> </li>
                    <li> <Link to='/FindHere'><i className="fa fa-search"></i>Find</Link> </li>
                    <li onClick={ ()=> this.openLogin()  }> <Link to='/home/login'><i className="fa fa-sign-in"></i>LogIn</Link> </li>
                    <li onClick={ ()=> this.openSignUp() }> <Link to='/home/register'><i className="fa fa-user-plus"></i>SignUp</Link></li>

              </ul>
          </nav>
          <Login closeLogin = { this.closeLogin } state1 = { this.state.VisibleLogin }/>
          <Register closeSignUp = { this.closeSignUp } state = { this.state.VisibleSignUp }/>

          <ul className="sidenav" id="mobile-nav">

            <li>
              <Link to='/About'><i className="fa fa-globe"></i>AboutUs</Link>
            </li>

            <li>
              <Link to='/contact'><i className="fa fa-envelope"></i>Contact</Link>
            </li>

            <li>
              <Link to='/FindHere'><i className="fa fa-search"></i>Find</Link>
            </li>

            <li onClick={ ()=> this.openLogin()  }>
             <Link to='/home/login'><i className="fa fa-sign-in"></i>login</Link>
            </li>

            <li onClick={ ()=> this.openSignUp() }>
             <Link to='/home/register'><i className="fa fa-user-plus"></i>SignUp</Link>
            </li>

          </ul>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
//import Modal from 'react-awesome-modal';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

class Navbar extends Component {

      state = {
           VisibleLogin : false,
           VisibleSignUp : false,
           ShowForgotPassword : false
      }

    
  componentDidMount = () =>{
    const token = localStorage.getItem('token');
    if(JSON.parse(token))
    {
      let allProfile = document.querySelectorAll('#openProfile');
      let login = document.querySelectorAll('#login');
      let signUp = document.querySelectorAll('#signUp');
      [...allProfile].forEach(profile=>{
        profile.style.display = 'inline';
      });
      [...login].forEach(login=>{
        login.style.display = 'none';
      });
      [...signUp].forEach(signUp=>{
        signUp.style.display = 'none';
      })
    }else{
      let allProfile = document.querySelectorAll('#openProfile');
      let login = document.querySelectorAll('#login');
      let signUp = document.querySelectorAll('#signUp');
      [...allProfile].forEach(profile=>{
        profile.style.display = 'none';
      });
      [...login].forEach(login=>{
        login.style.display = 'inline';
      });
      [...signUp].forEach(signUp=>{
        signUp.style.display = 'inline';
      })

    }
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
   x = () =>{
      this.closeLogin();
     this.setState({
      ShowForgotPassword : true
     })
   }
   y = () =>{
     this.setState({
       ShowForgotPassword : false
     })
   }
  render() {
   
     return (
      <div>
          <nav className=" nav-wrapper  darken-2">
            <div id="home">
              <Link to='/' className='brand-logo' style={{backgroundColor:""}}><i className="fa fa-home"></i>OurRoom</Link>
            </div>
            <a href="/#" data-target="mobile-nav" className="sidenav-trigger" style={{backgroundColor:""}}><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li style={{backgroundColor:""}}> <a href='/#aboutUs'><i className="fa fa-globe"></i>AboutUs</a> </li>
              <li> <a href='/#contactUs'><i className="fa fa-envelope"></i>Contact</a> </li>
              <li> <Link to='/FindHere'><i className="fa fa-search"></i>Find</Link> </li>
              <li id = "login" onClick={ ()=> this.openLogin()  }> <Link to='/home/login'><i className="fa fa-sign-in"></i>LogIn</Link> </li>
              <li id = "signUp" onClick={ ()=> this.openSignUp() }> <Link to='/home/register'><i className="fa fa-user-plus"></i>SignUp</Link></li>
              <li id="openProfile"> <Link to='/profile'><i className="fa fa-user"></i>MyAccount</Link></li>
            </ul>
          </nav>
          <Login closeLogin = { this.closeLogin } state1 = { this.state.VisibleLogin } forgotPass = {this.x}/>
          <Register closeSignUp = { this.closeSignUp } state = { this.state.VisibleSignUp }/>
          <ForgotPassword x = {this.state.ShowForgotPassword} y = {this.y}/>
          <ul className="sidenav" id="mobile-nav">
            <li> <a href='/#aboutUs'><i className="fa fa-globe"></i>AboutUs</a> </li>
            <li> <a href='/#contactUs'><i className="fa fa-envelope"></i>Contact</a> </li>
            <li><Link to='/FindHere'><i className="fa fa-search"></i>Find</Link></li>
            <li id = "login" onClick={ ()=> this.openLogin()  }><Link to='/home/login'><i className="fa fa-sign-in"></i>login</Link></li>
            <li id = "signUp" onClick={ ()=> this.openSignUp() }><Link to='/home/register'><i className="fa fa-user-plus"></i>SignUp</Link></li>
            <li id="openProfile"> <Link to='/profile'><i className="fa fa-user"></i>Profile</Link></li>
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    authtoken : state.token
  }
}

export default connect(mapStateToProps)(Navbar);

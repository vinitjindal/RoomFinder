import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { withRouter } from 'react-router-dom';

import './Login.css';
import axios from 'axios';


 class Login extends Component {

    state={
      username:"",
      password:"",
    };



    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    }

    handleSubmit=(e)=>{
      e.preventDefault();
       /*fetch('http://localhost:5000/home/login',{
        method:'POST',
        headers:{
          'Content-type':'application/json',
        },
        body:JSON.stringify(this.state),
      }).then((res)=>{
          console.log(res.data);

      })*/
       axios.post("http://localhost:5000/home/login",{username:this.state.username,password:this.state.password})
      .then((res)=>{
        this.props.addtoken(res.data);
         //console.log(res.data);
         this.props.history.push('/');
      })
    }

    render() {
        return (
                <Modal visible={this.props.state1 } width="400" height="300" effect="fadeInDown" onClickAway={() =>  this.props.closeLogin()  }>
                    <div className='login'>
                        <h4> Login As a Vendor.. </h4>
                        <form onSubmit={ this.handleSubmit }>
                          <i className="fa fa-user"><input type="email"  id="username" placeholder=" email " onChange={this.handleChange} /></i>
                          <i className="fa fa-key"><input type="password" id="password" placeholder=" password " onChange={this.handleChange} /></i>
                          <input type="submit" value="Sign In" onClickAway={() =>  this.props.closeLogin() } />
                        </form>
                          <a href="/#">Forgot Password ?</a>
                     </div>
                </Modal>
        );
    }
}

export default withRouter(Login);

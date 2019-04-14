import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { withRouter } from 'react-router-dom';

import './Login.css';
import axios from 'axios';


 class Login extends Component {

    state={
      username:"",
      password:""
    }

    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      const {username,password}=this.state;
      axios.post('http://localhost:5000/home/login',{ username,password })
      .then((res)=>{
      //  console.log(this.props);
          if(res.status===200){
          //  this.props.location.push('/',);
            console.log("yes!!!!");
            console.log(res.data);
          }else{
            const error = new Error(res.error);
            throw error;
          }
      }).catch((err)=>{
        console.log(err);
        alert("Error logging in  try again");
      })
    }
    /*constructor(props) {
          super(props);
        this.state = {
            visibleSignUp : false,
            email:"",
            password:"",
        }
    }

    openSignUp() {
        this.setState({
            visibleSignUp : true
        });
    }

    closeSignUp() {
        this.setState({
            visibleSignUp : false
        });
    }
    componentDidMount(){
      console.log(this.props.state1);
    }*/

    render() {
        return (
                <Modal visible={this.props.state1 } width="400" height="300" effect="fadeInDown" onClickAway={() =>  this.props.closeLogin()  }>
                    <div className='login'>
                        <h4> Login As a Vendor.. </h4>
                        <form onSubmit={ this.handleSubmit }>
                          <i className="fa fa-user"><input type="email"  id="username" placeholder=" email " onChange={this.handleChange} /></i>
                          <i className="fa fa-key"><input type="password" id="password" placeholder=" password " onChange={this.handleChange} /></i>
                          <input type="submit" value="Sign In"/>
                        </form>
                          <a href="#">Forgot Password ?</a>
                     </div>
                </Modal>
        );
    }
}
export default withRouter(Login);

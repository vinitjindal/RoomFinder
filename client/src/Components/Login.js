import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Login.css';
import axios from 'axios';


 class Login extends Component {

    state={
      username:"",
      passcord:"",
    };

   
    
    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value
      })
    }

    handleSubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:5000/home/login",{ username:this.state.username, password:this.state.passcord })
      .then((res)=>{
          if(res.status===200){
             this.props.setAuthToken(res.data);
             this.props.history.push('/FindHere');
             this.props.closeLogin();
             alert('Succesfully Loged In');
             this.setState({
              username:"",
              passcord:""
             });
          }
          if(res.status===201){
             alert(res.data);
          }
      })
    }

    render() {
        return (
                <Modal visible={this.props.state1 } width="400" height="330" effect="fadeInDown" onClickAway={() =>  this.props.closeLogin()  }>
                    <div className='login'>
                        <h4> Login As a Vendor.. </h4>
                        <form onSubmit={ this.handleSubmit }>
                          <i className="fa fa-user"><input type="email"  id="username" value={ this.state.username } placeholder="email" onChange={this.handleChange} required/></i>
                          <i className="fa fa-key"><input type="password" id="passcord" value={ this.state.passcord } placeholder="password" onChange={this.handleChange} required/></i>
                          <input type="submit" value="Sign In" onClickAway={() =>  this.props.closeLogin() } />
                        </form>
                         <p id = "forgotPass" onClick = { () => this.props.forgotPass() }>Forgot Password ?</p>
                     </div>
                </Modal>
        );
    }
}



const mapStateToProps = (state) => {
  return {
     authToken : state.token
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
      setAuthToken : (data) =>{ dispatch({ type:"add", value:data }) }
  }
}

const _login =  withRouter(Login);
export default connect(mapStateToProps, mapDispatchToProps)(_login);

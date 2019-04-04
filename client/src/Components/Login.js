import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { Link } from 'react-router-dom';
import './Login.css';


export default class Login extends Component {

    state={
      username:"",
      password:""
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
                        <form>
                          <i className="fa fa-user"><input type="email" placeholder=" email " autofocus /></i>
                          <i className="fa fa-key"><input type="password" placeholder=" password "/></i>
                          <input type="button" value="Sign In"/>
                        </form>
                          <a href="#">Forgot Password ?</a>
                     </div>
                </Modal>
        );
    }
}

import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';


export default class Register extends Component {
  state={
    username:"",
    password:""
  }
    render() {
        return (
                <Modal visible={this.props.state } width="400" height="300" effect="fadeInDown" onClickAway={() =>  this.props.closeSignUp()  }>
                    <div className='login'>
                        <h4> Register As a Vendor.. </h4>
                        <form>
                          <i className="fa fa-user"><input type="text" placeholder=" username " autofocus /></i>
                          <i className="fa fa-key"><input type="password" placeholder=" password "/></i>
                          <input type="button" value="Sign Up"/>
                        </form>
                     </div>
                </Modal>
        );
    }
}

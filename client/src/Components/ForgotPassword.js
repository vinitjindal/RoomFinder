import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';
import axios from 'axios';

export default class ForgotPassword extends Component{
    
    state = {
        email:null,
        otp:null,
        newPassword:null
    }

    handleChange = (e) =>{
        this.setState({
           [e.target.id] : e.target.value
        })
    }

    sendOTP = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:5000/sendOTP', {email : this.state.email } ).then((res)=>{
            if(res.status === 200)
            {
                document.getElementById('enterOTP').style.display = "block";
                document.getElementById('enterEmail').style.display = "none";
                alert(res.data);
            }else{
                alert(res.data);
            }
        })

    }

    handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/handleOTP", { otp : this.state.otp, pass : this.state.newPassword  })
        .then((res) =>{
            alert(res.data);
        })
        this.props.y();
        document.getElementById('enterOTP').style.display = "none";
        document.getElementById('enterEmail').style.display = "block";
    }
    render(){
        return(
            <Modal visible={this.props.x } width="400" height="300" effect="fadeInDown" onClickAway = {this.props.y}>
                    <div className='login'>
                        <h5 style = {{ color : 'rgb(0, 191, 255)', textAlign:'center', paddingTop:'7px' }} >OK ! No Problem.</h5>
                        <form onSubmit = {this.sendOTP} id = "enterEmail">
                          <p>An OTP will be sent to your email id.</p>  
                          Enter registered email.
                          <input type="text" id="email" placeholder="example@gmail.com" onChange = {this.handleChange}/> 
                          <input type = "submit" value = "send OTP" />
                        </form>
                        <form onSubmit = { this.handleSubmit } style = {{display:"none"}} id = "enterOTP">
                            Enter OTP:
                            <input type = "text" id = "otp" onChange = {this.handleChange} />
                            Enter new password:
                            <input type = "text" id = "newPassword" onChange = {this.handleChange}/>
                            <input type="submit" value="reset"/>
                        </form>
                     </div>
            </Modal>
        )
    }
}
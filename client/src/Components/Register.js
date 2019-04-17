import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';
import axios from 'axios';

export default class Register extends Component {
  state={
    name:"",
    email:"",
    contact:"",
    permanent_Address:"",
    password:""
  }

    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value,
      });

    }
    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(this.state);
      const {name,email,contact,permanent_Address,password} = this.state;
      axios.post('http://localhost:5000/home/register',{ name,email,contact,permanent_Address,password })
      .then((res)=>{
         alert(res.data);
      }).then((data)=>{
        this.setState({
          name:" ",
          email:" ",
          contact:" ",
          permanent_Address:" ",
          password:" "
        })
      })
      /*fetch('http://localhost:5000/home/register',{
       method: 'POST',
       body: JSON.stringify(this.state),
       headers: {"Content-Type": "application/json"}
     }).then((res) => {console.log(res.json())}).then((info)=>{
       console.log("success",JSON.stringify(info))
     })*/
   }
    render() {
        return (
                <Modal visible={this.props.state } width="450" height="500" effect="fadeInDown" onClickAway={() =>  this.props.closeSignUp()  }>
                    <div className='login'>
                        <h4> Register As a Vendor.. </h4>
                        <form  onSubmit={ this.handleSubmit }>
                          Name:<input type="text"  id="name" value={this.state.name}   onChange={ this.handleChange } />
                          Email:<input type="email"   id="email" value={this.state.email}  onChange={ this.handleChange } />
                          Contact:<input type="text"   id="contact" value={this.state.contact} onChange={ this.handleChange } />
                          Permanent Address:<input type="text"   id="permanent_Address" value={this.state.permanent_Address} onChange={ this.handleChange } />
                          password:<input type="password"  id="password"  value={ this.state.password } onChange={ this.handleChange } />
                          <input type="submit" value="Sign Up"/>
                        </form>
                     </div>
                </Modal>
        );
    }
}

import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';
import axios from 'axios';

export default class Register extends Component {
  state={
    Name:" ",
    Email:" ",
    Contact:" ",
    permanent_Address:" ",
    password:" "
  }

    handleChange=(e)=>{
      this.setState({
        [e.target.id]:e.target.value,
      });

    }
    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(this.state);
      const {Name,Email,Contact,permanent_Address,password} = this.state;
      axios.post('http://localhost:5000/home/register',{ Name,Email })
      .then((res)=>{
        console.log(res.data);
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
                          Name:<input type="text"  id="Name" placeholder=" name " autofocus  onChange={ this.handleChange } />
                          Email:<input type="email"   id="Email" placeholder=" email " onChange={ this.handleChange } />
                          Contact:<input type="number"   id="Contact" placeholder="contact" onChange={ this.handleChange } />
                          Permanent Address:<input type="text"   id="permanent_Address" placeholder=" Address " onChange={ this.handleChange } />
                          password:<input type="password"   id="password" placeholder=" password " onChange={ this.handleChange } />
                          <input type="submit" value="Sign Up"/>
                        </form>
                     </div>
                </Modal>
        );
    }
}

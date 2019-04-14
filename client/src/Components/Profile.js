import React,{ Component } from 'react';
import axios from 'axios';
class Profile extends Component{
  state={
    name:"",
    email:"",
    contact:"",
    permanent_Address:"",
  }

  componentDidMount(){
    axios.get('http://localhost:5000/profile').then((res)=>{
      console.log(res.data);
      this.setState({
        name: res.data[0].name ,
        email:res.data[0].email,
        contact:res.data[0].contact,
        permanent_Address:res.data[0].permanent_Address,
      })
    })
  }
  render(){
    return(
        <div>
        <h3> profile of a user ..... </h3>
        <p>Name: {this.state.name} </p>
        <p>Email: {this.state.email} </p>
        <p>Contact: {this.state.contact} </p>
        <p>Address: {this.state.permanent_Address} </p>
        </div>

    )
  }
}

export default Profile;

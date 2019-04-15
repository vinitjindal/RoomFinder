import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-awesome-modal';

import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';

const styles = {
  root: {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 30,
  padding: '0 40px',
  width:50,
  marginTop:10
  },
}

class Profile extends Component{
  state={
    key:"",
    name:"",
    email:"",
    contact:"",
    permanent_Address:"",
    visible:false
  }

  componentDidMount(){
    axios.get('http://localhost:5000/profile').then((res)=>{
       this.setState({
        key:res.data._id.toString(),
        name: res.data.name ,
        email:res.data.email,
        contact:res.data.contact,
        permanent_Address:res.data.permanent_Address,
      })
    })
  }
  openUpdate=(e)=>{
    this.setState({
      visible:true,
    })
  }
  closeUpdate=(e)=>{
    this.setState({
      visible:false,
    })
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    //e.preventDefault();
    axios.put("http://localhost:5000/editprofile",{
      name:this.state.name,email:this.state.email, contact:this.state.contact,
      address:this.state.permanent_Address,key:this.state.key
    })
    .then((res)=>{
      alert(res.data);
     })
  }
  render(){
    return(
      <div className=' container-fluid'>
        <Button className={this.props.classes.root} >Logout</Button>
        <div className="row">
          <div className=' card col11 col-sm-3'>

              <p>Name:  { this.state.name }</p>
              <p>Email:  { this.state.email }</p>
              <p>Contact:  { this.state.contact }</p>
              <p>Address:  { this.state.permanent_Address }</p>
              <section>
              <Button className={this.props.classes.root} onClick={ ()=>this.openUpdate() } >Update</Button>
                  <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() =>  this.closeUpdate()  }>
                       <div>
                          <form onSubmit={ this.handleSubmit } >
                            Name: <input type="text" id='name' value={this.state.name} onChange={ this.handleChange }/>
                            Email: <input type="text" id='email' value={this.state.email} onChange={ this.handleChange }/>
                            Contact: <input type="text" id='contact' value={this.state.contact} onChange={ this.handleChange }/>
                            Address: <input type="text" id='permanent_Address' value={this.state.permanent_Address} onChange={ this.handleChange }/>
                            <input type="submit" value="update" onClick={ ()=>this.closeUpdate() }/>
                          </form>
                      </div>
                  </Modal>
              </section>
          </div>
          <div className=' card col22 col-sm-9'>
            <p>You have nothing aploaded yet!</p>
          </div>
       </div>
     </div>

    )
  }
}

export default withStyles(styles)(Profile);

import React,{ Component } from 'react';
//import Button from '@material-ui/core/Button';
import Modal from 'react-awesome-modal';
import axios from 'axios';
//import { withStyles } from '@material-ui/core/styles';
import "./Login.css";

class UploadPgData extends Component{
 constructor(props)
 {
    super(props);
    this.state = {

      address:"",
      state:"",
      city:"",
      description:"",
      pg_contact:"",
      price:"",

    };
 }
  

 handleChange=(e)=>{
   this.setState({
     [e.target.id]:e.target.value
   })
 }

 handleSubmit=(e)=>{
    e.preventDefault();
   axios.post('http://localhost:5000/uploadPgData',{ key:this.props.Key, address:this.state.address,
     state:this.state.state, city:this.state.city, description:this.state.description,
     contact:this.state.pg_contact, price:this.state.price })
     .then((res)=>{
       alert(res.data);
       this.setState({
         address:"",
         state:"",
         city:"",
         description:"",
         pg_contact:"",
         price:"",
       })
       this.props.checkData();
     })
 }

  render(){
    return(
      <div>
        <section>
             <Modal visible={this.props.state} width="400" height="570" effect="fadeInUp" onClickAway={() =>  this.props.closeUpload()  }>
                 <div className = "login">
                    <form  onSubmit={ this.handleSubmit } >
                      <div id = "uploadPgData" >
                          Address: <input type="text" id='address' value={this.state.address} onChange={ this.handleChange }/>
                          State: <input type="text" id='state' value={this.state.state} onChange={ this.handleChange }/>
                          city: <input type="text" id='city' value={this.state.city} onChange={ this.handleChange }/>
                          description: <input type="text" id='description' value={this.state.description} onChange={ this.handleChange }/>
                          Contact: <input type="number" id='pg_contact' value={this.state.pg_contact} onChange={ this.handleChange }/>
                          Price: <input type="number" id='price' value={this.state.price} onChange={ this.handleChange }/>
                      </div>
                      <input type="submit" value="submit" onClick = {() =>  this.props.closeUpload()}/>
                    </form>
                </div>
            </Modal>
        </section>
      </div>
    )
  }
}

export default UploadPgData;

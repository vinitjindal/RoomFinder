import React,{ Component } from 'react';
//import Button from '@material-ui/core/Button';
import Modal from 'react-awesome-modal';
import axios from 'axios';
//import { withStyles } from '@material-ui/core/styles';


class UploadPgData extends Component{
  state={

        address:"",
        state:"",
        city:"",
        description:"",
        contact:null,
        price:null,

  }

 handleChange=(e)=>{
   this.setState({
     [e.target.id]:e.target.value
   })
 }

 handleSubmit=(e)=>{


   axios.post('http://localhost:5000/uploadPgData',{ key:this.props.Key, address:this.state.address,
     state:this.state.state, city:this.state.city, description:this.state.description,
     contact:this.state.contact,price:this.state.price })
     .then((res)=>{
       alert(res.data);
     })


 }

  render(){
    return(
      <div>

      <section>
           <Modal visible={this.props.state} width="400" height="450" effect="fadeInUp" onClickAway={() =>  this.props.closeUpload()  }>
               <div>
                  <form onSubmit={ this.handleSubmit } >
                    Address: <input type="text" id='address' value={this.state.address} onChange={ this.handleChange }/>
                    State: <input type="text" id='state' value={this.state.state} onChange={ this.handleChange }/>
                    city: <input type="text" id='city' value={this.state.city} onChange={ this.handleChange }/>
                    description: <input type="text" id='description' value={this.state.description} onChange={ this.handleChange }/>
                    Contact: <input type="number" id='contact' value={this.state.contact} onChange={ this.handleChange }/>
                    Price: <input type="number" id='price' value={this.state.price} onChange={ this.handleChange }/>
                    <input type="submit" value="submit"/>
                  </form>
              </div>
          </Modal>
      </section>

      </div>
    )
  }
}

export default UploadPgData;

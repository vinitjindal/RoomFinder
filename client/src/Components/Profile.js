import React,{ Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-awesome-modal';
import UploadPgData from './uploadPgData'
import { withStyles } from '@material-ui/core/styles';

import axios from 'axios';

const styles = {
  card1: {
    maxWidth: 545,
  },
  media: {
    height: 240,
  },
  root: {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 30,
  padding: '0 40px',
  width:50,
  marginTop:10,
  marginLeft:50
  },
}

class Profile extends Component{
  state={
    key:"",
    name_1:"",
    email_1:"",
    contact_1:"",
    permanent_Address_1:"",
    visible:false,
    visibleUpload:false,
    homeList:[]
  }

  componentDidMount(){
    //  console.log(this.props.token);
    if(this.props.token!==""){
      axios.post('http://localhost:5000/profile',{ token:this.props.token }).then((res)=>{
        this.setState({
          key:res.data._id.toString(),
          name_1: res.data.name ,
          email_1:res.data.email,
          contact_1:res.data.contact,
          permanent_Address_1:res.data.permanent_Address,
        })
        //console.log(res.data);
      })
  }else{
    alert("please login to access profile");
  }
}

  handleLogout(){
    this.props.lougoutToken();
    //this.props.history.push('/');
  }

  handleClick=(e)=>{
    //console.log(this.state.key);
    axios.post('http://localhost:5000/pglist',{ Key:this.state.key })
    .then((res)=>{
      res.data.forEach((item)=>{
        const data={
          id:item._id.toString(),
          address:item.address,
          state:item.state,
          city:item.city,
          description:item.description,
          contact:item.contact,
          price:item.price,
        }
         console.log(item.address)
        let homeList = [...this.state.homeList,data]
        this.setState({
          homeList
        })
      })
      console.log(res.data)
    })
  }

  openUpload=(e)=>{
    this.setState({
      visibleUpload:true
    })
   }

  closeUpload=(e)=>{
    this.setState({
      visibleUpload:false

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
   e.preventDefault();
    axios.put("http://localhost:5000/editprofile",{
      name:this.state.name_1,email:this.state.email_1, contact:this.state.contact_1,
      address:this.state.permanent_Address_1,key:this.state.key
    })
    .then((res)=>{
      alert(res.data);
     })
  }

  handleDelete=(id)=>{
    //console.log(id)
    axios.delete('http://localhost:5000/deletedata',{params:{id : id } })
    .then((res)=>{
      alert(res.data);
      window.location.reload();
      //  this.handleClick();
    })
  }
  render(){

    const  homeList  = this.state.homeList;
    const HomeList = homeList?(homeList.map(arr=>{
      return(
        <div className='roomlist' key={ arr.id }>
            <Card className={ this.props.classes.card1 }>
              <CardActionArea>
                  <CardMedia className={ this.props.classes.media } image="#" title="room pic"/>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Address : { arr.address } { arr.city }  { arr.state },
                        Contact : { arr.contact }
                      </Typography>
                      <Typography component="p">
                           { arr.description }
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small" color="primary"> Book </Button>
                      <Button size="small" color="primary" onClick={ ()=>this.handleDelete(arr.id) } > Delete </Button>
                  </CardActions>
               </CardActionArea>
            </Card>
          </div>
      )
    })):(<p> Loading... </p>)

    return(
      <div className='container-fluid'>
        <Button className={this.props.classes.root} onClick={ ()=>this.handleLogout() }>Logout</Button>
        <Button  className={this.props.classes.root}  onClick={  ()=>{ this.openUpload() } } >Upload</Button>
        <Button  className={this.props.classes.root} onClick={ ()=>this.handleClick()} >Pglist</Button>
        <div className="row">
          <div className='col11 col-sm-3'>
            <div className='card'>
              <p>Name:  { this.state.name_1 }</p>
              <p>Email:  { this.state.email_1 }</p>
              <p>Contact:  { this.state.contact_1 }</p>
              <p>Address:  { this.state.permanent_Address_1 }</p>
              <section>
              <Button className={this.props.classes.root} onClick={ ()=>this.openUpdate() } >Update</Button>
                  <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() =>  this.closeUpdate()  }>
                       <div>
                          <form onSubmit={ this.handleSubmit } >
                            Name: <input type="text" id='name_1' value={this.state.name_1} onChange={ this.handleChange }/>
                            Email: <input type="text" id='email_1' value={this.state.email_1} onChange={ this.handleChange }/>
                            Contact: <input type="text" id='contact_1' value={this.state.contact_1} onChange={ this.handleChange }/>
                            Address: <input type="text" id='permanent_Address_1' value={this.state.permanent_Address_1} onChange={ this.handleChange }/>
                            <input type="submit" value="update" onClick={ ()=>this.closeUpdate() }/>
                          </form>
                      </div>
                  </Modal>
              </section>
            </div>
          </div>
          <div className='col22 col-sm-9'>
            <UploadPgData   Key={ this.state.key } state={ this.state.visibleUpload }  closeUpload={ this.closeUpload } />
            { HomeList }
          </div>
       </div>
     </div>

    )
  }
}

export default withStyles(styles)(Profile);
// export default compose(
//   withRouter,
// )(Profile);

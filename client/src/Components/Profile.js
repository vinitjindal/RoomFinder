import React,{ Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from 'react-awesome-modal';
import UploadPgData from './uploadPgData';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import "./Login.css"

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
    homeList:[],
    isDataUploaded : false
  }

  componentDidMount(){
    const token = JSON.parse(localStorage.getItem('token'));
    if(token !== null){
      axios.post('http://localhost:5000/profile',{ token : token }).then((res)=>{
      this.setState({
        key:res.data._id.toString(),
        name_1: res.data.name ,
        email_1:res.data.email,
        contact_1:res.data.contact,
        permanent_Address_1:res.data.permanent_Address,
      })
    }).catch((err)=>{
      this.props.setAuthToken(null);
      this.props.history.push('/');
      alert('time expires login again !');
    })
  }


  
}

  handleLogout(){
    this.props.setAuthToken(null);
    this.props.history.push('/');
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
    }).catch((error)=>{
      alert("nothing uploaded yet");
       console.log(error.request);
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
      this.setState({
        isDataUploaded : false
      })
      window.location.reload();
      //  this.handleClick();
    })
  }

  checkData = (e) =>{
    console.log(e);
    this.setState({
      isDataUploaded : true
    })
  }

  render(){
    const  homeList  = this.state.homeList;
    const HomeList = homeList.length?(homeList.map(arr=>{
      return(
        <div style = {{paddingTop : "1%" }} key={ arr.id }>
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
                      <Button size="small" color="primary" onClick={ ()=>this.handleDelete(arr.id) } > Delete </Button>
                  </CardActions>
               </CardActionArea>
            </Card>
        </div>
      )
    })):(<p> Click On PgList to show data ! </p>)

    const token = localStorage.getItem('token');
    const showData = () => {
      if(JSON.parse(token))
      { 
        return (       
            <div className="row">
              <div className = "col s12" style = {{marginTop:"1%", backgroundColor:""}}>
                <Button className={this.props.classes.root} onClick={ ()=>this.handleLogout() }>Logout</Button>
                <Button  className={this.props.classes.root}  onClick={  ()=>{ this.openUpload() } } >Upload</Button>
                <Button  className={this.props.classes.root} onClick={ ()=>this.handleClick()} >Pglist</Button>
              </div>
              <div className='col s3' style = {{marginTop:"3%", backgroundColor:""}}>
                <div className='card' >
                  <div style={{textAlign:"center", textDecorationStyle:"double"}}> 
                    <p style={{textTransform:"capitalize"}}>Hi  { this.state.name_1 } !</p>
                    <p>Email :  { this.state.email_1 }</p>
                    <p>Contact :  { this.state.contact_1 }</p>
                    <p>Address :  { this.state.permanent_Address_1 }</p>
                  </div>
                  <section>
                  <Button className={this.props.classes.root} style={{marginLeft:"38%"}} onClick={ ()=>this.openUpdate() } >Update</Button>
                  <Modal visible={this.state.visible} width="400" height="400" effect="fadeInUp" onClickAway={() =>  this.closeUpdate()  }>
                      <div className = "login">
                          <form  onSubmit={ this.handleSubmit } >
                            <div id = "updatePersonalData">
                              Name : <input type="text" id='name_1' value={this.state.name_1} onChange={ this.handleChange }/>
                              Email : <input type="text" id='email_1' value={this.state.email_1} onChange={ this.handleChange }/>
                              Contact : <input type="text" id='contact_1' value={this.state.contact_1} onChange={ this.handleChange }/>
                              Address : <input type="text" id='permanent_Address_1' value={this.state.permanent_Address_1} onChange={ this.handleChange }/>
                            </div>
                            <input type="submit" value="update" onClick={ this.closeUpdate }/>
                          </form>
                      </div>
                  </Modal>
                  </section>
                </div>
              </div>
              <div className='col s9' style = {{marginTop:"3%", paddingLeft: "10%", backgroundColor:""}}>
                { HomeList }
              </div>
              <UploadPgData  checkData = {this.checkData } Key={ this.state.key } state={ this.state.visibleUpload }  closeUpload={ this.closeUpload } />
            </div>
        )
      }else{
        return <h1 style = {{ textAlign:'center' }} > PLEASE LOGIN TO ACCESS PROFILE DATA !  </h1>
      }
    }
    
    return(
      <div>
        { showData() }
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    authToken : state.token
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setAuthToken : (data) => {dispatch({ type : 'add', value : data }) }
  }
}

const hocProfile =  withStyles(styles)(Profile);
export default connect(mapStateToProps, mapDispatchToProps)(hocProfile);
// export default compose(
//   withRouter,
// )(Profile);

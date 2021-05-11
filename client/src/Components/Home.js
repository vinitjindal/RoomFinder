import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component{
  render(){
    return(
      <div>
          <div className = "data">
            Hello ! Start finding your first room.
          </div>
          <div className = "Bdiv">
            <Link to="/FindHere"><input type = "button" className="Fbutton" value = "Explore" /></Link>
            <input type = "button" className="Fbutton" value = "Login" />
          </div>
          <div className = "home">
            <img src= "/assets/images/home1.jpg"  className="img" alt="" />
          </div>
        
        <div className = "footer">
          <b>Email</b> : help.newbies471@gmail.com<br></br>
          <b>contact</b> : +91-7005689568
          <div style = {{textAlign:"left", paddingLeft:"15px"}}>
            OurRoom<span>&copy;</span>2021
            <a href="https://github.com/vinitjindal/RoomFinder" target="_blank" rel = "noopener noreferrer" style = {{color:"white"}}><i className = "fa fa-github" style = {{float:"right", paddingRight:"15px", fontSize:"30px"}}></i></a>
            <i className = "fa fa-twitter" style = {{float:"right", paddingRight:"15px", fontSize:"30px"}}></i>
            <i className = "fa fa-slack" style = {{float:"right", paddingRight:"15px", fontSize:"30px"}}></i>
          </div>
        </div>  
      </div>  
    );
  }
}

export default Home;

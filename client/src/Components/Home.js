import React,{ Component } from 'react';
import './Home.css';

class Home extends Component{
  render(){
    return(
        <div className = 'home'>
           {/* <div className = "hCrousel"> */}
                  {/* <img  style={{ backgroundSize:"cover", height:"50%", width:"100%"}}  src = '/assets/images/home1222.jpg' alt = 'home'/> */}
                  {/* <header id='aboutUs' style={{paddingLeft:"",backgroundColor:""}}> */}
                    <div className="carousel" style={{backgroundColor:""}}>
                      <a className="carousel-item" href="#one!"><img src='/assets/images/slide1.jpg' alt='slide1'/></a>
                      <a className="carousel-item" href="#two!"><img src='/assets/images/slide2.jpg' alt='slide2'/></a>
                      <a className="carousel-item" href="#three!"><img src='/assets/images/slide3.jpg' alt='slide3'/></a>
                    </div>
                  
            {/* </div>  */}
        </div>   
    );
  }
}

export default Home;

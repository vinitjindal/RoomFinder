import React,{ Component } from 'react';
import Search from './Search';
import StarRatingComponent from 'react-star-rating-component';


class FindHere extends Component{
  state={
    HomeList:[
      {
        id:1,
        state:"Punjab",
        city:"Patiala",
        Address:"House no.6 ",
        img:"http://4.bp.blogspot.com/-RSAdi3NMMs8/VakWj_znRcI/AAAAAAAAAMI/lp19iktRyCw/s1600/Rent%2Broom%2Bstockholm.jpg",
        Mobno:9041000897,
      },
      {
        id:2,
        state:"Punjab",
        city:"Rajpura",
        Address:"House no.5",
        img:"http://4.bp.blogspot.com/-RSAdi3NMMs8/VakWj_znRcI/AAAAAAAAAMI/lp19iktRyCw/s1600/Rent%2Broom%2Bstockholm.jpg",
        Mobno:9561959458,
      },
    ]
  }

  SearchPg=(info)=>{
    let HomeList = this.state.HomeList.filter(arr=>{
      return arr.city === info.city && arr.state === info.state;
    })
    this.setState({
      HomeList
    })
  }
  render(){
    const { HomeList } = this.state;
    const homeList = HomeList?(HomeList.map(arr=>{
      return(
        <div className=" post-card post card container" key={ arr.id }>
          <img src={ arr.img } alt = "rooms"/>
          <div className = "Address">
            <p> Address : { arr.Address } { arr.city }  </p>
            <p> Contact : { arr.Mobno }   </p>
            <StarRatingComponent emptyStarColor={ "#BDB76B" }/>
          </div>
        </div>
      )
    })):(<p> Loading </p>);
    return(
      <div>
       { homeList }
       <Search Searchinfo = { this.SearchPg }/>
      </div>
    )
  }
}

export default FindHere;

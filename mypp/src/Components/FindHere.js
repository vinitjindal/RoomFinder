import React,{ Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Search from './Search';


const styles = {
  card: {
    maxWidth: 545,
  },
  media: {
    height: 240,
  },
}


class FindHere extends Component{
  state={
    homeList:[
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
        state:"Haryana",
        city:"Ambala",
        Address:"House no.5",
        img:"http://4.bp.blogspot.com/-RSAdi3NMMs8/VakWj_znRcI/AAAAAAAAAMI/lp19iktRyCw/s1600/Rent%2Broom%2Bstockholm.jpg",
        Mobno:9561959458,
      },
    ],
    VisibleSearch:false,

  }

  componentDidMount(){
    this.setState({
      VisibleSearch:true
    })
  }

  closeSearch=()=>{
    this.setState({
        VisibleSearch : false
    });
  }

  searchPg=(info)=>{
    let homeList = this.state.homeList.filter(arr=>{
      return arr.city === info.city && arr.state === info.state;
    })
    this.setState({
      homeList
    })
  }

  render(){
    const { homeList } = this.state;
    const HomeList = homeList?(homeList.map(arr=>{
      return(
        <div className="roomlist"  key={ arr.id }>
            <Card className={ this.props.classes.card }>
              <CardActionArea>
                  <CardMedia className={ this.props.classes.media } image = { arr.img } title="room pic"/>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Address : { arr.Address } { arr.city }  { arr.state },
                        Contact : { arr.Mobno }
                      </Typography>
                      <Typography component="p">
                          3 single bed rooms are available with A.C.
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Button size="small" color="primary"> Book </Button>
                  </CardActions>
               </CardActionArea>
            </Card>
          </div>
      )
    })):(<p> Loading </p>)
    return(
      <div>
        <Search closeSearch={ this.closeSearch } state={ this.state.VisibleSearch }/>
        <div>
          { HomeList }
        </div>
      </div>
    )
  }
}
FindHere.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FindHere);

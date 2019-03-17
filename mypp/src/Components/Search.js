import React,{ Component } from 'react';
/*import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';*/

/*const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
})
*/
class Search extends Component{
  state={
    state:" ",
    city:" "
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.searchInfo(this.state);
    //console.log(this.state.city);

  }
  /*componentDidUpdate(){
    this.props.searchInfo(this.state);
  }*/
  handleChange=(e)=>{
    //console.log("changing handle");
    this.setState({
      [e.target.id]:e.target.value,
      [e.target.id]:e.target.value
    })
    console.log(this.state)
  }
  render(){
    return(
				<form>
					<input type="text" autofocus  placeholder="Search for state and city e.g punjab patiala"/>
					<span><input type="submit" value="search"/></span>
				</form>
    )
  }
}

export default Search;

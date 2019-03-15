import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
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
      <div className = { this.props.classes.container }>
          <form onSubmit={ this.handleSubmit }>
            <TextField label="State:" id="state" className={ this.props.classes.textField }
             margin="normal" rows = '1' multiline	='false' autoFocus="true" onChange={ this.handleChange }/>
            <TextField label="City:" id="city" className={ this.props.classes.textField }
            margin="normal" rows = '1' multiline	='true' onChange={ this.handleChange }/>
           </form>
        {/*<form onSubmit={ this.handleSubmit }>
          State : <input type="text" id="state" onChange={ this.handleChange } placeholder="For now enter with first letter caps" />
          City : <input type="text" id="city" onChange={ this.handleChange } placeholder="For now enter with first letter caps"/>
          <input type="submit" value="Search"/>
        </form>*/}
      </div>
    )
  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Search);

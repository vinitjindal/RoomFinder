import React,{ Component } from 'react';

class Search extends Component{
  state={
    state:" ",
    city:" "
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.Searchinfo(this.state);
    console.log(this.state.city);

  }
  handleChange=(e)=>{
    //console.log("changing handle");
    this.setState({
      [e.target.id]:e.target.value,
      [e.target.id]:e.target.value
    })

  }
  render(){
    return(
      <div className = "container">
        <form onSubmit={ this.handleSubmit }>
          State : <input type="text" id="state" onChange={ this.handleChange } />
          City : <input type="text" id="city" onChange={ this.handleChange }/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;

import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import "./Login.css"

 class Search extends Component {
  state={
    state:null,
    city:null,
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.state && this.state.city)
      this.props.addInfo(this.state);
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value,
      [e.target.id]:e.target.value,
    })
  }

    render() {
        return (
            <section>
                <Modal visible={this.props.state} width="400" height="300" effect="fadeInUp" onClickAway={() =>  this.props.closeSearch()  }>
                    <div className="bg-image"></div>
                    <div className="login">
                        <form onSubmit={ this.handleSubmit } >
                          <input type="text" id='state' placeholder="Enter state" onChange={ this.handleChange } />
                          <input type="text" id='city' placeholder="Enter city" onChange={ this.handleChange } />
                          <input type="submit" value=" Hit Enter " onClick={ ()=>this.props.closeSearch() }/>
                        </form>
                    </div>
                </Modal>
            </section>
        );
    }
}
export default Search;

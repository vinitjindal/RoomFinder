import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Search extends Component {
  state={
    state:null,
    city:null,
  }
  handleSubmit=(e)=>{
    e.preventDefault();
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
                    <div>
                        <form onSubmit={ this.handlesubmit }>
                          <input type="text" id='state' placeholder="Enter state" onChange={ this.handleChange }/>
                          <input type="text" id='city' placeholder="Enter city" onChange={ this.handleChange }/>
                          <input type="submit" value=" submit "/>
                        </form>
                        <a href="javascript:void(0);" onClick={() => { this.props.closeSearch() }}>Close</a>
                    </div>
                </Modal>
            </section>
        );
    }
}

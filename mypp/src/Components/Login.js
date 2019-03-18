import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Login extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }*/
    componentDidMount(){
      console.log(this.props.state1);
    }

    render() {
        return (
                <Modal visible={this.props.state1 } width="600" height="500" effect="fadeInDown" onClickAway={() =>  this.props.closeLogin()  }>
                    <div>
                        <h1> Login As a Vendor.. </h1>
                        <form>
                          <input type="text" className='username' />
                          <input type="password"/>
                          <input type="button" value="SignIn"/>
                        </form>
                        <a href="javascript:void(0);" onClick={() => { this.props.closeLogin() }}>Close</a>
                    </div>
                </Modal>
        );
    }
}

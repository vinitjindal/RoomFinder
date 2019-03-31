import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './Login.css';


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
                <Modal visible={this.props.state1 } width="400" height="300" effect="fadeInDown" onClickAway={() =>  this.props.closeLogin()  }>
                    <div className='login'>
                        <h4> Login As a Vendor.. </h4>
                        <form>
                          <i className="fa fa-user"><input type="text" placeholder=" username " autofocus /></i>
                          <i className="fa fa-key"><input type="password" placeholder=" password "/></i>
                          <input type="button" value="Sign In"/>
                        </form>
                        <a href="#">Not Have Account Yet ? Sign Up..</a>
                     </div>
                </Modal>
        );
    }
}

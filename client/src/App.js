import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import FindHere from './Components/FindHere';
import Profile from './Components/Profile';



//import Login from './Components/Login';


class App extends Component {

  state={
    token:"",
  }

  changetoken=(token)=>{
    this.setState({
      token
    })
  alert("logIn succesfully!");

  }
  lougoutToken=(e)=>{
    this.setState({
      token:"",
    })
    alert("logout succesfully!");
   }
  render() {
    return (
         <BrowserRouter>
          <div className="App">
              <Navbar changetoken={ this.changetoken } />
              <Switch>

                <Route exact path='/' component={ Home }/>
                <Route path='/findhere' component={ FindHere }/>
                <Route path='/home/login' component={ Home }/>
                <Route path='/home/register' component={ Home }/>
                <Route path='/profile' component={() => <Profile token={ this.state.token } lougoutToken={ this.lougoutToken } />} />

               </Switch>
          </div>
        </BrowserRouter>
     );
  }
}

export default App;

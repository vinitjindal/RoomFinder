import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import FindHere from './Components/FindHere';
import Profile from './Components/Profile';



//import Login from './Components/Login';


class App extends Component {
 
  render() {
    return (
        <BrowserRouter>
          <div className="App" style = {{backgroundColor:"#"}}>
              <Navbar /> 
              <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/findhere' component={ FindHere }/>
                <Route path='/home/login' component={ Home }/>
                <Route path='/home/register' component={ Home }/>
                <Route path='/profile' component={ Profile } />
              </Switch> 
          </div>
      </BrowserRouter>
     );
  }
}

export default App;

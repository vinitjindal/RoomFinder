import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import FindHere from './Components/FindHere';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={ Home }/>
              <Route path='/findhere' component={ FindHere }/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

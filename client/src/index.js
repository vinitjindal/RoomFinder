import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';

const store = createStore(rootReducer);

// store.subscribe = () =>{
//     alert(store.getState().token);
//     localStorage.setItem('token', store.getState().token);
// }

store.subscribe(()=>{
    const token = store.getState().token;
    localStorage.setItem('token', JSON.stringify(token));
    if(token){
        let allProfile = document.querySelectorAll('#openProfile');
        let login = document.querySelectorAll('#login');
        let signUp = document.querySelectorAll('#signUp');
        [...allProfile].forEach(profile=>{
          profile.style.display = 'inline';
        });
        [...login].forEach(login=>{
          login.style.display = 'none';
        });
        [...signUp].forEach(signUp=>{
          signUp.style.display = 'none';
        })
    }else{
        let allProfile = document.querySelectorAll('#openProfile');
        let login = document.querySelectorAll('#login');
        let signUp = document.querySelectorAll('#signUp');
        [...allProfile].forEach(profile=>{
          profile.style.display = 'none';
        });
        [...login].forEach(login=>{
          login.style.display = 'inline';
        });
        [...signUp].forEach(signUp=>{
          signUp.style.display = 'inline';
        })
    }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

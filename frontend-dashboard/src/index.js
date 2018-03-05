import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'
//import router
import Routes from  './routes'

//Views
import Login from './containers/Login/LoginContainer'
import Register from './views/Pages/Register/'
import Session from './views/Pages/Session/'

// Containers
import Full from './containers/Full/'

//Configure Store
import configure from './configurestore'
//Initiate store
const initialState = {

};

const store = configure(initialState);
ReactDOM.render((
    <Provider store={store}>
        <Routes/>
    </Provider>
), document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
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

//Views
import Login from './containers/Login/LoginContainer'
import Register from './views/Pages/Register/'
import TutorsContainer from './containers/Tutors/TutorsContainer'

// Containers
import Full from './containers/Full/'

//Configure Store
import configure from './configurestore'
//Initiate store
const initialState = {
    tutors: [{id:0, name:'init'}]
};

const store = configure(initialState);
ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Switch>
            <Route exact path="/login" name="Login Page" component={Login}/>
            <Route exact path="/register" name="Register Page" component={Register}/>
            <Route exact path="/tutors" name="Tutors Page" component={TutorsContainer}/>
            <Route path="/" name="Home" component={Full}/>
        </Switch>
      </HashRouter>
    </Provider>
), document.getElementById('root'));

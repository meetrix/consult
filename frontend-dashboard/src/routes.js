import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

//Views
import Login from './containers/Login/LoginContainer'
import SignUpContainer from './containers/SignUp/SignUpContainer'
import TutorsContainer from './containers/Tutors/TutorsContainer'

import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Route/UnauthenticatedRoute";

// Containers
import Full from './containers/Full/'
export default() =>

<HashRouter>
  <Switch>
    <Route exact path="/login" name="Login Page" component={Login} />
    <Route exact path="/signup" name="Register Page" component={SignUpContainer} />
    <Route exact path="/tutors" name="Tutors Page" component={TutorsContainer} />
    <Route path="/" name="Home" component={Full} />
  </Switch>
</HashRouter>

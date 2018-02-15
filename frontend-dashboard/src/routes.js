import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
//Views
import Login from './containers/Login/LoginContainer'
import SignUpContainer from './containers/SignUp/SignUpContainer'
import Consultants from './views/Pages/Consultant/Consultants'
//TestComponet
import Test from './views/Pages/Test/Test'
import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Route/UnauthenticatedRoute";


// Containers
import Full from './containers/Full/'
import Calendar from "./components/Calendar/Calendar";
import BaseBox from "./components/BaseBox/BaseBox";
import ConsultantLive from "./components/Consultants/ConsultantLive";

export default() =>

<HashRouter>
  <Switch>
    <Route exact path="/login" name="Login Page" component={Login} />
    <Route exact path="/signup" name="Register Page" component={SignUpContainer} />
    <Route exact path="/consultants" name="Consultants Page" component={Consultants} />
    <Route exact path="/test" name="Test Component" component={Test} />
    <Route exact path="/calendar" name="Calendar Component" component={Calendar} />
    <Route exact path="/basebox" name="BaseBox Component" component={BaseBox} />
    <Route exact path="/consultantlive" name="ConsultantLive Component" component={ConsultantLive} />
    <Route path="/" name="Home" component={Full} />
  </Switch>
</HashRouter>

import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
//Views
import Login from './containers/Login/LoginContainer';
import SignUpContainer from './containers/SignUp/SignUpContainer';
import Consultants from './views/Pages/Consultant/Consultants';
import LandingPage from './views/Pages/Landing';
//TestComponet
import Test from './views/Pages/Test/Test'
import Life from './views/Pages/Test/LifycycleTest'
import AuthenticatedRoute from "./components/Route/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/Route/UnauthenticatedRoute";


// Containers
import Full from './containers/Full/'
import Calendar from "./components/Calendar/Calendar";
import BaseBox from "./components/BaseBox/BaseBox";
import ConsultantLive from "./components/Consultants/ConsultantLive";

import Spinner from './components/Spinners/Spinners'
export default() =>
<HashRouter>
  <Switch>
    <Route exact path="/login" name="Login Page" component={Login} />
    <Route exact path="/signup" name="Register Page" component={SignUpContainer} />
    <Route exact path="/consultants" name="Consultants Page" component={Consultants} />
    <Route exact path="/test" name="Test Component" component={Test} />
    <Route exact path="/basebox" name="BaseBox Component" component={BaseBox} />
    <Route exact path="/consultantlive" name="ConsultantLive Component" component={ConsultantLive} />
    <Route path="/dashboard" name="Home" component={Full} />
    <Route exact path="/" name="Landing Page" component={LandingPage} />
  </Switch>
</HashRouter>

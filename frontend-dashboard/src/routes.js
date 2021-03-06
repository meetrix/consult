import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Containers
import MainContainer from './containers/MainContainer/MainContainer';
import Consultants from './views/Pages/Consultant/Consultants';
import LandingPage from './views/Pages/Landing';
import BaseBox from './components/BaseBox/BaseBox';
import ConsultantLive from './components/Consultants/ConsultantLive';

// view
import LoginPage from './views/Pages/Login/Login';
// TestComponet
import Test from './views/Pages/Test/Test';

export default() =>
  (
    <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login Page" component={LoginPage} />
        <Route exact path="/consultants" name="Consultants Page" component={Consultants} />
        <Route exact path="/test" name="Test Component" component={Test} />
        <Route exact path="/basebox" name="BaseBox Component" component={BaseBox} />
        <Route exact path="/consultantlive" name="ConsultantLive Component" component={ConsultantLive} />
        <Route path="/dashboard" name="Home" component={MainContainer} />
        <Route exact path="/" name="Landing Page" component={LandingPage} />
      </Switch>
    </HashRouter>
  );

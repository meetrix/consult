import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Container} from 'reactstrap';

//core components
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

//containers
import SchedulerContainer from '../../containers/SchedulerContainer/SchedulerContainer';
import AdminPanelContainer from '../../containers/AdminPanelContainer/AdminPanelContainer';
import DashBoardContainer from '../DashBoardContainer/DashBoardContainer';
import UserProfileContainer from '../UserContainer/UserProfileContainer'
import  UserAccountContainer from '../UserContainer/UserAccountContainer'
import SessionListContainer from '../../components/Session/session_list_container'

class MainView extends Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.actions.getAuthUserInitData();
  }

  render() {
    if(this.props.auth.user.id!==undefined) {
      return (
        <div className="app">
          <Header {...this.props}/>
          <div className="app-body">
            <Sidebar {...this.props}/>
            <main className="main">
              <Breadcrumb/>
              <Container fluid>
                <Switch>
                  <Route path="/dashboard/schedule" name="Schedule" component={SchedulerContainer}/>
                  <Route path="/dashboard/sessions" name="Session" component={SessionListContainer}/>
                  <Route path="/dashboard/admin_panel" name="AdminPanel" component={AdminPanelContainer}/>
                  <Route exact path="/dashboard/profile" name="Test Component" component={UserProfileContainer}/>
                  <Route exact path="/dashboard/billing" name="Test Component" component={UserAccountContainer}/>
                  <Route path="/dashboard" name="Dashboard Container" component={DashBoardContainer}/>

                </Switch>
              </Container>
            </main>
            <Aside {...this.props} />
          </div>
          <Footer
            applicationName="Consult"
            organization="Meetrix"
            copyrightYear="2018"
            poweredByText="Meetrix"
          />

        </div>
      );
    }
    else {
      return(null);
    }
  }
}

export default MainView;

import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import SchedulerContainer from '../../containers/SchedulerContainer/SchedulerContainer';

import Dashboard from '../../views/Dashboard/';
import Profile from '../UserContainer/UserProfileContainer';
import  Account from '../UserContainer/UserAccountContainer';
import SessionListContainer from '../../components/Session/session_list_container';

import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant';

import {actionCreatorFactory} from '../../actions/actionCreator';
import { Widget } from 'react-chat-widget';

const mapStateToProps=(state)=>{
    return {
        user: {
            _id:undefined,
            firstname:'supuh',
            lastname:'mad',
            username: 'supun',
            email: 'supun.12@cse.mrt.ac.lk',
            image:'http://localhost:8080/img/avatars/3.jpg',
            roles:'consultee'
        },
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{signup:bindActionCreators(actionCreatorFactory(KEYS.SIGNUP, ATTRS.PAYLOAD),dispatch)
    }
})

class Full extends Component {

    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log("Full")
        console.log(this.props)
    }
  handleNewUserMessage (newMessage)  {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
  render() {
    return (
      <div className="app">
        <Header {...this.props}/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                  <Route path="/dashboard/schedule" name="Schedule" component={SchedulerContainer}/>
                  <Route path="/dashboard/sessions" name="Session" component={SessionListContainer}/>
                  <Route exact path="/dashboard/profile" name="Test Component" component={Profile} />
                  <Route exact path="/dashboard/billing" name="Test Component" component={Account} />
                  <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
              </Switch>
              <Widget
                showCloseButton={true}
                badge= {3}
                handleNewUserMessage={this.handleNewUserMessage}
              />
            </Container>
          </main>
          <Aside />
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
}

export default connect(mapStateToProps,mapDispatchToProps)(Full);

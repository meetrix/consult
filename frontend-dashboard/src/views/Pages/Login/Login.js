import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import Amplify,{API, Auth} from 'aws-amplify';
import {Authenticator, withAuthenticator,Greetings,RequireNewPassword,ConfirmSignIn, ConfirmSignUp, ForgotPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreateStoreUpdateFactory} from '../../../actions/actionCreator';
import {REDUX_ACTIONS as ACTION_TYPE,ACTION_ATTR as ATTRS }from '../../../constants/constant';

//Custom Sign Up Ui

import CustomSignIn from '../../../components/AutheticationForm/CustomSignIn'
import CustomSignUp from '../../../components/AutheticationForm/CustomSignUp'
import CustomSignUpConfirmation from '../../../components/AutheticationForm/CustomSignUpConfirmation'
import CustomForgetPassword from '../../../components/AutheticationForm/CustomForgetPassword'
Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-west-2:5776cf11-b9de-43fb-ae73-1430f03a8ccc',
        // REQUIRED - Amazon Cognito Region
        region: 'us-west-2',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-west-2_bjkyFObpw',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '35fphtvuuravdlpm0veleocv79',
    }
    ,
    API: {
        endpoints: [
            {
                name: "PetStore",
                endpoint: "https://f9u26pe19l.execute-api.us-west-2.amazonaws.com/beta",

            },
            {
              name: "ConsultantApi",
              endpoint: "https://zr25rl45gk.execute-api.us-west-2.amazonaws.com/dev",

            }
        ]
    }
});

class Login extends Component {


    constructor(props){
        super(props)
        this.state= {
          signedIn:false
        }
    }
    componentWillMount(){
      Auth.signOut()
      //current auth user
      this.setAuthUser();
      //check custom attribute is set
      //this.checkUserCustomAttributes()
      console.log("before render")
      //this.props.actions.setAuthUser();
    }

    async setAuthUser(){
      let auth = await Auth.currentUserInfo();
      this.props.actions.setAuthUser(auth);
    }

    async checkUserCustomAttributes(){
      let user = await Auth.currentAuthenticatedUser();
      let result = await Auth.updateUserAttributes(user, {
        'custom:role': 'student',
        'custom:tenant': 'siplo'
      });
      console.log(user)
      console.log(await Auth.currentUserInfo())

    }

  handleAuthStateChange(state) {
    if (state === 'signedIn') { this.setState({signedIn:true})}
  }

    render() {

          if(this.state.signedIn){
            return <Redirect to="/dashboard"/>
          }
          return(
              <Col>

                  {/*//profile ? <div><Redirect to="/dashboard/profile"/></div> : <Redirect to="/dashboard"/>*/}
                <Authenticator hideDefault={true} onStateChange={this.handleAuthStateChange.bind(this)}>
                  <CustomSignIn/>
                  <CustomSignUp/>
                  <CustomSignUpConfirmation/>
                  <CustomForgetPassword/>
                </Authenticator>

              </Col>

          );
    }
}

function mapStateToProps(state){
  return {
    auth:state.auth ,

  }

}
const mapDispatchToProps = (dispatch) => ({
  actions:{
    setAuthUser:bindActionCreators(actionCreateStoreUpdateFactory(ACTION_TYPE.SET_AUTH_USER, ATTRS.PAYLOAD),dispatch),
  }
})

// export default withAuthenticator(connect(mapStateToProps, mapDispatchToProps)(Login),false,[
//   <MySignIn hide={false}/>,
//   <ConfirmSignIn/>,
//   <MySignUp hide={true} />,
//   <ConfirmSignUp/>,
//   <VerifyContact/>,
//   <ForgotPassword/>
// ]);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

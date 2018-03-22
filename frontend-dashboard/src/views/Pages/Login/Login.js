import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import Amplify,{API, Auth} from 'aws-amplify';
import {Authenticator, withAuthenticator,Greetings,RequireNewPassword,ConfirmSignIn, ConfirmSignUp, ForgotPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actionCreatorAwsAmplifyFactory,actionCreateApiGateWayFactory} from '../../../actions/actionCreator';
import {ACTION_KEY as AWS_AMPLIFY_KEYS,ACTION_ATTR as AWS_AMPLIFY_ATTRS }from '../../../constants/apiAmlifyConstant';
import {ACTION_KEY as AWS_API_GATEWAY_KEYS,ACTION_ATTR as AWS_API_GATEWAY_ATTRS} from '../../../constants/apiGateWayConstant'

//Custom Sign Up Ui

import CustomSignIn from '../../../components/AutheticationForm/CustomSignIn'
import CustomSignUp from '../../../components/AutheticationForm/CustomSignUp'
import CustomConfirmSignUp from '../../../components/AutheticationForm/CustomConfirmSignUp'
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
      //Auth.signOut()
      //current auth user
      //this.setAuthUser();
      //check custom attribute is set
      //this.checkUserCustomAttributes()
      // console.log("before render")
      this.props.actions.getAuthUser();
      this.props.actions.getAuthUserInitData();

    }

    async setAuthUser(){
      let auth = await Auth.currentUserInfo();
      this.props.actions.setAuthUser(auth);
    }



    render() {


          return(
              <Col>

                  <Redirect to="/dashboard"/>


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
    getAuthUser:bindActionCreators(actionCreatorAwsAmplifyFactory(AWS_AMPLIFY_KEYS.GET_AUTH_USER, AWS_AMPLIFY_ATTRS.PAYLOAD),dispatch),
    getAuthUserInitData:bindActionCreators(actionCreateApiGateWayFactory(AWS_API_GATEWAY_KEYS.GET_AUTH_USER_INIT_DATA, AWS_API_GATEWAY_ATTRS.PAYLOAD),dispatch),
    //getAuthUser:() => {dispatch({type:ACTION_TYPE.GET_AUTH_USER})}
  }
})

export default withAuthenticator(connect(mapStateToProps, mapDispatchToProps)(Login),false,[
  <CustomSignIn/>,
  <CustomSignUp/>,
  <CustomConfirmSignUp/>,
  <CustomForgetPassword/>,
  <VerifyContact/>,
]);

//export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {Amplify, A} from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

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
});


class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            auth:this.props.auth,
            signup:false
        }
        // firebase.initializeApp(config.firebase_config);

        this.google_siginin = this.google_siginin.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.signup = this.signup.bind(this);

    }
    setUsername(username){

        this.setState({
            username: username
        });

    }
    setPassword(password){
        this.setState({
            password: password
        });
    }
    login() {
        this.props.actions.login({username:this.state.username,password:this.state.password});
    }
    componentWillMount(){
    }
    google_siginin(props){

        console.log("google siginin");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(token);
            //TODO add user to store
            console.log(user);

            props.history.push('/')

          // ...
        }).catch(function(error) {
          // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              console.log(errorMessage)
          // ...
        });


    }
    signup(){
        this.setState({
            signup: true
        });

    }
  render() {
        return(
            <Redirect to="/dashboard"/>
        );
  }
}

export default withAuthenticator(Login);

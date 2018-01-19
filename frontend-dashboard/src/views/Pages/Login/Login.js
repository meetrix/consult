import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import firebase from 'firebase';
import {HashRouter, Route, Switch,withRouter} from 'react-router-dom';
import GoogleButton from 'react-google-button'

const config = require('../../../config.json');

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            auth:this.props.auth
        }
        firebase.initializeApp(config.firebase_config);

        this.google_siginin = this.google_siginin.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);


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

  render() {
    if(this.props.auth[0].isLogin){

        console.log("user login")
        this.props.history.push('/')
    }
    else {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <h1>Login</h1>
                                        <p className="text-muted">Sign In to your account</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                                            <Input onChange={e => this.setUsername(e.target.value)} type="text"
                                                   placeholder="Username"/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                                            <Input onChange={e => this.setPassword(e.target.value)} type="password"
                                                   placeholder="Password"/>
                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4" onClick={ () => this.login()}>Login</Button>
                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <Button color="link" className="px-0">Forgot password?</Button>
                                            </Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col xs="12" sm="6">
                                                <Button className="btn-facebook" block><span>facebook</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">
                                                <Button className="btn-twitter" block><span>twitter</span></Button>
                                            </Col>
                                            <Col xs="12" sm="6">

                                                <Button className="btn-google-plus" block
                                                        onClick={ () => this.google_siginin(this.props)}><span>google</span></Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: 44 + '%'}}>
                                    <CardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut
                                                labore et dolore magna aliqua.</p>
                                            <Button color="primary" className="mt-3" active>Register Now!</Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
  }
}

export default Login;

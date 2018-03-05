import React, {Component} from 'react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import {Container, Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class Register extends Component {

  constructor(props){
      super(props);



      this.setName = this.setName.bind(this);
      this.setUserName = this.setUserName.bind(this);
      this.setEmail = this.setEmail.bind(this)
      this.setPassword = this.setPassword.bind(this);
      this.setReEnterPassword = this.setReEnterPassword.bind(this);
      this.signup = this.signup.bind(this);
  }

  setName(name){
    this.setState({name:name});
  }
  setUserName(username){
      this.setState({username:username});
  }
  setEmail(email){
      this.setState({email:email});
  }
  setPassword(password){
      this.setState({password:password});
  }
  setReEnterPassword(repassword){
      this.setState({repassword:repassword});
  }

  signup(){
      if(this.state.password===this.state.repassword){
          this.props.actions.signup({name:this.state.name,username:this.state.username,email:this.state.email,password:this.state.password});
      }

  }
  render() {

          return (
              <div className="app flex-row align-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md="6">
                      <Card className="mx-4">
                        <CardBody className="p-4">
                          <h1>Register</h1>
                          <p className="text-muted">Create your account</p>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend"><i className="icon-user"></i></InputGroupAddon>
                            <Input type="text" placeholder="Name" onChange={e => this.setName(e.target.value)}/>
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend"><i className="icon-user"></i></InputGroupAddon>
                            <Input type="text" placeholder="Username" onChange={e => this.setUserName(e.target.value)}/>
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input type="text" placeholder="Email" onChange={e => this.setEmail(e.target.value)}/>
                          </InputGroup>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend"><i className="icon-lock"></i></InputGroupAddon>
                            <Input type="password" placeholder="Password"
                                   onChange={e => this.setPassword(e.target.value)}/>
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend"><i className="icon-lock"></i></InputGroupAddon>
                            <Input type="password" placeholder="Repeat password"
                                   onChange={e => this.setReEnterPassword(e.target.value)}/>
                          </InputGroup>
                          <Button color="success" block onClick={() => this.signup()}>Create Account</Button>
                        </CardBody>
                        <CardFooter className="p-4">
                          <Row>
                            <Col xs="12" sm="6">
                              <Button className="btn-facebook" block><span>facebook</span></Button>
                            </Col>
                            <Col xs="12" sm="6">
                              <Button className="btn-twitter" block><span>twitter</span></Button>
                            </Col>
                          </Row>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </div>
          );


  }



}

export default Register;

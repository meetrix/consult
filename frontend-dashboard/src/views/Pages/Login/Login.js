import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { withAuthenticator, VerifyContact } from 'aws-amplify-react';

// aws cognito configuration
import { awsExports } from '../../../../aws_exports';

// Custom Sign Up Ui
import CustomSignIn from '../../../components/AutheticationForm/CustomSignIn';
import CustomSignUp from '../../../components/AutheticationForm/CustomSignUp';
import CustomConfirmSignUp from '../../../components/AutheticationForm/CustomConfirmSignUp';
import CustomForgetPassword from '../../../components/AutheticationForm/CustomForgetPassword';

Amplify.configure(awsExports);

class Login extends Component {
  render() {
    return (
      <Col>
        <Redirect to="/dashboard" />
      </Col>
    );
  }
}
export default withAuthenticator(Login, false, [
  <CustomSignIn />,
  <CustomSignUp />,
  <CustomConfirmSignUp />,
  <CustomForgetPassword />,
  <VerifyContact />,
]);

/**
 * Created by supun on 14/03/18.
 */
import { Auth, I18n, Logger, JS } from 'aws-amplify';
import React, { Component } from 'react';
import { ForgotPassword } from 'aws-amplify-react';

import {
  FormSection,
  SectionHeader,
  SectionBody,
  SectionFooter,
  InputRow,
  ButtonRow,
  Link,
} from '../../../node_modules/aws-amplify-react/dist/AmplifyUI';


import { FederatedButtons } from '../../../node_modules/aws-amplify-react/dist/Auth/FederatedSignIn';

const logger = new Logger('ForgotPassword');

export default class CustomForgetPassword extends ForgotPassword {
  send() {
    const { username } = this.inputs;
    Auth.forgotPassword(username)
      .then((data) => {
        logger.debug(data);
        this.setState({ delivery: data.CodeDeliveryDetails });
      })
      .catch(err => this.error(err));
  }

  submit() {
    const { username, code, password } = this.inputs;
    Auth.forgotPasswordSubmit(username, code, password)
      .then((data) => {
        logger.debug(data);
        this.changeState('signIn');
        this.setState({ delivery: null });
      })
      .catch(err => this.error(err));
  }
  /* eslint no-undef:0 */
  sendView() {
    const theme = this.props.theme || AmplifyTheme;
    return (
      <div>
        <InputRow
          autoFocus
          placeholder={I18n.get('Username')}
          theme={theme}
          key="username"
          name="username"
          onChange={this.handleInputChange}
        />
        <ButtonRow theme={theme} onClick={this.send}>
          {I18n.get('Send Code')}
        </ButtonRow>
      </div>
    );
  }

  submitView() {
    const theme = this.props.theme || AmplifyTheme;
    return (
      <div>
        <InputRow
          placeholder={I18n.get('Code')}
          theme={theme}
          key="code"
          name="code"
          onChange={this.handleInputChange}
        />
        <InputRow
          placeholder={I18n.get('New Password')}
          theme={theme}
          type="password"
          key="password"
          name="password"
          onChange={this.handleInputChange}
        />
        <ButtonRow theme={theme} onClick={this.submit}>
          {I18n.get('Submit')}
        </ButtonRow>
      </div>
    );
  }

  render() {
    /* eslint no-unused-vars:0  */
    const {
      authState, hide, federated, onStateChange,
    } = this.props;
    const { theme } = this.props;
    console.log('CustomSignUp');
    console.log(authState);
    if (['signUp', 'confirmSignUp', 'signedIn', 'signIn'].includes(authState)) {
      return null;
    }
    return (
      /* eslint jsx-a11y/anchor-is-valid:0  */
      <FormSection theme={theme}>
        <SectionHeader theme={theme}>{I18n.get('Forgot Password')}</SectionHeader>
        <SectionBody>
          { this.state.delivery ? this.submitView() : this.sendView() }
        </SectionBody>
        <SectionFooter theme={theme}>
          <Link theme={theme} onClick={() => this.changeState('signIn')}>
            {I18n.get('Back to Sign In')}
          </Link>
        </SectionFooter>
      </FormSection>
    );
  }
}

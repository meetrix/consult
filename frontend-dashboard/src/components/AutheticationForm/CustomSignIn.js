/**
 * Created by supun on 14/03/18.
 */
import { Auth, I18n, Logger, JS } from 'aws-amplify';
import React, { Component } from 'react';
import { SignIn } from 'aws-amplify-react';

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

const logger = new Logger('SignIn');

export default class CustomSignIn extends SignIn {
  signIn() {
    const { username, password } = this.inputs;
    Auth.signIn(username, password)
      .then((user) => {
        logger.debug(user);
        if (user.challengeName === 'SMS_MFA' || user.challengeName === 'SOFTWARE_TOKEN_MFA') {
          logger.debug(`confirm user with ${user.challengeName}`);
          // this.changeState('confirmSignIn', user);
          this.changeState('signedIn', user);
        } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          logger.debug('require new password', user.challengeParam);
          this.changeState('requireNewPassword', user);
        } else if (user.challengeName === 'MFA_SETUP') {
          logger.debug('TOTP setup', user.challengeParam);
          this.changeState('TOTPSetup', user);
        } else {
          this.checkContact(user);
        }
      })
      .catch((err) => {
        this.error(err);
      });
  }

  render() {
    /* eslint no-unused-vars:0  */
    const {
      authState, hide, federated, onStateChange,
    } = this.props;
    const { theme } = this.props;
    console.log('CustomSignUp');
    console.log(authState);
    if (['signUp', 'confirmSignUp', 'signedIn', 'forgotPassword'].includes(authState)) {
      return null;
    }
    return (
      /* eslint jsx-a11y/anchor-is-valid:0  */
      <FormSection theme={theme}>
        <SectionHeader theme={theme}>{I18n.get('Sign In Account')}</SectionHeader>
        <SectionBody theme={theme}>
          <InputRow
            autoFocus
            placeholder={I18n.get('Username')}
            theme={theme}
            key="username"
            name="username"
            onChange={this.handleInputChange}
          />
          <InputRow
            placeholder={I18n.get('Password')}
            theme={theme}
            key="password"
            type="password"
            name="password"
            onChange={this.handleInputChange}
          />
          <ButtonRow theme={theme} onClick={this.signIn}>
            {I18n.get('Sign In')}
          </ButtonRow>
          <FederatedButtons
            federated={federated}
            theme={theme}
            authState={authState}
            onStateChange={onStateChange}
          />
        </SectionBody>
        <SectionFooter theme={theme}>
          <div style={theme.col6}>
            <Link theme={theme} onClick={() => this.changeState('forgotPassword')}>
              {I18n.get('Forgot Password')}
            </Link>
          </div>
          <div style={Object.assign({ textAlign: 'right' }, theme.col6)}>
            <Link theme={theme} onClick={() => this.changeState('signUp')}>
              {I18n.get('Sign Up')}
            </Link>
          </div>
        </SectionFooter>
      </FormSection>
    );
  }
}


/**
 * Created by supun on 14/03/18.
 */
import React, { Component } from 'react';
import {  ConfirmSignUp } from 'aws-amplify-react';

import {
  FormSection,
  SectionHeader,
  SectionBody,
  SectionFooter,
  InputRow,
  ActionRow,
  MessageRow,
  Button,
  Space,
  Link
} from '../../../node_modules/aws-amplify-react/dist/AmplifyUI';

import { Auth, I18n, Logger, JS } from 'aws-amplify';
export default class CustomConfirmSignUp extends ConfirmSignUp {

  confirm() {
    const username = this.usernameFromAuthData() || this.inputs.username;
    const { code } = this.inputs;
    Auth.confirmSignUp(username, code)
      .then(() => this.changeState('signedUp'))
      .catch(err => this.error(err));
  }

  render(){
    const { authState, hide, federated, onStateChange } = this.props;
    const theme = this.props.theme;
    const username = this.usernameFromAuthData();
    if (['signIn','signUp','signedIn','forgotPassword'].includes(authState)) { return null;}
    return (
      <FormSection theme={theme}>
        <SectionHeader theme={theme}>
          {I18n.get('Confirm')} {I18n.get('Sign Up')}
        </SectionHeader>
        <SectionBody theme={theme}>
          { username? <MessageRow>{username}</MessageRow>
            : <InputRow
              placeholder={I18n.get('Username')}
              theme={theme}
              key="username"
              name="username"
              onChange={this.handleInputChange}
            />
          }
          <InputRow
            autoFocus
            placeholder={I18n.get('Code')}
            theme={theme}
            key="code"
            name="code"
            onChange={this.handleInputChange}
          />
          <ActionRow theme={theme}>
            <Button theme={theme} onClick={this.confirm}>
              {I18n.get('Confirm')}
            </Button>
            <Space theme={theme} />
            <Button theme={theme} onClick={this.resend}>
              {I18n.get('Resend Code')}
            </Button>
          </ActionRow>
        </SectionBody>
        <SectionFooter theme={theme}>
          <Link theme={theme} onClick={() => this.changeState('signIn')}>
            {I18n.get('Back to Sign In')}
          </Link>
        </SectionFooter>
      </FormSection>
    )


  }
}

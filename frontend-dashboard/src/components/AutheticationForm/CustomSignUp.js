/**
 * Created by supun on 13/03/18.
 */
import React, { Component } from "react";
import { SignUp } from "aws-amplify-react";


import {
	FormSection,
	SectionHeader,
	SectionBody,
	SectionFooter,
	InputRow,
	ButtonRow,
	Link,
	RadioRow,
	Radio,
} from "../../../node_modules/aws-amplify-react/dist/AmplifyUI";

import { Auth, I18n, Logger, JS } from "aws-amplify";

export default class CustomSignUp extends SignUp {
	signUp() {
		const {
			username, password, email, phone_number, role,
		} = this.inputs;
		let mainRole;
		if (role == "student") {
			mainRole = "consultee";
		} else if (role == "teacher") {
			mainRole = "consultant";
		}
		Auth.signUp({
			username,
			password,
			attributes: {
				email, // optional
				phone_number, // optional - E.164 number convention
				// other custom attributes
				"custom:tenant": "siplo",
				"custom:mainRole": mainRole,
				"custom:subRole": role,
			},
			validationData: [], // optional
		})
			.then(() => this.changeState("confirmSignUp", username))
			.catch(err => this.error(err));
	}
	async checkUserCustomAttributes() {
		const user = await Auth.currentAuthenticatedUser();
		const result = await Auth.updateUserAttributes(user, {
			"custom:role": "student",
			"custom:tenant": "siplo",
		});
		console.log(user);
		console.log(await Auth.currentUserInfo());
	}

	handleRole(e) {
		this.inputs.role = e.target.value;
	}
	render() {
		const {
			authState, hide, federated, onStateChange,
		} = this.props;
		const theme = this.props.theme;
		console.log("CustomSignUp");
		console.log(authState);
		const { teacher, student } = this.inputs;

		if (["signIn", "confirmSignUp", "signedIn", "forgotPassword"].includes(authState)) { return null; }

		return (
  <FormSection theme={theme}>
  <SectionHeader theme={theme}>{I18n.get("Sign Up Account")}</SectionHeader>
  <SectionBody theme={theme}>
					<InputRow
						autoFocus
						placeholder={I18n.get("Username")}
						theme={theme}
      key="username"
      name="username"
						onChange={this.handleInputChange}
    />
      <InputRow
						placeholder={I18n.get("Password")}
      theme={theme}
      type="password"
      key="password"
						name="password"
      onChange={this.handleInputChange}
    />
      <InputRow
  placeholder={I18n.get("Email")}
  theme={theme}
  key="email"
  name="email"
						onChange={this.handleInputChange}
					/>
      <InputRow
						placeholder={I18n.get("Phone Number")}
						theme={theme}
  key="phone_number"
  name="phone_number"
						onChange={this.handleInputChange}
					/>
					<RadioRow
      placeholder={I18n.get("Student")}
						theme={theme}
      key="student"
						name="role"
      value="student"
      onChange={this.handleRole.bind(this)}
    />
					<RadioRow
      placeholder={I18n.get("Teacher")}
						theme={theme}
						key="teacher"
      name="role"
      value="teacher"
						onChange={this.handleRole.bind(this)}
    />


      <ButtonRow onClick={this.signUp} theme={theme}>
  {I18n.get("Sign Up")}
					</ButtonRow>
				</SectionBody>
				<SectionFooter theme={theme}>
      <div style={theme.col6}>
						<Link theme={theme} onClick={() => this.changeState("confirmSignUp")}>
							{I18n.get("Confirm a Code")}
        </Link>
					</div>
      <div style={Object.assign({ textAlign: "right" }, theme.col6)}>
  <Link theme={theme} onClick={() => this.changeState("signIn")}>
  {I18n.get("Sign In")}
						</Link>
					</div>
    </SectionFooter>
			</FormSection>
		);
	}
}


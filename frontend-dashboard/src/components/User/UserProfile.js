/**
 * Created by supun on 23/02/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

class UserProfile extends Component {
  constructor(props) {
    super(props);


    this.state = {
      collapse: true,
      firstName: this.props.user.firstName || '',
      lastName: this.props.user.lastName || '',
      address: this.props.user.address || '',
    };
    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  _handleSubmit() {
    // console.log("id: "+this.props.user.initData.id);
    this.props.actions.updateProfileInfo({
      id: this.props.user.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
    });
    // console.log(this.state.user)
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { target: name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>

          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>{this.props.user.firstName}</strong>
                {/* <small> Form</small> */}
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    type="text"
                    id="first-name"
                    name="firstName"
                    onChange={this.handleInputChange}
                    defaultValue={this.props.user.firstName}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input type="text" id="last-name" name="lastName" onChange={this.handleInputChange} defaultValue={this.props.user.lastName} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="first-name">Role</Label>
                  <Input plaintext>{this.props.user.role}</Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input plaintext>{this.props.user.email}</Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="address">Address</Label>
                  <Input type="text" id="address" name="address" onChange={this.handleInputChange} defaultValue={this.props.user.address} />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Consultees</strong>
                {/* <small> Form</small> */}
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="school">School</Label>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="district">District</Label>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="stream">Stream</Label>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <FormGroup row />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <FormGroup row>
                  <Col md="3">
                    <Button type="submit" size="sm" color="primary" onClick={this._handleSubmit}><i
                      className="fa fa-dot-circle-o"
                    />Update Profile
                    </Button>
                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban" /> Reset</Button>
                  </Col>

                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    username: PropTypes.string,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    district: PropTypes.string.isRequired,
    stream: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.shape.isRequired,
};

export default UserProfile;

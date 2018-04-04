import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, DropdownItem, DropdownMenu, Dropdown, DropdownToggle } from 'reactstrap';
import DatePicker from 'react-datepicker';
import ConsulteeSuggest from '../AutoSuggest/ConsulteeSuggest';

class ScheduleForm extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };

    this.handleDropdownClick = this.handleDropdownClick.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  handleDropdownClick(id, firstName, lastName, event) {
    this.props.actions.setConsultees({
      id,
      firstName,
      lastName,
    });
  }

  render() {
    console.log(`relatedUsers:22 ${this.props.relatedUsers[0].firstName}`);
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Title</Label>
          <Input type="textarea" name="text" id="exampleText" onChange={this.props.onTitleChange} value={this.props.title} />
        </FormGroup>
        <Label for="exampleDate">Start</Label>
        <DatePicker selected={this.props.start} onChange={this.props.handleStartDateChange} showTimeSelect timeFormat="HH:mm" dateFormat="LLL" />
        <Label for="exampleDate">End</Label>
        <DatePicker selected={this.props.end} onChange={this.props.handleEndDateChange} showTimeSelect timeFormat="HH:mm" dateFormat="LLL" />
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
        </FormGroup>
        <FormGroup>
          <Label>Select Student</Label>
          <ConsulteeSuggest onConsulteeChange={this.props.onConsulteeChange} relatedUsers={this.props.relatedUsers} />
        </FormGroup>
        <FormGroup>
          <Label>Select Student</Label>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.props.consultees.firstName}
            </DropdownToggle>
            <DropdownMenu>
              {this.props.relatedUsers.map((relatedUser, index) => (<DropdownItem key={index} onClick={this.handleDropdownClick.bind(this, relatedUser.id, relatedUser.firstName, relatedUser.lastName)}>{relatedUser.firstName}</DropdownItem>), this)}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onChange={this.props.onBookChange} />
            Booked
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

export default ScheduleForm;

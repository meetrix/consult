import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, DropdownItem, DropdownMenu, Dropdown, DropdownToggle } from 'reactstrap';
import PropTypes from 'prop-types';
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

  handleDropdownClick(id, firstName, lastName) {
    this.props.actions.setConsultees({
      id,
      firstName,
      lastName,
    });
  }

  render() {
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
          <ConsulteeSuggest
            onConsulteeChange={this.props.onConsulteeChange}
            relatedUsers={this.props.relatedUsers}
          />
        </FormGroup>
        <FormGroup>
          <Label>Select Student</Label>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {this.props.consultees.firstName}
            </DropdownToggle>
            <DropdownMenu>
              {this.props.relatedUsers.map((relatedUser, index) => (
                <DropdownItem
                /* eslint react/no-array-index-key :0 */
                  key={index}
                  onClick={
                    this.handleDropdownClick(
                    relatedUser.id,
                      relatedUser.firstName,
                      relatedUser.lastName,
                    )}
                >
                  {relatedUser.firstName}
                </DropdownItem>
              ), this)}
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
ScheduleForm.propTypes = {
  start: PropTypes.string.isRequired,
  relatedUsers: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  consultees: PropTypes.shape().isRequired,
  actions: PropTypes.shape().isRequired,
  onBookChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
  onConsulteeChange: PropTypes.func.isRequired,
};
export default ScheduleForm;

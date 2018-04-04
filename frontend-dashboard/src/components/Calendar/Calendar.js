import 'react-datepicker/dist/react-datepicker.css';
// import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ScheduleForm from '../Form/schedule_form';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      start: 'NAN',
      end: 'NAN',
      title: 'Title',
      consultee: 'NAN',
      editing: false,
      booked: false,
      id: null,
    };

    this.toggle = this.toggle.bind(this);
    this.setPopupText = this.setPopupText.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onClickForm = this.onClickForm.bind(this);
    this.editForm = this.editForm.bind(this);
    this.toggleEditingFalse = this.toggleEditingFalse.bind(this);
    this.toggleEditingTrue = this.toggleEditingTrue.bind(this);
    this.onDeleteEvent = this.onDeleteEvent.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBookChange = this.onBookChange.bind(this);
    this.onConsulteeChange = this.onConsulteeChange.bind(this);
  }

  componentDidMount() {
    this.props.actions.getScheduleEvents({
      id: this.props.user.id,
    });
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  onBookChange(event) {
    if (event.target.value === 'on') this.setState({ booked: true });
    else this.setState({ booked: false });
    // this.setState({booked:event.target.value});
  }
  onConsulteeChange(newValue) {
    this.setState({ consultee: newValue });
  }
  onDeleteEvent() {
    this.props.actions.deleteScheduleEvents({
      id: this.state.id,
    });
    this.toggle();
    this.toggleEditingFalse();
  }
  onClickForm() {
    if (this.state.editing) {
      this.props.actions.updateScheduleEvents({
        id: this.state.id,
        start: this.state.start.toDate(),
        end: this.state.end.toDate(),
        title: this.state.title,
        consultee: this.state.consultee,
        booked: this.state.booked,
      });
    } else {
      /* eslint max-len:0 */
      this.props.actions.postScheduleEvents({
        createdBy: { id: this.props.user.id, firstName: this.props.user.firstName, lastName: this.props.user.lastName },
        start: this.state.start.toDate(),
        end: this.state.end.toDate(),
        title: this.state.title,
        consultee: this.props.consultees,
        booked: this.state.booked,
        consultant: { id: this.props.user.id, firstName: this.props.user.firstName, lastName: this.props.user.lastName },
      });
    }

    this.toggle();
    this.toggleEditingFalse();
  }
  setPopupText(slotinfo) {
    this.setState({
      start: moment(slotinfo.start),
      end: moment(slotinfo.end),
    });
    this.toggle();
  }

  editForm(event) {
    this.setState({
      id: event.id,
      start: moment(event.start),
      end: moment(event.end),
      title: event.title,
      consultee: event.consultee,
    });
    this.toggle();
    this.toggleEditingTrue();
  }

  handleStartDateChange(date) {
    this.setState({
      start: date,
    });
  }

  handleEndDateChange(date) {
    this.setState({
      end: date,
    });
  }
  /* eslint no-unused-vars:0  */
  handleDropdownClick(id, firstName, lastName) {
    this.props.actions.setConsultees({

    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleEditingTrue() {
    this.setState({
      editing: true,
    });
  }

  toggleEditingFalse() {
    this.setState({
      editing: false,
    });
  }
  render() {
    return (
      <div style={{ height: '100%' }}>
        <BigCalendar
          selectable
          events={this.props.events}
          defaultView="week"
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => this.editForm(event)}
          onSelectSlot={slotInfo =>
          this.setPopupText(slotInfo)
          }
        />
        <div>

          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} onExit={this.toggleEditingFalse}>
            <ModalHeader toggle={this.toggle}>Enter Details</ModalHeader>
            <ModalBody>
              <ScheduleForm start={this.state.start} end={this.state.end} handleStartDateChange={this.handleStartDateChange} handleEndDateChange={this.handleEndDateChange} onTitleChange={this.onTitleChange} onBookChange={this.onBookChange} onConsulteeChange={this.onConsulteeChange} title={this.state.title} relatedUsers={this.props.user.relatedUsers} actions={this.props.actions} consultees={this.props.consultees} />
            </ModalBody>
            <ModalFooter>
              {this.state.editing && <Button color="danger" onClick={this.onDeleteEvent}>Delete Event</Button>}
              <Button color="primary" onClick={this.onClickForm}>Submit</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>

    );
  }
}

Calendar.propTypes = {
  events: PropTypes.arrayOf.isRequired,
  actions: PropTypes.shape.isRequired,
  user: PropTypes.shape.isRequired,
  consultees: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,

};

export default Calendar;

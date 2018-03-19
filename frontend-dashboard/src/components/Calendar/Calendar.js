import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ScheduleForm from '../Form/schedule_form';

import 'react-datepicker/dist/react-datepicker.css';
//import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component{
  constructor() {
    super();
    this.state = {
      modal: false,
      popupText: "NAN",
      start: "NAN",
      end: "NAN",
      title: "NAN"
    };

    this.toggle = this.toggle.bind(this);
    this.setPopupText = this.setPopupText.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.onClickForm = this.onClickForm.bind(this);
  }

  componentDidMount(){
    this.props.actions.getScheduleEvents(
      {

        start:moment().toDate(),
        end:moment().add(4,"hours").toDate(),
        title:'example event'
      }
    )

  }

  setPopupText(slotinfo){

      this.setState({
        start: moment(slotinfo.start),
        end: moment(slotinfo.end)
      })
      this.toggle();
  }

  handleStartDateChange(date){
    this.setState({
      start:date
    })
    console.log(this.state.start);
  }

  handleEndDateChange(date){
    this.setState({
      end:date
    })
  }

  onTitleChange(event){
    console.log("title: "+ event.target.value);
    this.setState({title:event.target.value});
  }

  onConsulteeChange(event){
    this.setState({consultee:event.target.value});
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  onClickForm() {
    console.log("OnClickForm");
    this.props.actions.postScheduleEvents({
        start: this.state.start.toDate(),
        end: this.state.end.toDate(),
        title: this.state.title,
        user:this.props.user
      }
    )
    this.toggle();
  }


   render(){
       return(
           <div style={{height: '100%'}}>
           <BigCalendar
               selectable
               events={this.props.events}
               defaultView="week"
               scrollToTime={new Date(1970, 1, 1, 6)}
               defaultDate={new Date(2015, 3, 12)}
               onSelectEvent={event => alert(event.title)}
               onSelectSlot={slotInfo =>
                   // alert(
                   //     `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                   //     `\nend: ${slotInfo.end.toLocaleString()}` +
                   //     `\naction: ${slotInfo.action}`
                   // )
                      this.setPopupText(slotInfo)
               }
           />
             <div>

               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                 <ModalHeader toggle={this.toggle}>Enter Details</ModalHeader>
                 <ModalBody>
                   <ScheduleForm start={this.state.start} end={this.state.end} handleStartDateChange={this.handleStartDateChange.bind(this)} handleEndDateChange={this.handleEndDateChange.bind(this)} onTitleChange={this.onTitleChange.bind(this)}/>
                 </ModalBody>
                 <ModalFooter>
                   <Button color="primary" onClick={this.onClickForm}>Submit</Button>{' '}
                   <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                 </ModalFooter>
               </Modal>
             </div>
           </div>

       )
   }
}

Calendar.propTypes = {
  events : PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired,
  user:PropTypes.object.isRequired

}

export default Calendar;

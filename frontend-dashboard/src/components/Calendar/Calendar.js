import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ScheduleForm from '../Form/schedule_form';

import 'react-datepicker/dist/react-datepicker.css';
//import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component{
  constructor() {
    super();
    this.state = {
      modal: false,
      popupText: "NAN",
      start: "NAN",
      end: "NAN",
      title: "Title",
      consultee: "NAN",
      editing: false,
      booked: false,
      id:null
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

  editForm(event){
    console.log("event consultee "+event.id);
    this.setState({
      id: event.id,
      start: moment(event.start),
      end: moment(event.end),
      title: event.title,
      consultee:event.consultee
    });
    this.toggle();
    this.toggleEditingTrue();
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

  onBookChange(event){
    console.log("checked: "+event.target.value);
    if(event.target.value == "on") this.setState({booked:true});
    else this.setState({booked:false});
    //this.setState({booked:event.target.value});
  }

  onConsulteeChange(newValue){
    this.setState({consultee:newValue});
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleEditingTrue(){
    this.setState({
      editing: true
    })
  }

  toggleEditingFalse(){
    this.setState({
      editing: false
    })
  }

  onDeleteEvent(){
    this.props.actions.deleteScheduleEvents({
      id:this.state.id,
    });

    this.toggle();
    this.toggleEditingFalse();
  }

  onClickForm() {
    console.log("OnClickForm");
    console.log("booked "+this.state.booked);
    if(this.state.editing){
      console.log("id: "+typeof this.state.id);
      this.props.actions.updateScheduleEvents({
        id:this.state.id,
        start:this.state.start.toDate(),
        end:this.state.end.toDate(),
        title:this.state.title,
        consultee:this.state.consultee,
        booked:this.state.booked
      })
    }else {
      this.props.actions.postScheduleEvents({
          start: this.state.start.toDate(),
          end: this.state.end.toDate(),
          title: this.state.title,
          consultee: this.state.consultee,
          booked: this.state.booked
        }
      )
    }

    this.toggle();
    this.toggleEditingFalse();
  }



   render(){
      console.log("relatedUsers: "+this.props.user.relatedUsers[0].firstName);
       return(
           <div style={{height: '100%'}}>
           <BigCalendar
               selectable
               events={this.props.events}
               defaultView="week"
               scrollToTime={new Date(1970, 1, 1, 6)}
               defaultDate={new Date(2015, 3, 12)}
               onSelectEvent={event => this.editForm(event)}
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

               <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} onExit={this.toggleEditingFalse}>
                 <ModalHeader toggle={this.toggle}>Enter Details</ModalHeader>
                 <ModalBody>
                   <ScheduleForm start={this.state.start} end={this.state.end} handleStartDateChange={this.handleStartDateChange.bind(this)} handleEndDateChange={this.handleEndDateChange.bind(this)} onTitleChange={this.onTitleChange.bind(this)} onBookChange={this.onBookChange.bind(this)} onConsulteeChange={this.onConsulteeChange.bind(this)} title={this.state.title} relatedUsers={this.props.user.relatedUsers} />
                 </ModalBody>
                 <ModalFooter>
                   {this.state.editing && <Button color="danger" onClick={this.onDeleteEvent}>Delete Event</Button>}
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

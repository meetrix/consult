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
      end: "NAN"
    };

    this.toggle = this.toggle.bind(this);
    this.setPopupText = this.setPopupText.bind(this);
  }

  componentDidMount(){
    this.props.actions.getScheduleEvents(
      {
        start:'31231313123',
        end:'43423424243',
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

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
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
                   <ScheduleForm start={this.state.start} end={this.state.end}/>
                 </ModalBody>
                 <ModalFooter>
                   <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
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
  actions:PropTypes.object.isRequired

}

export default Calendar;

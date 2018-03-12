import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import PropTypes from 'prop-types';


//import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component{

  componentDidMount(){
    this.props.actions.getScheduleEvents(
      {
        startAt:'31231313123',
        endAt:'43423424243'
      }
    )
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
                   alert(
                       `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                       `\nend: ${slotInfo.end.toLocaleString()}` +
                       `\naction: ${slotInfo.action}`
                   )
               }
           />
           </div>

       )
   }
}

Calendar.propTypes = {
  events : PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired

}

export default Calendar;

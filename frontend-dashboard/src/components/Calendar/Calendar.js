import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import events from './example_events';

//import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment'

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class Calendar extends Component{
   render(){
       return(
           <div style={{height: '100%'}}>
           <BigCalendar
               selectable
               events={events}
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

export default Calendar;
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import  FullCalendar  from './FullCalendar';

const nextDate = (start) =>
    new Date(start.getTime() + 24*60*60*1000);


class FullcalendarTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [
                {
                    title: 'Default event',
                    start: new Date(),
                    // plus 30 minutes
                    end: new Date(Date.now + 30 * 60 * 1000),
                }
            ],

            date: new Date(),
        };

        this.onEventSelect = this.onEventSelect.bind(this);
        this.goToSomeDate = this.goToSomeDate.bind(this);
    }

    onEventSelect(start, end) {
        const events = this.state.events;

        const newEventsSource = events.concat({
            title: `Event #${events.length}`,
            // moment object to simple date object
            start: start.toDate(),
            end: end.toDate(),
        });

        this.setState({
            events: newEventsSource,
        });
    }

    goToSomeDate() {
        this.setState({  date: nextDate( this.state.date) });
        this.setState({events: [
            {
                title: 'Default event2',
                start: new Date(Date.now + 30 * 60 * 1000),
                // plus 30 minutes
                end: new Date(Date.now + 30 * 60 * 2000),
            }
        ]});
    }

    render() {
        const calendarOptions = {
            schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',

            header: false,

            id: 'calendar-example',
            defaultView: 'agendaDay',
            defaultDate: this.state.date,
            timezone: 'local',

            editable: true,
            droppable: true,
            selectable: true,

            slotDuration: '00:15',
            scrollTime: '08:00',
            columnFormat: 'ddd DD/MM',
            displayTime: true,
            firstDay: 1,

            select: this.onEventSelect,

            // please, use funciton events source for reactivity support
            events: (start, end, timezone, callback) => {
                callback(this.state.events);
            },
        }

        return(
            <div className="row">
              <div className="calendar">
                <button onClick={this.goToSomeDate}>Go To Date</button>
                <FullCalendar options={calendarOptions} />
              </div>
            </div>
        );
    }
}

export default FullcalendarTest;

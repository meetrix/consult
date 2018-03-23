import React, {Component} from 'react';
import {TabContent, TabPane, Badge} from 'reactstrap';
import DayPicker from 'react-day-picker';

class SummaryPane extends Component {

  render() {
    return (
      <TabPane tabId="1">
        <div className="card text-white bg-primary text-center">
          <div className="card-body">
            <h3>Next Class</h3>
            <p><Badge>24th March</Badge></p>
            <small><b>Time Left</b></small>
            <h4><span className="label label-default">04 : 49 hours</span></h4>
          </div>
        </div>

        <div className="card text-white bg-primary text-center">
          <div className="card-header">Today</div>
          <div className="card-body">
                            <span className="fa-stack fa-3x">
                                <i className="fa fa-calendar-o fa-stack-2x"/>
                                <span className="fa-stack-1x calendar-text">27</span>
                            </span>
            <p>No Classes<br/>Home Work</p>
          </div>
        </div>


        <div className="card text-white bg-primary text-center">
          {/*<div className="card-body">*/}
          <DayPicker />
          {/*</div>*/}
        </div>
      </TabPane>
    )
  }
}

export default SummaryPane;

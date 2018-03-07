import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Progress, Label, Input, Badge} from 'reactstrap';
import classnames from 'classnames';
import Calendar from '../../components/Calendar/Calendar';
import DayPicker from 'react-day-picker';

class Aside extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <aside className="aside-menu">
              <Nav tabs>
                <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                           onClick={() => { this.toggle('1'); }}>
                    <i className="icon-list"></i>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <div className="callout m-0 py-2 text-muted text-center bg-light">
                    <small><h4>Next Class</h4></small>
                  </div>
                  <hr className="transparent mx-3 my-0"/>
                  <div className="callout callout-warning m-0 py-3 text-center">
                    <p><Badge>24th March</Badge></p>
                    <small><b>Time Left</b></small>
                    <h4><span className="label label-default">04 : 49 hours</span></h4>
                  </div>

                  <div className="callout m-0 py-2 text-muted text-center bg-light">
                    <small><h4>Today</h4></small>
                  </div>
                  <hr className="transparent mx-3 my-0"/>
                  <div className ="callout callout-warning m-0 py-3 text-center">
                      <span className="fa-stack fa-3x">
                            <i className="fa fa-calendar-o fa-stack-2x"/>
                            <span className="fa-stack-1x calendar-text">27</span>
                      </span>
                      <p>No Classes<br/>Home Work</p>
                  </div>
                  <div className="callout m-0 py-2 text-muted text-center bg-light">
                  </div>
                  <div className="callout callout-warning m-0 py-3 text-center">
                      <DayPicker />
                  </div>
                </TabPane>
              </TabContent>
            </aside>
        )
    }
}

export default Aside;

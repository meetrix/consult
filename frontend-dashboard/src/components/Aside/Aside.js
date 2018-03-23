import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Progress, Label, Input, Badge} from 'reactstrap';
import classnames from 'classnames';
import SummaryPane from './SummaryPane';
import MessagePane from './MessagePane';
import SettingsPane from './SettingsPane';
import NotificationPane from "./NotificationPane";

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
                <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                           onClick={() => { this.toggle('2'); }}>
                    <i className="icon-speech"></i>
                    <Badge pill color="danger">5</Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                           onClick={() => { this.toggle('3'); }}>
                    <i className="icon-bell"></i>
                    <Badge pill color="danger">5</Badge>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                           onClick={() => { this.toggle('4'); }}>
                    <i className="icon-settings"></i>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <SummaryPane/>
                <MessagePane
                  messages={[{id: '1231223', author: 'John', text: 'test text'}]}
                />
                <NotificationPane/>
                <SettingsPane/>
              </TabContent>
            </aside>
        )
    }
}

export default Aside;

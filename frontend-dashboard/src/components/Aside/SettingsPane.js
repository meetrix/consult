import React, {Component} from 'react';
import {TabPane, Progress, Label, Input} from 'reactstrap';

class SettingsPane extends Component {

  render() {
    return (
      <TabPane tabId="4" className="p-3">
        <h6>Settings</h6>

        <div className="aside-options">
          <div className="clearfix mt-4">
            <small><b>Option 1</b></small>
            <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
              <Input type="checkbox" className="switch-input" defaultChecked/>
              <span className="switch-label" data-on="On" data-off="Off"></span>
              <span className="switch-handle"></span>
            </Label>
          </div>
          <div>
            <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </small>
          </div>
        </div>

        <div className="aside-options">
          <div className="clearfix mt-3">
            <small><b>Option 2</b></small>
            <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
              <Input type="checkbox" className="switch-input"/>
              <span className="switch-label" data-on="On" data-off="Off"></span>
              <span className="switch-handle"></span>
            </Label>
          </div>
          <div>
            <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </small>
          </div>
        </div>

        <div className="aside-options">
          <div className="clearfix mt-3">
            <small><b>Option 3</b></small>
            <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
              <Input type="checkbox" className="switch-input"/>
              <span className="switch-label" data-on="On" data-off="Off"></span>
              <span className="switch-handle"></span>
            </Label>
          </div>
        </div>

        <div className="aside-options">
          <div className="clearfix mt-3">
            <small><b>Option 4</b></small>
            <Label className="switch switch-text switch-pill switch-success switch-sm float-right">
              <Input type="checkbox" className="switch-input" defaultChecked/>
              <span className="switch-label" data-on="On" data-off="Off"></span>
              <span className="switch-handle"></span>
            </Label>
          </div>
        </div>

        <hr/>
        <h6>System Utilization</h6>

        <div className="text-uppercase mb-1 mt-4">
          <small><b>CPU Usage</b></small>
        </div>
        <Progress className="progress-xs" color="info" value="25"/>
        <small className="text-muted">348 Processes. 1/4 Cores.</small>

        <div className="text-uppercase mb-1 mt-2">
          <small><b>Memory Usage</b></small>
        </div>
        <Progress className="progress-xs" color="warning" value="70"/>
        <small className="text-muted">11444GB/16384MB</small>

        <div className="text-uppercase mb-1 mt-2">
          <small><b>SSD 1 Usage</b></small>
        </div>
        <Progress className="progress-xs" color="danger" value="95"/>
        <small className="text-muted">243GB/256GB</small>

        <div className="text-uppercase mb-1 mt-2">
          <small><b>SSD 2 Usage</b></small>
        </div>
        <Progress className="progress-xs" color="success" value="10"/>
        <small className="text-muted">25GB/256GB</small>
      </TabPane>
    )
  }
}

export default SettingsPane;

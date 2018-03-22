import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import ConsulteeSuggest from '../AutoSuggest/ConsulteeSuggest';

class ScheduleForm extends Component{

  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="exampleText">Title</Label>
          <Input type="textarea" name="text" id="exampleText" onChange={this.props.onTitleChange} value={this.props.title}/>
        </FormGroup>
        <Label for="exampleDate">Start</Label>
        <DatePicker selected={this.props.start} onChange={this.props.handleStartDateChange} showTimeSelect timeFormat="HH:mm" dateFormat="LLL"/>
        <Label for="exampleDate">End</Label>
        <DatePicker selected={this.props.end} onChange={this.props.handleEndDateChange} showTimeSelect timeFormat="HH:mm" dateFormat="LLL"/>
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
        </FormGroup>
        <FormGroup>
          <Label>Select Student</Label>
        <ConsulteeSuggest onConsulteeChange={this.props.onConsulteeChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select Student</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup check>
          <Label check>
          <Input type="checkbox"/>
            Booked
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

export default ScheduleForm;

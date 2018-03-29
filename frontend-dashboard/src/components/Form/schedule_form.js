import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import ConsulteeSuggest from '../AutoSuggest/ConsulteeSuggest';

class ScheduleForm extends Component{

  render(){
    console.log("relatedUsers:22 "+this.props.relatedUsers[0].firstName);
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
        <ConsulteeSuggest onConsulteeChange={this.props.onConsulteeChange} relatedUsers={this.props.relatedUsers}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup check>
          <Label check>
          <Input type="checkbox" onChange={this.props.onBookChange} />
            Booked
          </Label>
        </FormGroup>
      </Form>
    )
  }
}

export default ScheduleForm;

import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from 'react-datepicker';

class ScheduleForm extends Component{
  render(){
    return(
      <Form>
        <FormGroup>
          <Label for="exampleText">Title</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Label for="exampleDate">Start</Label>
        <DatePicker selected={this.props.start} showTimeSelect timeFormat="HH:mm" dateFormat="LLL"/>
        <Label for="exampleDate">End</Label>
        <DatePicker selected={this.props.end} showTimeSelect timeFormat="HH:mm" dateFormat="LLL"/>
        <FormGroup>
          <Label for="exampleColor">Color</Label>
          <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
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
      </Form>
    )
  }
}

export default ScheduleForm;

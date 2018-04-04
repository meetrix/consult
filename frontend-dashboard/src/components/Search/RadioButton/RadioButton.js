import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';

class RadioButton extends Component {
  render() {
    return (
      <div>
        <Input type="radio" name="selectRadio" id="searchCriteria_2" />
      </div>
    );
  }
}

export default RadioButton;

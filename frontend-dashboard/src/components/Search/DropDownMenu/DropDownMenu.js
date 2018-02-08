import React, { Component } from 'react';
import {Input, Label} from 'reactstrap';

class DropDownMenu extends Component {
    render() {
        return (
            <div>
                <Label for="searchCriteria_2">Criteria</Label>
                <Input type="select" name="select" id="searchCriteria_2">
                    <option>1</option>
                    <option>2</option>
                </Input>
            </div>
        )
    }
}

export default DropDownMenu;
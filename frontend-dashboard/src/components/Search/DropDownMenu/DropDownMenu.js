import React, { Component } from 'react';
import {Input, Label} from 'reactstrap';
import PropTypes from 'prop-types';

class DropDownMenu extends Component {
    render() {
        let options = this.props.options.map(option=>
            <option key={'search_criteria_option_'+this.props.name+'_'+option}>{option}</option>
        )
        return (
            <div>
                <Label for={'search_criteria_'+this.props.name}>{this.props.label}</Label>
                <Input type="select" name={'search_criteria_'+this.props.name}>
                    {options}
                </Input>
            </div>
        )
    }
}

DropDownMenu.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default DropDownMenu;
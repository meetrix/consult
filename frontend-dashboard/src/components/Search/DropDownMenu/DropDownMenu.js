import React, { Component } from 'react';
import {Input, Label} from 'reactstrap';
import PropTypes from 'prop-types';

class DropDownMenu extends Component {
    render() {
        return (
            <div>
                <Label for={'search_criteria_'+this.props.searchKey}>{this.props.label}</Label>
                <Input type="select" name="select" id={'search_criteria_'+this.props.searchKey}>
                    <option>1</option>
                    <option>2</option>
                </Input>
            </div>
        )
    }
}

DropDownMenu.propTypes = {
    label: PropTypes.string.isRequired,
    searchKey: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
}

export default DropDownMenu;
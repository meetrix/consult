import React, { Component } from 'react';
import {Input, Label} from 'reactstrap';
import PropTypes from 'prop-types';

class RadioButton extends Component {
    render() {
        return (
            <div>
                <Label className="radio-inline sort-by-radio-button">
                    <Input type="radio" name={this.props.name}/>
                    {this.props.label}
                </Label>
            </div>
        )
    }
}

RadioButton.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default RadioButton;
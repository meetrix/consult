import React, { Component } from 'react';
import {Input, Label} from 'reactstrap';
import PropTypes from 'prop-types';

class RadioButton extends Component {
    render() {
        return (
            <div>
                <Label check>
                    <Input type="radio" name={this.props.name} id={this.props.id} />
                    {this.props.label}
                </Label>
            </div>
        )
    }
}

RadioButton.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default RadioButton;
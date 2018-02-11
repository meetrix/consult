import React, { Component } from 'react';
import {Input, Label, FormGroup} from 'reactstrap';
import RadioButton from './RadioButton';
import PropTypes from 'prop-types';

class SortByRadioButtons extends Component {
    render() {
        let radioButtons = this.props.radioButtons.map((radioButton)=>
            <RadioButton key={radioButton.label}  label={radioButton.label} name={this.props.name}/>
        );

        return (
            <div>
                <FormGroup tag="fieldset" className="sort-by-radio-buttons-container">
                    {/*<Label>Sort By</Label>*/}
                    <FormGroup className="form-inline sort-by-radio-buttons-set">
                        {radioButtons}
                    </FormGroup>
                </FormGroup>
            </div>
        )
    }
}

SortByRadioButtons.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    radioButtons : PropTypes.arrayOf(
        PropTypes.shape(
            {
                label: PropTypes.string
            }
        )
    )
}

export default SortByRadioButtons;
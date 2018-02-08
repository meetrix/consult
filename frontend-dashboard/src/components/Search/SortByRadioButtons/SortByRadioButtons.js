import React, { Component } from 'react';
import {Input, Label, FormGroup} from 'reactstrap';
import RadioButton from './RadioButton';
import PropTypes from 'prop-types';

class SortByRadioButtons extends Component {
    render() {
        let radioButtons = this.props.radioButtons.map((radioButton)=>
            <RadioButton key={radioButton.id} id={radioButton.id} label={radioButton.label} name="sortBy"/>
        );

        return (
            <div>
                <FormGroup tag="fieldset">
                    <Label>Sort By</Label>
                    <FormGroup check>
                        {radioButtons}
                    </FormGroup>
                </FormGroup>
            </div>
        )
    }
}

SortByRadioButtons.propTypes = {
    label: PropTypes.string.isRequired,
    searchKey: PropTypes.string.isRequired,
    radioButtons : PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string,
                label: PropTypes.string
            }
        )
    )
}

export default SortByRadioButtons;
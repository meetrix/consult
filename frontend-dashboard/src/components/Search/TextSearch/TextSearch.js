import React, { Component } from 'react';
import {Input, Label} from 'reactstrap';
import PropTypes from 'prop-types';

class TextSearch extends Component {
    render() {
        return (
                <Input type="text" name={this.props.name} placeholder={this.props.placeHolder}/>
        )
    }
}

TextSearch.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired
}

export default TextSearch;
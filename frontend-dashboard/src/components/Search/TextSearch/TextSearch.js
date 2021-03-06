import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';
import PropTypes from 'prop-types';

class TextSearch extends Component {
    render() {
        return (
                <InputGroup>
                    <Input type="text" name={this.props.name} placeholder={this.props.placeHolder}/>
                    <InputGroupAddon addonType="append">
                        <span className="fa fa-search"></span>
                    </InputGroupAddon>
                </InputGroup>
        )
    }
}

TextSearch.propTypes = {
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default TextSearch;

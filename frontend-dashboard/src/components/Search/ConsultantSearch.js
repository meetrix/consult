import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon, FormGroup, legend, Label, Fragment} from 'reactstrap';
import DropDownMenuSet from './DropDownMenu/DropDownMenuSet';
import SortByRadioButtons from './SortByRadioButtons/SortByRadioButtons';
import TextSearch from './TextSearch/TextSearch';

class ConsultantSearch extends Component {
    render() {
        return (
            <div>
                {/*Search Parameters*/}
                <Row>
                    {/*Search by Name*/}
                    <Col xs="12" md="6">
                        <TextSearch label="textsearch" name="textsearch" placeHolder="textsearch"/>
                    </Col>

                    {/*Sort By Radio Buttons*/}
                    <Col xs="12" md="6">
                        <SortByRadioButtons label="Sort" name="sortBy" radioButtons={this.props.radioButtons}/>
                    </Col>
                </Row>

                {/*Criteria Selection*/}
                <Row>
                    <DropDownMenuSet dropDownMenus={this.props.dropDownMenus}/>
                </Row>

            </div>
        )
    }
}

ConsultantSearch.propTypes = {
    dropDownMenus : PropTypes.arrayOf(
        PropTypes.shape(
            {
                name: PropTypes.string,
                label: PropTypes.string,
                options: PropTypes.arrayOf(PropTypes.string)
            }
        )
    ),
    radioButtons : PropTypes.arrayOf(
        PropTypes.shape(
            {
                label: PropTypes.string
            }
        )
    )
}

export default ConsultantSearch;
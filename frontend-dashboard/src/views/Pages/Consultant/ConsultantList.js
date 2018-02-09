/**
 * Created by jay on 09/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon, FormGroup, legend, Label} from 'reactstrap';
import {ConsultantSortByRadioButtons, ConsultantSearchDropDownMenu} from '../../../config.js';
import DropDownMenuSet from '../../../components/Search/DropDownMenu/DropDownMenuSet';
import SortByRadioButtons from '../../../components/Search/SortByRadioButtons/SortByRadioButtons';
import TextSearch from '../../../components/Search/TextSearch/TextSearch';

class ConsultantList extends Component {

    render() {

        // let dropDownMenus = [{name: "subject", label:"Subject", options:["Chemistry", "Physics"] }];
        return(
            <div>
                {/*Search Parameters*/}
                <Row>
                    {/*Search by Name*/}
                    <Col md="4">
                        <TextSearch label="textsearch" name="textsearch" placeHolder="textsearch"/>
                    </Col>

                    {/*Sort By Radio Buttons*/}
                    <Col md="8">
                        <SortByRadioButtons label="Sort" name="sortBy" radioButtons={ConsultantSortByRadioButtons}/>
                    </Col>
                </Row>

                {/*Criteria Selection*/}
                <Row>
                    <DropDownMenuSet dropDownMenus={ConsultantSearchDropDownMenu}/>
                </Row>

            </div>

        )
    }
}

// ConsultantList.propTypes = {
//     tutors: PropTypes.arrayOf(PropTypes.shape({
//         id:PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//
//
//     })),
//     actions: PropTypes.object.isRequired
//
// };

export default ConsultantList;
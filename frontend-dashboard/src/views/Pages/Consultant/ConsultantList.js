/**
 * Created by jay on 09/01/18.
 */

// Core modules
import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon, FormGroup, legend, Label} from 'reactstrap';
import {ConsultantSortByRadioButtons, ConsultantSearchDropDownMenu} from '../../../../config.js';
import ConsultantSearch from '../../../components/Search/ConsultantSearch';


class ConsultantList extends Component {

    render() {
        return(
            <ConsultantSearch radioButtons={ConsultantSortByRadioButtons} dropDownMenus={ConsultantSearchDropDownMenu}/>
        )
    }
}


export default ConsultantList;
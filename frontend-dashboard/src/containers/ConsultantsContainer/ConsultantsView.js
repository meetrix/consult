/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import {Row, Col, Fragment} from 'reactstrap';
import PropTypes from 'prop-types';
import Consultants from '../../components/Consultants/Consultants';
import DropDownMenuSet from '../../components/Search/DropDownMenu/DropDownMenuSet';
import SortByRadioButtons from '../../components/Search/SortByRadioButtons/SortByRadioButtons';
import TextSearch from '../../components/Search/TextSearch/TextSearch';

class ConsultantsView extends Component {

    componentWillMount(){
        this.props.actions.getPets();
    }
    render() {
        return(
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
                <Consultants consultants={this.props.consultants} actions={this.props.actions} />
            </div>
        )
    }
}

ConsultantsView.propTypes = {
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
    ),
    consultants: PropTypes.arrayOf(PropTypes.shape({
            _id:PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,


    })),
    actions: PropTypes.object.isRequired

};

export default ConsultantsView;
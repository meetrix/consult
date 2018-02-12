/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component, Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import Consultant from './Consultant';

class Consultants extends Component {

    getConsultantCardColumns(consultantsInRow){
        return (
            consultantsInRow.map(consultant =>
                <Col xs="12" sm="3" md="3" key={consultant._id}>
                    <Consultant
                        {...consultant}
                        actions={this.props.actions}
                    />
                </Col>
            )
        )
    }

    render() {
        var rows=[];
        let numberOfCardsInRow = 4;
        for(let i=0; i<this.props.consultants.length ; i=i+numberOfCardsInRow){
            rows.push(
                <Row key={i}>
                    {this.getConsultantCardColumns(this.props.consultants.slice(i,i+numberOfCardsInRow))}
                </Row>
            )
        }
        return(
            <Fragment>
                {rows}
            </Fragment>
        )
    }
}

Consultants.propTypes = {
    consultants: PropTypes.arrayOf(PropTypes.shape({
        _id:PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,

    })),
    actions: PropTypes.object.isRequired

};

export default Consultants;
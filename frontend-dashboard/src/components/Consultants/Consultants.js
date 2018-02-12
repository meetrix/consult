/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import {Row, Col, Fragment} from 'reactstrap';
import PropTypes from 'prop-types';
import Consultant from './/Consultant'

class Consultants extends Component {

    render() {
        return(
            <Row>
                {this.props.consultants.map(consultant =>
                    <Col xs="12" sm="3" md="3" key={consultant._id}>
                        <Consultant
                            {...consultant}
                            actions={this.props.actions}
                        />
                    </Col>
                )}
            </Row>
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
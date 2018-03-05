/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 12/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ConsultantsLive from '../../components/Consultants/ConsultantsLive'

class ConsultantLiveContainerView extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <ConsultantsLive consultants={this.props.consultants} numOfConsultantShouldShow={this.props.numOfConsultantShouldShow}/>
        )
    }
}

ConsultantLiveContainerView.propTypes = {
    actions: PropTypes.object.isRequired,
    consultants:PropTypes.array.isRequired,
    numOfConsultantShouldShow:PropTypes.number.isRequired

};

export default ConsultantLiveContainerView;/**
 * Created by supun on 16/02/18.
 */

/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import TutorsView from './TutorsContainerView'

//
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreatorFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
    return {
        tutors: state.tutors
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{getTutors:bindActionCreators(actionCreatorFactory(KEYS.TUTOR, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TutorsView);
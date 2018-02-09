/**
 * Created by supun on 07/02/18.
 */
//core module
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import SignUpView from './SignUpView'

//
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreatorFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
    return {
        auth: state.auth
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{signup:bindActionCreators(actionCreatorFactory(KEYS.SIGNUP, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpView);
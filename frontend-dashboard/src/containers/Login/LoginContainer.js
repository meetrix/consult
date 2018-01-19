/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import LoginContainerView from './LoginContainerView'

//
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreatorFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
    return {
        auth: state.auth
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{login:bindActionCreators(actionCreatorFactory(KEYS.LOGIN, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainerView);/**
 * Created by supun on 12/01/18.
 */

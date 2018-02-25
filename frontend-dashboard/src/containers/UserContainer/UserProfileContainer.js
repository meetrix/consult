/**
 * Created by supun on 23/02/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreatorFactory} from '../../actions/actionCreator'

import UserProfileView from './UserProfileView';

function mapStateToProps(state){
    return {
        user: {
            name:"supun",
            email:"supun.12@cse.mrt.ac.lk"
        }
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{signup:bindActionCreators(actionCreatorFactory(KEYS.SIGNUP, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);

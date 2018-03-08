/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import MyConsultantsView from './MyConsultantsContainerView';
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant';
import {actionCreatorFactory} from '../../actions/actionCreator';


function mapStateToProps(state){
    return {
        consultants: [{_id:1,username:'supun'},{_id:2,username:'supun'},{_id:3,username:'supun'}],

    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{getConsultants:bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyConsultantsView);/**
 * Created by supun on 18/02/18.
 */

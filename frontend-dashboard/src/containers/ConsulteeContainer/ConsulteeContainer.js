/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import ConsulteeView from './ConsulteeView';
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant';
import {actionCreatorFactory} from '../../actions/actionCreator';

function mapStateToProps(state){
    return {
        consultants: state.consultants,
        user:{
            role:0
        }

    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{getConsultants:bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsulteeView);/**
 * Created by supun on 07/03/18.
 */

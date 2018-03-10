/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import ConsultantsView from './ConsultantsView';
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant';
import {ACTION_KEY as API_GATWAY_KEYS,ACTION_ATTR as API_GATEWAY_ATTRS  }from '../../constants/apiGateWayConstant';
import {actionCreatorFactory,actionCreateApiGateWayFactory} from '../../actions/actionCreator';

import {ConsultantSortByRadioButtons, ConsultantSearchDropDownMenu} from '../../../config.js';

function mapStateToProps(state){
    return {
        consultants: [{_id:'1',username:'supun'},{_id:'2',username:'supun'},{_id:'3',username:'supun'}],
        radioButtons: ConsultantSortByRadioButtons,
        dropDownMenus: ConsultantSearchDropDownMenu
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        getConsultants:bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD),dispatch),
        getPets:bindActionCreators(actionCreateApiGateWayFactory(API_GATWAY_KEYS.GETPETS,API_GATEWAY_ATTRS.PAYLOAD),dispatch)

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsultantsView);
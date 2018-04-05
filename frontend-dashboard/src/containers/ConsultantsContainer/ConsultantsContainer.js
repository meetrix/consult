/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import ConsultantsView from './ConsultantsView';
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS,REDUX_ACTIONS as ACTION_TYPES  }from '../../constants/apiSagaConstant';
import {ACTION_KEY as API_GATWAY_KEYS,ACTION_ATTR as API_GATEWAY_ATTRS  }from '../../constants/apiGateWayConstant';
import {actionCreatorFactory,actionCreateApiGateWayFactory,actionCreateStoreUpdateFactory} from '../../actions/actionCreator';

import {ConsultantSortByRadioButtons, ConsultantSearchDropDownMenu} from '../../../config.js';

function mapStateToProps(state){
    return {
        consultants: state.consultants,
        radioButtons: ConsultantSortByRadioButtons,
        dropDownMenus: ConsultantSearchDropDownMenu
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        getConsultants:bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD),dispatch),
        viewConsultantSummary:bindActionCreators(actionCreateStoreUpdateFactory(ACTION_TYPES.VIEW_CONSULTANT_SUMMARY,ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsultantsView);

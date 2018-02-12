/**
 * Created by supun on 08/01/18.
 */
// Core modules
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import ConsultantsView from './ConsultantsView';
import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS  }from '../../constants/constant';
import {actionCreatorFactory} from '../../actions/actionCreator';

import {ConsultantSortByRadioButtons, ConsultantSearchDropDownMenu} from '../../../config.js';

function mapStateToProps(state){
    return {
        consultants: state.consultants,
        radioButtons: ConsultantSortByRadioButtons,
        dropDownMenus: ConsultantSearchDropDownMenu
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{getConsultants:bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD),dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsultantsView);
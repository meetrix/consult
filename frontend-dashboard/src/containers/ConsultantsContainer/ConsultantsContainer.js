/**
 * Created by supun on 08/01/18.
 */
// Core modules
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// React Component
import ConsultantsView from './ConsultantsView';
import { ACTION_KEY as KEYS, ACTION_ATTR as ATTRS, REDUX_ACTIONS as ACTION_TYPES } from '../../constants/apiSagaConstant';
import { actionCreatorFactory, actionCreateStoreUpdateFactory } from '../../actions/actionCreator';

import { ConsultantSortByRadioButtons, ConsultantSearchDropDownMenu } from '../../../config';


function mapStateToProps(state) {
  return {
    consultants: state.consultants,
    radioButtons: ConsultantSortByRadioButtons,
    dropDownMenus: ConsultantSearchDropDownMenu,
  };
}
/* eslint max-len:0 */
const mapDispatchToProps = dispatch => ({
  actions: {
    getConsultants: bindActionCreators(actionCreatorFactory(KEYS.CONSULTS, ATTRS.PAYLOAD), dispatch),
    viewConsultantSummary: bindActionCreators(actionCreateStoreUpdateFactory(ACTION_TYPES.VIEW_CONSULTANT_SUMMARY, ATTRS.PAYLOAD), dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsultantsView);

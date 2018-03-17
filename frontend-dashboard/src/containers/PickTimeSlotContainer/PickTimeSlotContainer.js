/**
 * Created by supun on 16/03/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PickTimeSlotView from './PickTimeSlotView'
import {REDUX_ACTIONS as ACTIONS,ACTION_ATTR as ATTRS  }from '../../constants/constant'

import {actionCreateStoreUpdateFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
  return {
    scheduler:state.scheduler
  }

}
const mapDispatchToProps = (dispatch) => ({
  actions:{
    selectTimeSlot:bindActionCreators(actionCreateStoreUpdateFactory(ACTIONS.CONSULTEE_TIME_SLOT_SELECT, ATTRS.PAYLOAD,ATTRS.DATA),dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PickTimeSlotView);/**
 * Created by supun on 18/02/18.
 */

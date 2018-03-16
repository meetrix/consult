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
    timeSlots: [
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
      {
        consultantName:'supun',
        consultantImage:'',
        consultSubject:'',
        timeSlot:{
          startAt:'',
          endAt:''
        }
      },
    ],

  }

}
const mapDispatchToProps = (dispatch) => ({
  actions:{
    selectTimeSlot:bindActionCreators(actionCreateStoreUpdateFactory(ACTIONS.CONSULTEE_TIME_SLOT_SELECT, ATTRS.PAYLOAD),dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PickTimeSlotView);/**
 * Created by supun on 18/02/18.
 */

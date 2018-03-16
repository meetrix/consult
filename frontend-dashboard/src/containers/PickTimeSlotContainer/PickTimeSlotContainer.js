/**
 * Created by supun on 16/03/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PickTimeSlotView from './PickTimeSlotView'
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PickTimeSlotView);/**
 * Created by supun on 18/02/18.
 */

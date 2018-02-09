/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'




import ScheduledClassSidePopUp from '../../../components/ScheduledMeetSidePopUpSummary/ScheduledMeetSidePopUpSummary'
import ConsultantWidget from '../../../components/Consultant/ConsultantWidget'
class Test extends Component{



    render(){
        return(
            <div style={{top: '50%',left: '50%',position:'absolute'}}>

                <ConsultantWidget/>
            </div>

        );
    }
}
export default Test;
/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'




import ScheduledWidget from '../../../components/Schedul/ScheduledWidget'
import ConsultantWidget from '../../../components/Consultants/ConsultantWidget'
import ImageWidget from '../../../components/Core/ImageWidget'

import FullcalendarTest from '../../../components/lib/FullcalendarTest';
class Test extends Component{



    render(){
        return(
            <div style={{top: '1%',left: '1%',position:'absolute'}}>
                <FullcalendarTest/>
            </div>

        );
    }
}
export default Test;
/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'




import ScheduledWidget from '../../../components/Schedul/ScheduledWidget'
import ConsultantWidget from '../../../components/Consultants/ConsultantWidget'
import ImageWidget from '../../../components/Core/ImageWidget'
class Test extends Component{



    render(){
        return(
            <div style={{top: '50%',left: '50%',position:'absolute'}}>
                <ConsultantWidget username="Yasith Prabuddhaka" price="Rs.5000"/>
                <ImageWidget path="img/avatars/1.jpg"/>
            </div>

        );
    }
}
export default Test;
/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'




import ScheduledWidget from '../../../components/Schedul/ScheduledWidget'
import ConsultantWidget from '../../../components/Consultants/ConsultantWidget'
import ImageWidget from '../../../components/Core/ImageWidget'
import ConsultantsImage from '../../../components/Consultants/ConsultantsImage'

class Test extends Component{

    constructor(props){
        super(props)
        this.state = {
            images:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]
        };
    }

    render(){
        return(
            <div style={{top: '1%',left: '1%',position:'absolute'}}>
                <ConsultantsImage images={this.state.images}/>
            </div>

        );
    }
}
export default Test;
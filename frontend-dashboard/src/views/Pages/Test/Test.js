/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'




import ScheduledWidget from '../../../components/Schedul/ScheduledWidget'
import ConsultantWidget from '../../../components/Consultants/ConsultantWidget'
import ImageWidget from '../../../components/Core/ImageWidget'
import BaseShowRow from '../../../components/BaseBox/BaseShowRow'
import ConsultImage from '../../../components/Consultants/ConsultantImage'
import LiveRooms from '../../../components/DashBoard/LiveRooms'

class Test extends Component{

    constructor(props){
        super(props)
        this.state = {
            images:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"],
            consultsViewImages:[],
            num:2
        };

    }
    componentDidMount(){
        this.getConsultantsImages();

    }
    getConsultantsImages(){
        let consultsImages = []
        if(this.state.images!= undefined) {
            this.state.images.map((consultantImage, index) =>
                consultsImages.push(<ConsultImage key={index} image={consultantImage}/>)
            )

            this.setState({consultsViewImages: consultsImages});
        }
        console.log(this.state)
    }

    render(){
        return(
            <div style={{top: '1%',left: '1%',position:'absolute'}}>
                {/*<BaseShowRow  numComponentView={this.state.num} availabelComponent={this.state.consultsViewImages}/>*/}
                <LiveRooms/>
            </div>

        );
    }
}
export default Test;
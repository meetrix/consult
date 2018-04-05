import React,{Component} from 'react';
import BaseBox from "../../components/BaseBox/BaseBox";
import {Row,Col} from 'reactstrap';
import ReactList from 'react-list';
import ClassCard from "../../components/ClassCard/ClassCard";

class ClassCardView extends Component{

  constructor(props){
    super(props);
    this.state = {
      todayClasses : []
    }
  }

  // componentDidMount(){
  //   this.getTodayClasses();
  // }

  // getTodayClasses(){
  //   console.log("getTodayClasses: "+this.props.scheduler.events);
  //   let todayClasses = [];
  //   if(this.props.scheduler.events!= undefined) {
  //     this.props.scheduler.events.map((event, index) =>
  //       todayClasses.push(<ClassCard key={index} event={event} getEventConsultees={this.props.action.getEventConsultees}/>)
  //     );
  //     this.setState({todayClasses: todayClasses});
  //   }
  // }

  render(){

    let todayClasses = [];
    if(this.props.scheduler.events!= undefined) {
      this.props.scheduler.events.map((event, index) =>
        todayClasses.push(<ClassCard key={index} event={event} getEventConsultees={this.props.action.getEventConsultees}/>)
      );
      // this.setState({todayClasses: todayClasses});
    }

    console.log("todayClasses: "+todayClasses.length);

    return(
      <BaseBox>
        <Row>
          <Col style={{overflow: 'auto',maxHeight:300 ,maxWidth:800}}>
            <ReactList
              itemRenderer={(index,key)=>todayClasses[index]}
              length={todayClasses.length}
              type='uniform'
              axis='x'
              />
          </Col>
        </Row>
      </BaseBox>
    )
  }
}

export default ClassCardView;

import React,{Component} from 'react';
import BaseBox from "../../components/BaseBox/BaseBox";
import {Row,Col} from 'reactstrap';
import ReactList from 'react-list';
import ConsulteeCard from "../../components/ConsulteeCard/ConsulteeCard";

class ConsulteeCardView extends Component{

  render(){

    let relatedUsers = [];
    if(this.props.auth.user.relatedUsers!= undefined) {
      this.props.auth.user.relatedUsers.map((relatedUser, index) =>
        relatedUsers.push(<ConsulteeCard key={index} relatedUser={relatedUser} getEventConsultees={this.props.action.getEventConsultees}/>)
      );
    }

    return(
      <BaseBox>
        <Row>
          <Col style={{overflow: 'auto',maxHeight:250 ,maxWidth:800}}>
            <ReactList
              itemRenderer={(index,key)=>relatedUsers[index]}
              length={relatedUsers.length}
              type='uniform'
              axis='x'
            />
          </Col>
        </Row>
      </BaseBox>
    )
  }
}

export default ConsulteeCardView;

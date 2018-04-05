import React,{Component} from 'react';

import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle,Col,Row} from 'reactstrap';

import BaseBox from '../BaseBox/BaseBox';

class ClassCard extends Component{

  componentDidMount(){
    // this.props.action.getEventConsultees({
    //   id : this.props.event.id
    // })
  }

  render(){
    return(
      <div style={{float: 'left'}}>
        <Col style={{maxWidth:200,maxHeight:250}}>
          <BaseBox>
            <Row>
        <Card>
          <CardImg top width="100%" src="img/classes/maths-33.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.event.title}</CardTitle>
            <CardSubtitle>At :</CardSubtitle>
            <CardText>{this.props.event.start.toISOString()}</CardText>
            <CardSubtitle>With : </CardSubtitle>
            <CardText>Yasith Prabuddhaka</CardText>
            <Button>Change</Button>
          </CardBody>
        </Card>
            </Row>
          </BaseBox>
        </Col>
      </div>

    )
  }
}

export default ClassCard;

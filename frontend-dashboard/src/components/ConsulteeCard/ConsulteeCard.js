import React,{Component} from 'react';

import {Card,CardImg,CardBody,CardText,CardSubtitle,Button,CardTitle,Col,Row} from 'reactstrap';
import BaseBox from '../BaseBox/BaseBox';

class ConsulteeCard extends Component{

  render(){
    return(
      <div style={{float: 'left'}}>
        <Col style={{maxWidth:200,maxHeight:250}}>
          <BaseBox>
            <Row>
              <Card>
                <CardImg top width="100%" src="img/classes/studentgirl2.jpg" alt="Card image cap" />
                <CardBody>
                  <CardTitle>{this.props.relatedUser.firstName+" "+this.props.relatedUser.lastName}</CardTitle>
                  <CardSubtitle>Next Class: </CardSubtitle>
                  <CardText>10 00 AM</CardText>
                  <Button>View Classes</Button>
                </CardBody>
              </Card>
            </Row>
          </BaseBox>
        </Col>
      </div>
    )
  }
}

export default ConsulteeCard;

import React,{Component} from 'react';
import {Row,Col,ListGroup,ListGroupItem,Card,CardHeader,CardBody} from 'reactstrap';

class AdminPanel extends Component{

  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.actions.getConsultants({

    });
    this.props.actions.getConsultees({

    })
  }

  render(){
      return (
        <div>
          <Row>
            <Col xs="12" sm="6">
              <Card>
                <CardHeader>
                  <strong>Teachers</strong>
                </CardHeader>
                <CardBody>
                  <ListGroup>
                    {this.props.admin.consultants.map(function(consultant, index){
                      return <ListGroupItem key={index}>{consultant.firstName+" "+consultant.lastName}</ListGroupItem>
                    })}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6">
              <Card>
                <CardHeader>
                  <strong>Students</strong>
                </CardHeader>
                <CardBody>
                  <ListGroup>
                    {this.props.admin.consultees.map(function(consultee, index){
                      return <ListGroupItem key={index} href="#" tag="a">{consultee.firstName+" "+consultee.lastName} </ListGroupItem>
                    })}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
  }
}

export default AdminPanel;

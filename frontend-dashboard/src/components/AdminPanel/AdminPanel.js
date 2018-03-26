import React,{Component} from 'react';
import {Row,Col,ListGroup,ListGroupItem,Card,CardHeader,CardBody} from 'reactstrap';

class AdminPanel extends Component{

  constructor(){
    super();
  }
  componentDidMount(){
    this.props.actions.getConsultants({

    });
    this.props.actions.getConsultees({

    });
  }

  handleConsultantClick(id,event){
    console.log("id : "+id);
    this.props.actions.setConsultantId({
      id : id
    })


  };

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
                      return <ListGroupItem key={index} onClick={this.handleConsultantClick.bind(this, consultant.id)} href="#" tag="a">{consultant.firstName+" "+consultant.lastName }</ListGroupItem>
                    },this)}
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

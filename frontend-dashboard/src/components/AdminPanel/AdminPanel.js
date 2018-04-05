import React,{Component} from 'react';
import {Row,Col,ListGroup,ListGroupItem,Card,CardHeader,CardBody,CardImg} from 'reactstrap';

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

  handleConsultantClick(id,firstName,lastName,event){
    console.log("id : "+id);
    this.props.actions.setConsultantId({
      id : id,
      firstName : firstName,
      lastName : lastName
    })


  };

  render(){
      return (
        <div>
          <Row>
            <Col xs="12" sm="6">
              <Card>
                <CardImg top width="100%" src="img/classes/teacher.jpg" alt="Card image cap" />
                <CardHeader>
                  <strong>Teachers</strong>
                </CardHeader>
                <CardBody>
                  <ListGroup>
                    {this.props.admin.consultants.map(function(consultant, index){
                      return <ListGroupItem key={index} onClick={this.handleConsultantClick.bind(this, consultant.id,consultant.firstName,consultant.lastName)} href="#/dashboard/admin_panel/consultant" tag="a">{consultant.firstName+" "+consultant.lastName }</ListGroupItem>
                    },this)}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" sm="6">
              <Card>
                <CardImg top width="100%" src="img/classes/studentgirl2.jpg" alt="Card image cap" />
                <CardHeader>
                  <strong>Students</strong>
                </CardHeader>
                <CardBody>
                  <ListGroup>
                    {this.props.admin.consultees.map(function(consultee, index){
                      return <ListGroupItem key={index} href="#/dashboard/admin_panel/test" tag="a">{consultee.firstName+" "+consultee.lastName} </ListGroupItem>
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

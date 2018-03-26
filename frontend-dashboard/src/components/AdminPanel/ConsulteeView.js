import React,{Component} from 'react';
import {Row,Col,Card,CardHeader,CardBody,ListGroup,ListGroupItem} from 'reactstrap';

function AvailableStudents(props) {
  if(!props.consultees){
    return null;
  }else {
    return( <ListGroup>
    {
      props.consultees.map(function (consultee, index) {
        <ListGroupItem key={index}>{consultee.firstName + " " + consultee.lastName}</ListGroupItem>
      }, this)
    }
    </ListGroup>);
  }
}

function OtherAvailableStudents(props) {
  if(!props.consultees){
    return null;
  }else{
    return(
      <ListGroup>
    {props.consultees.map(function (consultee,index) {
      return (<ListGroupItem key={index}>{consultee.firstName}</ListGroupItem>);
    })}
      </ListGroup>
    )
  }
}

class ConsulteeView extends Component{

  constructor() {
    super();
  }

  // handleConsulteeClick(id,event){
  //   console.log("id : "+id);
  //   // this.props.actions.setConsultantId({
  //   //   id : id
  //   // })
  // };



  render(){
    var consultant = this.props.admin.consultants.find(function (obj) {
      return obj.id === this.props.admin.consultantId;
    },this);
    if(consultant) {
      var consultees = consultant.relatedUsers;
      console.log("consultees: " + consultees);
    }else{
      var consultees = null;
    }

      return (
        <div>
          <h1>Yasith</h1>
          <Row>
            <Col xs="12" sm="6">
              <Card>
                <CardHeader>
                  <strong>Students</strong>

                </CardHeader>
                <CardBody>
                    <AvailableStudents consultees={consultees}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Card>
              <CardHeader>
              <strong>Other Students</strong>
              </CardHeader>
              <CardBody>
                  <OtherAvailableStudents consultees={this.props.admin.consultees}/>
              </CardBody>
            </Card>
          </Row>
        </div>
      )
  }
}

export default ConsulteeView;

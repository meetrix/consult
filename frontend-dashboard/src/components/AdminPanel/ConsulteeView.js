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

  function handleConsulteeClick(id,firstName,lastName,event){
    console.log("handleConsulteeClick : "+firstName);
    props.updateRelatedUsers({
      id : props.consultantId,
      consulteeId : id,
      consulteeFirstName:firstName,
      consulteeLastName:lastName
    })
  }


  if(!props.consultees){
    return null;
  }else{
    return(
      <ListGroup>
    {props.consultees.map(function (consultee,index) {
      return (<ListGroupItem key={index} onClick={handleConsulteeClick.bind(this,consultee.id,consultee.firstName,consultee.lastName)}>{consultee.firstName +" "+consultee.lastName}</ListGroupItem>);
    },this)}
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
                  <OtherAvailableStudents consultees={this.props.admin.consultees} consultantId={this.props.admin.consultantId} updateRelatedUsers={this.props.action.updateRelatedUsers}/>
              </CardBody>
            </Card>
          </Row>
        </div>
      )
  }
}

export default ConsulteeView;

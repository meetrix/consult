import React,{Component} from 'react';
import {Row,Col,Card,CardHeader,CardBody,ListGroup,ListGroupItem} from 'reactstrap';

function AvailableStudents(props) {
  if(!props.consultees){
    return null;
  }else {
    console.log("AvailableStudents: "+props.consultees[0].firstName);
    return( <ListGroup>
    {
      props.consultees.map(function (consultee, index) {
        return <ListGroupItem key={index}>{consultee.firstName + " " + consultee.lastName}</ListGroupItem>
      })
    }
    </ListGroup>);
  }
}



function OtherAvailableStudents(props) {

  let status = true;

  function handleConsulteeClick(id,firstName,lastName,event){
    console.log("handleConsulteeClick : "+firstName);
    props.updateRelatedUsers({
      id : props.consultantId.id,
      consultantFirstName : props.consultantId.firstName,
      consultantLastName : props.consultantId.lastName,
      consulteeId : id,
      consulteeFirstName:firstName,
      consulteeLastName:lastName
    },{index:props.indexOfConsultant});
  }


  if(!props.consultees){
    return null;
  }else{
    return(
      <ListGroup>
    {props.consultees.map(function (consultee,index) {
      status = true;
      if(props.usedConsultees) props.usedConsultees.map(function(usedConsultee){
        if(consultee.id == usedConsultee.id) status = false;
      });

      if(status == true){ return (<ListGroupItem key={index} onClick={handleConsulteeClick.bind(this,consultee.id,consultee.firstName,consultee.lastName)}>{consultee.firstName +" "+consultee.lastName}</ListGroupItem>);}
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
    var indexOf = null;
    var consultant = this.props.admin.consultants.find(function (obj,index) {
      indexOf = index;
      return obj.id === this.props.admin.consultantId.id;
    },this);
    if(consultant) {
      var consultees = consultant.relatedUsers;
      console.log("consultees: " + consultees);
      console.log("index: "+indexOf);
    }else{
      var consultees = null;
    }

      return (
        <div>
          <h1>{this.props.admin.consultantId.firstName}</h1>
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
                  <OtherAvailableStudents consultees={this.props.admin.consultees} consultantId={this.props.admin.consultantId} updateRelatedUsers={this.props.action.updateRelatedUsers} usedConsultees={consultees} getConsultants={this.props.action.getConsultants} indexOfConsultant = {indexOf}/>
              </CardBody>
            </Card>
          </Row>
        </div>
      )
  }
}

export default ConsulteeView;

import React,{Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';

class AdminPanel extends Component{

  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log("ADMIN PANEL MOUNTED");
    this.props.actions.getConsultants({

    });
  }

  render(){
      return (
        <div>
          <h2> Teachers </h2>
          <ListGroup>
            {this.props.admin.consultants.map(function(consultant, index){
              return <ListGroupItem key={index}>{consultant.firstName+" "+consultant.lastName}</ListGroupItem>
            })}
          </ListGroup>
        </div>
      )
  }
}

export default AdminPanel;

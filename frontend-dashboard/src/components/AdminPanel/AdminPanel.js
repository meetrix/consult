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
    if(this.props.consultants) {
      return (
        <div>
          <h2> Teachers </h2>
          <ListGroup>
            {this.props.consultants.map(consultant, index => {
              <ListGroupItem key={index}>{consultant.firstName}</ListGroupItem>
            })}
          </ListGroup>
        </div>
      )
    }else{
      return null;
    }
  }
}

export default AdminPanel;

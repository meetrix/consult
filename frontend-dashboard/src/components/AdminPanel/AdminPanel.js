import React,{Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';

class AdminPanel extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.actions.getConsultants({

    });
  }

  render(){
    return(
      <div>
        <h2> Teachers </h2>
      <ListGroup>
        <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
      </ListGroup>
      </div>
    )
  }
}

export default AdminPanel;

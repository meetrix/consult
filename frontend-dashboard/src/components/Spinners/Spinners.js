/**
 * Created by supun on 12/03/18.
 */
import React,{Component} from 'react'
import {Col} from 'reactstrap'
import Spinner from 'react-spinkit'

class Spinners extends Component{

  render(){
    return(
      <Col>
        <Spinner name="circle" color="blue"/>
      </Col>

    )
  }

}

export default Spinners

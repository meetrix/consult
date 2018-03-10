import React,{Component} from 'react';
import {Table} from 'reactstrap';
import PropTypes from 'prop-types'
import {ROLE} from '../../constants/constant'

class SessionList extends Component{
    constructor(props){
        super(props)
    }

    records(){
        const records = this.props.records
        let recordElement;
        if(this.props.user.role == ROLE.CONSULTANT) {
            recordElement = records.map((record) =>
                <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.consulteeName}</td>
                    <td>{record.date}</td>
                    <td>{record.startedTime}</td>
                    <td>{record.duration}</td>
                    <td>{record.classFee}</td>
                    {/*<td><Badge color="success">{record.status}</Badge></td>*/}
                </tr>
            )
            return recordElement;
        }
        else if(this.props.user.role == ROLE.CONSULTEE) {
            recordElement = records.map((record) =>
                <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.consultantName}</td>
                    <td>{record.date}</td>
                    <td>{record.startedTime}</td>
                    <td>{record.duration}</td>
                    <td>{record.classFee}</td>
                </tr>
            )
            return recordElement;
        }
        else if(this.props.user.role == ROLE.ADMIN) {
            recordElement = records.map((record) =>
                <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.consulteeName}</td>
                    <td>{record.consultantName}</td>
                    <td>{record.date}</td>
                    <td>{record.startedTime}</td>
                    <td>{record.duration}</td>
                    <td>{record.classFee}</td>
                </tr>
            )
            return recordElement;
        }
    }
    render(){
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    {this.props.user.role == ROLE.CONSULTANT && <th>Consultee</th>}
                    {this.props.user.role == ROLE.CONSULTEE && <th>Consultant</th>}
                    {this.props.user.role == ROLE.ADMIN &&<th>Consultant</th>}
                    {this.props.user.role == ROLE.ADMIN && <th>Consultee</th>}
                    <th>Date</th>
                    <th>Started Time</th>
                    <th>Duration(Mins)</th>
                    <th>Class Fee(LKR)</th>
                </tr>
                </thead>
                <tbody>
                    {this.records()}
                </tbody>
            </Table>
        );
    }
}

SessionList.propTypes={

    user:PropTypes.shape({
        role:PropTypes.number.isRequired
    }),
    records:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        consulteeName:PropTypes.string,
        consultantName:PropTypes.string,
        date:PropTypes.string.isRequired,
        startedTime:PropTypes.string.isRequired,
        duration:PropTypes.string.isRequired,
        classFee:PropTypes.string

    }))
}

export default SessionList;
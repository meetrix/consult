import React,{Component} from 'react';
import {Table} from 'reactstrap';

class SessionList extends Component{
    render(){
        return (
            <Table striped>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Consultant</th>
                    <th>Consultee</th>
                    <th>Date</th>
                    <th>Started Time</th>
                    <th>Duration(Mins)</th>
                    <th>Class Fee(LKR)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        );
    }
}

export default SessionList;
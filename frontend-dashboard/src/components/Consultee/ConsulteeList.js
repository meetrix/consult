/**
 * Created by supun on 07/03/18.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Badge,
    InputGroupText,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

import {ROLE} from '../../constants/constant'

class ConsulteeList extends Component{


    constructor(props){
        super(props)
    }

    headers(){
        let header;
        if(this.props.user.role == ROLE.CONSULTANT ){
             header = <tr>
                            <th>ConsulteeProfile</th>
                            <th>ConsulteeName</th>
                            <th>NextSession</th>
                        </tr>
            return header
        }
        else if(this.props.user.role == ROLE.CONSULTEE ){
             header = <tr>
                <th>ConsultantProfile</th>
                <th>ConsultantName</th>
                <th>NextSession</th>
            </tr>
            return header
        }
        else if(this.props.user.role == ROLE.ADMIN ){
            header = <tr>
                <th>ConsultantProfile</th>
                <th>ConsultantName</th>
                <th>ConsulteeProfile</th>
                <th>ConsulteeName</th>
                <th>NextSession</th>
            </tr>
            return header
        }
    }
    records(){
        const records = this.props.records
        let recordElement;
        if(this.props.user.role == ROLE.CONSULTANT) {
             recordElement = records.map((record) =>
                <tr key={record.id}>
                    <td> <img   alt="Avatar"  src={record.consulteeProfile}/> </td>
                    <td>{record.consulteeName}</td>
                    <td>{record.nextSession}</td>
                    {/*<td><Badge color="success">{record.status}</Badge></td>*/}
                </tr>
            )
            return recordElement;
        }
        else if(this.props.user.role == ROLE.CONSULTEE) {
             recordElement = records.map((record) =>
                <tr key={record.id}>
                    <td> <img   alt="Avatar"  src={record.consultantProfile}/> </td>
                    <td>{record.consultantName}</td>
                    <td>{record.nextSession}</td>
                    {/*<td><Badge color="success">{record.status}</Badge></td>*/}
                </tr>
            )
            return recordElement;
        }
        else if(this.props.user.role == ROLE.ADMIN) {
            recordElement = records.map((record) =>
                <tr key={record.id}>
                    <td> <img   alt="Avatar"  src={record.consultantProfile}/> </td>
                    <td>{record.consultantName}</td>
                    <td> <img   alt="Avatar"  src={record.consultantProfile}/> </td>
                    <td>{record.consultantName}</td>
                    <td>{record.nextSession}</td>
                    {/*<td><Badge color="success">{record.status}</Badge></td>*/}
                </tr>
            )
            return recordElement;
        }
    }
    render(){

        return(
            <Col>
                <div className="animated fadeIn">
                    <Row>
                        <Col xs="12" lg="12">
                            <Card>
                                <CardHeader>
                                    <i className="fa fa-align-justify"></i> Payments
                                </CardHeader>
                                <CardBody>
                                    <Table responsive striped>
                                        <thead>
                                        {this.headers()}
                                        </thead>
                                        <tbody>
                                        {this.records()}
                                        </tbody>
                                    </Table>
                                    {/*<Pagination>*/}
                                    {/*<PaginationItem disabled><PaginationLink previous href="#">Prev</PaginationLink></PaginationItem>*/}
                                    {/*<PaginationItem active>*/}
                                    {/*<PaginationLink href="#">1</PaginationLink>*/}
                                    {/*</PaginationItem>*/}
                                    {/*<PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>*/}
                                    {/*<PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>*/}
                                    {/*<PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>*/}
                                    {/*<PaginationItem><PaginationLink next href="#">Next</PaginationLink></PaginationItem>*/}
                                    {/*</Pagination>*/}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }

}
ConsulteeList.propTypes={

    user:PropTypes.shape({
        role:PropTypes.number.isRequired
    }),
    records:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        consulteeName:PropTypes.string,
        consulteeProfile:PropTypes.string,
        consultantName:PropTypes.string,
        consultantProfile:PropTypes.string,
        nextSession:PropTypes.string.isRequired,

    }))
}

export default ConsulteeList
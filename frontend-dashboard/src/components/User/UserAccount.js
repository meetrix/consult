/**
 * Created by supun on 24/02/18.
 */
/**
 * Created by supun on 23/02/18.
 */
/**
 * Created by supun on 23/02/18.
 */
import React,{Component} from 'react';
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

class UserAccount extends Component{

    constructor(props) {
        super(props);
        this.accoutRecords =this.accoutRecords.bind(this);

    }
    accoutRecords(){
    const records = this.props.records
    const recordElement = records.map((record) =>
        <tr key={record.id} >
            <td>{record.date}</td>
            <td>{record.amount}</td>
            <td><Badge color="success">{record.status}</Badge></td>
        </tr>

    )
    return recordElement;




}
    render() {
        return (
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
                                    <tr>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<tr>*/}
                                        {/*<td>Yiorgos Avraamu</td>*/}
                                        {/*<td>2012/01/01</td>*/}
                                        {/*<td>Member</td>*/}
                                        {/*<td>*/}
                                            {/*<Badge color="success">Active</Badge>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                        {/*<td>Avram Tarasios</td>*/}
                                        {/*<td>2012/02/01</td>*/}
                                        {/*<td>Staff</td>*/}
                                        {/*<td>*/}
                                            {/*<Badge color="danger">Banned</Badge>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                        {/*<td>Quintin Ed</td>*/}
                                        {/*<td>2012/02/01</td>*/}
                                        {/*<td>Admin</td>*/}
                                        {/*<td>*/}
                                            {/*<Badge color="secondary">Inactive</Badge>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                        {/*<td>Enéas Kwadwo</td>*/}
                                        {/*<td>2012/03/01</td>*/}
                                        {/*<td>Member</td>*/}
                                        {/*<td>*/}
                                            {/*<Badge color="warning">Pending</Badge>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}
                                    {/*<tr>*/}
                                        {/*<td>Agapetus Tadeáš</td>*/}
                                        {/*<td>2012/01/21</td>*/}
                                        {/*<td>Staff</td>*/}
                                        {/*<td>*/}
                                            {/*<Badge color="success">Active</Badge>*/}
                                        {/*</td>*/}
                                    {/*</tr>*/}

                                    {this.accoutRecords()}
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

UserAccount.propTypes={
    records:PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    status:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired}))
}

export default UserAccount;
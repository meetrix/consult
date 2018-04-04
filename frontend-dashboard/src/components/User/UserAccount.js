/**
 * Created by supun on 24/02/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Table,
} from 'reactstrap';

class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.accoutRecords = this.accoutRecords.bind(this);
  }
  accoutRecords() {
    const records = this.props.records;
    const recordElement = records.map(record =>
      (
        <tr key={record.id} >
          <td>{record.date}</td>
          <td>{record.amount}</td>
          <td><Badge color="success">{record.status}</Badge></td>
        </tr>));
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
                  <i className="fa fa-align-justify" /> Payments
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
                      {this.accoutRecords()}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}

UserAccount.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  })),
};

export default UserAccount;

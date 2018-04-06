import React, { Component } from 'react';
import { Col, Row, Card, CardHeader, CardBody, CardFooter, Media, CardDeck, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Widget04 from '../../components/Widgets/Widget04';

class ConsultantView extends Component {
  constructor(props) {
    super(props);
    this._backToDashBoard = this._backToDashBoard.bind(this);
  }
  _backToDashBoard() {
    this.props.actions.viewConsultantSummary({ consultantIndex: -1 });
  }
  render() {
    return (
      <Col>
        <Row>
          <Col sm="6" md="2">
            <Widget04 icon="icon-people" color="info" header="87.500" value="25">Visitors</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-user-follow" color="success" header="385" value="25">New Clients</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-basket-loaded" color="warning" header="1238" value="25">Products sold</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-pie-chart" color="primary" header="28%" value="25">Returning Visitors</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speedometer" color="danger" header="5:34:11" value="25">Avg. Time</Widget04>
          </Col>
          <Col sm="6" md="2">
            <Widget04 icon="icon-speech" color="info" header="972" value="25">Comments</Widget04>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <CardHeader>
                  consultant detail
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="3">
                      <Label>Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">Sandamali</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <Label>Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">Sandamali</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3">
                      <Label>Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <p className="form-control-static">Sandamali</p>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Col md="3">
                    <Button size="sm" className="btn-linkedin icon"><span>LinkedIn</span></Button>
                  </Col>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  Qualification
                </CardHeader>
                <CardBody>
                  <Label>Bsc Engineering</Label>
                  <Label>Teaching Royal Collage</Label>
                  <Label>English Diploma Cambridge</Label>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col md="3" xs="3">
                      <Button size="sm" className="btn-google-plus icon"><span>Google+</span></Button>
                    </Col>
                    <Col xs="8" md="8">
                      <p className="form-control-static">Sandamali@gmail.com</p>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <Card>
                  <Media>
                    <Media left href="#">
                      <Media object src="img/avatars/1.jpg" alt="admin@meetrix.io" />
                    </Media>
                    <Media body>
                                amozing comsulant
                    </Media>
                  </Media>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Media>
                    <Media left href="#">
                      <Media object src="img/avatars/1.jpg" alt="admin@meetrix.io" />
                    </Media>
                    <Media body>
                                amozing comsulant
                    </Media>
                  </Media>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <Media>
                    <Media left href="#">
                      <Media object src="img/avatars/1.jpg" alt="admin@meetrix.io" />
                    </Media>
                    <Media body>
                                amozing comsulant
                    </Media>
                  </Media>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Media>
                    <Media left href="#">
                      <Media object src="img/avatars/1.jpg" alt="admin@meetrix.io" />
                    </Media>
                    <Media body>
                                  amozing comsulant
                    </Media>
                  </Media>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Card>
            <CardFooter>
              <Button onClick={this._backToDashBoard} type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o" /> Back</Button>
            </CardFooter>
          </Card>
        </Row>
      </Col>
    );
  }
}
ConsultantView.propTypes = {
  actions: PropTypes.shape().isRequired,
};
export default ConsultantView;

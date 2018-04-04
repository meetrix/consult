/**
 * Created by supun on 06/03/18.
 */
import React, { Component } from 'react';
import { Col, Row, Card, CardBody, CardColumns, Label, CardImg, CardDeck, CardFooter, CardTitle, CardHeader, Media } from 'reactstrap';

import Call from 'react-icons/lib/md/call';
import Message from 'react-icons/lib/md/chat-bubble-outline';

class ContactConsult extends Component {
  render() {
    return (
      <Col>
        <Row style={{ backgroundColor: 'white' }}>
          <Col md={{ size: 3 }}style={{ background: 'linear-gradient(to right, transparent 50%, white 50%)' }}>
            <Media className="img-avatar" object style={{ minWidth: '128px' }}src="img/avatars/5.jpg" alt="admin@meetrix.io" />
          </Col>
          <Col md="3"style={{ margin: 'auto', display: 'block', backgroundColor: 'white' }}>
            <span style={{ margin: 'auto', display: 'block' }} className="fa-stack fa-2x">
              <i style={{ color: 'green' }} className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-phone fa-stack-1x fa-inverse" />
            </span>
          </Col>
          <Col md="3"style={{ margin: 'auto', display: 'block', backgroundColor: 'white' }}>
            <span style={{ margin: 'auto', display: 'block' }} className="fa-stack fa-2x">
              <i style={{ color: 'green' }} className="fa fa-circle fa-stack-2x" />
              <i className="fa fa-envelope fa-stack-1x fa-inverse" />
            </span>
          </Col>
        </Row>
        <Row ><Col className="text-center"><h3>Andrew Dias</h3></Col></Row>
        <Row><Col className="text-center"><h6>Lecture,University of Sidney</h6></Col></Row>
        <Row />
        <Row><Col className="text-center"><h6>Bsc University of Melbourne</h6></Col></Row>
        <Row><Col className="text-center"><h6>5 years teaching experience</h6></Col></Row>
        <Row><Col className="text-center"><h6>+94711135012</h6></Col></Row>
        <Row><Col className="text-center"><h6>andrew@mathslab.com</h6></Col></Row>


      </Col>
    );
  }
}

export default ContactConsult;

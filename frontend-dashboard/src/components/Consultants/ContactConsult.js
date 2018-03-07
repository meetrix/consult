/**
 * Created by supun on 06/03/18.
 */
import React,{Component} from 'react';
import {Col,Row,Card,CardBody,CardColumns,Label,CardImg,CardDeck,CardFooter,CardTitle,CardHeader,Media} from 'reactstrap'

import Call from 'react-icons/lib/md/call';
import Message from 'react-icons/lib/md/chat-bubble-outline';

class ContactConsult extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Col>

                {/*<Card body className="text-center"  inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>*/}
                    {/*<CardImg top width="100%" src="img/avatars/1.jpg" alt="admin@meetrix.io" />*/}
                    {/*<CardBody>*/}
                        {/*<Row ><Col className="text-center"><h3>Andrew Dias</h3></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>Lecture,University of Sidney</h6></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>Bsc University of Melbourne</h6></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>5 years teaching experience</h6></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>+94711135012</h6></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>andrew@mathslab.com</h6></Col></Row>*/}
                    {/*</CardBody>*/}
                    {/*<CardFooter>*/}
                        {/*<Row>*/}
                            {/*/!*<Col> <img  className="img-avatar" alt="admin@meetrix.io" src="img/avatars/1.jpg"/></Col>*!/*/}
                            {/*<Col><Row ><Col className="text-center">Contact Tutor</Col></Row>*/}
                                {/*<Row>*/}
                                    {/*<Col><Call size={30} color='blue' style={{ margin:"auto" }}/></Col>*/}

                                {/*</Row> </Col>*/}
                            {/*<Col><Col><Message size={30} color='green' style={{ margin:"auto" }}/></Col></Col>*/}
                        {/*</Row>*/}
                    {/*</CardFooter>*/}
                {/*</Card>*/}
                {/*<Card>*/}
                    {/*<CardBody>*/}
                        {/*<Row>*/}
                            {/*<Col>*/}
                                {/*<Media>*/}
                                    {/*<Media left href="#">*/}
                                        {/*<Row>*/}
                                            {/*<Col>*/}
                                                {/*<Media className="img-avatar" object style={{minWidth: "128px",}}src="img/avatars/5.jpg" alt="admin@meetrix.io" />*/}
                                            {/*</Col>*/}

                                        {/*</Row>*/}

                                    {/*</Media>*/}
                                {/*</Media>*/}
                            {/*</Col>*/}
                            {/*<Col style={{ margin:"auto",display:'block' }}><Call size={50} color='blue' style={{ marginLeft:"auto",marginRight:"auto" }}/></Col>*/}
                            {/*<Col style={{ margin:"auto",display:'block' }}><Message size={50} color='green' style={{ margin:"auto" }}/></Col>*/}

                        {/*</Row>*/}

                        {/*<Row/>*/}
                        {/*<Row ><Col className="text-center"><h3>Andrew Dias</h3></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>Lecture,University of Sidney</h6></Col></Row>*/}
                        {/*<Row/>*/}
                        {/*<Row><Col className="text-center"><h6>Bsc University of Melbourne</h6></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>5 years teaching experience</h6></Col></Row>*/}
                        {/*<Row/>*/}

                    {/*</CardBody>*/}
                    {/*<CardFooter  style={{ backgroundColor: '#3CB371', borderColor: '#333' }}>*/}
                        {/*<Row><Col className="text-center"><h6>+94711135012</h6></Col></Row>*/}
                        {/*<Row><Col className="text-center"><h6>andrew@mathslab.com</h6></Col></Row>*/}
                    {/*</CardFooter>*/}
                {/*</Card>*/}
                <Row style={{backgroundColor:'white'}}>
                    <Col md={{size:3}}style={{background: 'linear-gradient(to right, transparent 50%, white 50%)'}}>
                        <Media className="img-avatar" object style={{minWidth: "128px",}}src="img/avatars/5.jpg" alt="admin@meetrix.io" />
                    </Col>
                    <Col md="3"style={{margin:'auto',display:'block',backgroundColor:'white'}}>
                        <span style={{margin:'auto',display:'block'}} className="fa-stack fa-2x">
                            <i style={{color:'green'}} className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-phone fa-stack-1x fa-inverse"></i>
                        </span>
                    </Col>
                    <Col md ="3"style={{margin:'auto',display:'block',backgroundColor:'white'}}>
                        <span style={{margin:'auto',display:'block'}} className="fa-stack fa-2x">
                            <i style={{color:'green'}} className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-envelope fa-stack-1x fa-inverse"></i>
                        </span>
                    </Col>
                </Row>
                <Row ><Col className="text-center"><h3>Andrew Dias</h3></Col></Row>
                <Row><Col className="text-center"><h6>Lecture,University of Sidney</h6></Col></Row>
                <Row/>
                <Row><Col className="text-center"><h6>Bsc University of Melbourne</h6></Col></Row>
                <Row><Col className="text-center"><h6>5 years teaching experience</h6></Col></Row>
                <Row><Col className="text-center"><h6>+94711135012</h6></Col></Row>
                <Row><Col className="text-center"><h6>andrew@mathslab.com</h6></Col></Row>


            </Col>
        )
    }


}

export default ContactConsult
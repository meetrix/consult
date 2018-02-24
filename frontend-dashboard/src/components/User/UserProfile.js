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
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Collapse,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';
class UserProfile extends Component{

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: true };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>

                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <strong>ME</strong>
                                {/*<small> Form</small>*/}
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label htmlFor="first-name">First Name</Label>
                                    <Input type="text" id="first-name" placeholder="Enter your first name"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input type="text" id="last-name" placeholder="Enter your last name"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="text" id="emain" placeholder="Enter email address"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    <Input type="text" id="address" placeholder="Enter your address"/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <strong>Education</strong>
                                {/*<small> Form</small>*/}
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label htmlFor="school">School</Label>
                                    <Input type="text" id="school" placeholder="Enter your school"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="district">District</Label>
                                    <Input type="text" id="district" placeholder="Enter your district"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="stream">Stream</Label>
                                    <Input type="text" id="stream" placeholder="Enter your stream"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input type="text" id="subject" placeholder="subject"/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label htmlFor="file-input">File input</Label>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="file" id="file-input" name="file-input"/>
                                    </Col>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                                <FormGroup row>
                                    <Col md="3">
                                        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                                        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                                    </Col>

                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

}

UserProfile.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired
}

export default UserProfile;
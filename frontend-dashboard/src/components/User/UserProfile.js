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


        this.state={
            collapse: true

        }
        console.log(this.props.user)
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    _onFirstNameChange(event){
        event.preventDefault();
        this.props.actions.updateFirstName({firstName:event.target.value})

    }
    _onLastNameChange(event){
        event.preventDefault();
        this.props.actions.updateLastName({lastName:event.target.value})
    }
    _onEmailChange(event){
        event.preventDefault();
        this.props.actions.updateEmail({email:event.target.value})
    }
    _onAddressChange(event){
        event.preventDefault();
        this.props.actions.updateAddress({address:event.target.value})

    }
    _onSchoolChange(event){
        event.preventDefault();
        this.props.actions.updateSchool({school:event.target.value})
    }
    _onDistrictChange(event){
        event.preventDefault();
        this.props.actions.updateDistrict({district:event.target.value})
    }
    _onStreamChange(event){
        event.preventDefault();
        this.props.actions.updateStream({stream:event.target.value})
    }
    _onSubjectChange(event){
        event.preventDefault();
        this.props.actions.updateSubject({subject:event.target.value})
    }

    _onImageChange(event){
        event.preventDefault();

        let reader = new FileReader();
        let imageFile = event.target.files[0];

        reader.onloadend = () => {
            this.props.actions.updateImage({
                imageFile: imageFile,
                imageUrl: reader.result
            })
        }

        reader.readAsDataURL(imageFile)

    }

    _handleSubmit(){

        // console.log(this.state.user)
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
                                    <Input type="text" id="first-name" onChange={this._onFirstNameChange.bind(this)} value={this.props.user.firstName}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="last-name">Last Name</Label>
                                    <Input type="text" id="last-name" onChange={this._onLastNameChange.bind(this)} value={this.props.user.lastName} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="text" id="email" onChange={this._onEmailChange.bind(this)} value={this.props.user.email}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    <Input type="text" id="address" onChange={this._onAddressChange.bind(this)} value={this.props.user.address}/>
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
                                    <Input type="text" id="school" onChange={this._onSchoolChange.bind(this)} value={this.props.user.school}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="district">District</Label>
                                    <Input type="text" id="district" onChange={this._onDistrictChange.bind(this)} value={this.props.user.district}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="stream">Stream</Label>
                                    <Input type="text" id="stream" onChange={this._onStreamChange.bind(this)} value={this.props.user.stream}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input type="text" id="subject" onChange={this._onSubjectChange.bind(this)} value={this.props.user.subject}/>
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
                                        <img src={this.props.user.imageUrl} className="img-avatar" alt="admin@meetrix.io"/>
                                    </Col>
                                    <Col xs="12" md="9">
                                        <Input type="file" id="file-input" name="file-input" onChange={this._onImageChange.bind(this)}/>
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
                                        <Button type="submit" size="sm" color="primary" onClick={this._handleSubmit.bind(this)}><i className="fa fa-dot-circle-o"></i> Submit</Button>
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
    user:PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        school: PropTypes.string.isRequired,
        district: PropTypes.string.isRequired,
        stream: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
    }),
    actions:PropTypes.shape({
        updateFirstName:PropTypes.func.isRequired,
        updateLastName:PropTypes.func.isRequired,
        updateEmail:PropTypes.func.isRequired,
        updateImage:PropTypes.func.isRequired,
        updateSchool:PropTypes.func.isRequired,
        updateAddress:PropTypes.func.isRequired,
        updateDistrict:PropTypes.func.isRequired,
        updateStream:PropTypes.func.isRequired,
        updateSubject:PropTypes.func.isRequired,
    }),

}

export default UserProfile;
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
            collapse: true,
            username:'',
            role:'',
            email:''
        };
        console.log(this.props.user);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    _handleSubmit(){

        // console.log(this.state.user)
    }

    handleInputChange(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>

                    <Col xs="12" sm="6">
                        <Card>
                            <CardHeader>
                                <strong>{this.props.user.username}</strong>
                                {/*<small> Form</small>*/}
                            </CardHeader>
                            <CardBody>
                              <FormGroup>
                                <Label htmlFor="first-name">User Name</Label>
                                <Input type="text" name="firstName" onChange={this.handleInputChange} value={this.props.user.username}/>
                              </FormGroup>
                              <FormGroup>
                                <Label htmlFor="first-name">Role</Label>
                                <Input type="text" name="role" onChange={this.handleInputChange} value={this.props.user.username}/>
                              </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="first-name">First Name</Label>
                                    {/*<Input type="text" id="first-name" onChange={this._onFirstNameChange.bind(this)} value={this.props.user.firstName}/>*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="last-name">Last Name</Label>
                                    {/*<Input type="text" id="last-name" onChange={this._onLastNameChange.bind(this)} value={this.props.user.lastName} />*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="text" id="email" name="email" onChange={this.handleInputChange} value={this.props.user.attributes.email}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="address">Address</Label>
                                    {/*<Input type="text" id="address" onChange={this._onAddressChange.bind(this)} value={this.props.user.address}/>*/}
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
                                    {/*<Input type="text" id="school" onChange={this._onSchoolChange.bind(this)} value={this.props.user.school}/>*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="district">District</Label>
                                    {/*<Input type="text" id="district" onChange={this._onDistrictChange.bind(this)} value={this.props.user.district}/>*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="stream">Stream</Label>
                                    {/*<Input type="text" id="stream" onChange={this._onStreamChange.bind(this)} value={this.props.user.stream}/>*/}
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="subject">Subject</Label>
                                    {/*<Input type="text" id="subject" onChange={this._onSubjectChange.bind(this)} value={this.props.user.subject}/>*/}
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
                                        {/*<img src={this.props.user.imageUrl} className="img-avatar" alt="admin@meetrix.io"/>*/}
                                    </Col>
                                    <Col xs="12" md="9">
                                        {/*<Input type="file" id="file-input" name="file-input" onChange={this._onImageChange.bind(this)}/>*/}
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
        // firstName: PropTypes.string.isRequired,
        // lastName: PropTypes.string.isRequired,
        username: PropTypes.string,
        // email: PropTypes.string.isRequired,
        // imageUrl: PropTypes.string.isRequired,
        // address: PropTypes.string.isRequired,
        // school: PropTypes.string.isRequired,
        // district: PropTypes.string.isRequired,
        // stream: PropTypes.string.isRequired,
        // subject: PropTypes.string.isRequired,
    })
}

export default UserProfile;

/**
 * Created by supun on 23/02/18.
 */
/**
 * Created by supun on 23/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {
    Alert,
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardImg,
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
            firstName: this.props.user.firstName||'',
            lastName: this.props.user.lastName||'',
            address: this.props.user.address||''
        };
        console.log(this.props.user);
        console.log("firstname: "+this.state.firstName);
        this.toggle = this.toggle.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
      this.props.actions.profileUpdated({
        profile_updated : false
      })
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    _handleSubmit(){
      //console.log("id: "+this.props.user.initData.id);
        this.props.actions.updateProfileInfo({
          id:this.props.user.id,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          address:this.state.address,
        });
        // console.log(this.state.user)
    }

    handleInputChange(event){
      console.log("handleInputChange");
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      console.log("value: "+value);
      this.setState({
        [name]: value
      });
      console.log("state: "+this.state.firstName);
    }

    render() {

        return (
          <div className="animated fadeIn">
            <Row>

              <Col xs="12" sm="6">
                {this.props.user.profile_updated &&
                  <Alert color="success">Profile Updated Successfully!</Alert>
                }
                <Card>
                  <CardImg top width="100%" src="img/classes/profile.jpg" alt="Card image cap" />
                  <CardHeader>
                    <strong>{this.props.user.firstName}</strong>
                    {/*<small> Form</small>*/}
                  </CardHeader>
                  <CardBody>
                    <FormGroup>
                      <Label htmlFor="first-name">First Name</Label>
                      <Input type="text" id="first-name" name="firstName" onChange={this.handleInputChange}
                             defaultValue={this.props.user.firstName}/>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input type="text" id="last-name" name="lastName" onChange={this.handleInputChange} defaultValue={this.props.user.lastName}/>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="first-name">Role</Label>
                      <Input plaintext>{this.props.user.role}</Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email">Email</Label>
                      <Input plaintext>{this.props.user.email}</Input>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="address">Address</Label>
                      <Input type="text" id="address" name="address" onChange={this.handleInputChange} defaultValue={this.props.user.address}/>
                    </FormGroup>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" sm="6">
                <Card>
                  <CardHeader>
                    <strong>Consultees</strong>
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
                        <Button type="submit" size="sm" color="primary" onClick={this._handleSubmit.bind(this)}><i
                          className="fa fa-dot-circle-o"></i>Update Profile</Button>
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
        //username: PropTypes.string,
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

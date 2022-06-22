import React, { Component } from 'react';
import { connect } from 'react-redux';

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    Spinner
} from 'reactstrap';
import FooterSection from '../FooterSection/FooterSection';
// core components
// import UserHeader from "components/Headers/UserHeader.js";
// import '../../assets/plugins/nucleo/css/nucleo.css';
import img from '../../assets/img/avatar.jpg';
import './ChangePassword.css';
import { handleUpdatePassword } from '../../actions/userProfile';

class ChangePassword extends Component {
    state = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        isMakingRequest: false
    };
    uploadedImage = React.createRef(null);
    imageUploader = React.createRef(null);

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
      e.preventDefault();

        const {
            oldPassword,
            newPassword,
            confirmPassword,
        } = this.state;

        if (oldPassword === '' || newPassword === '') {
          alert('please fill in all fields')
          return;
        }
        if (newPassword !== confirmPassword) {
            alert('New Passwords do not match');
            return;
        }
        this.setState({
          isMakingRequest: true
        })
        this.props.updatePassword({ oldPassword, newPassword }).then(res => {
          this.setState({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            isMakingRequest: false
          })
        })
    };

    handleImageUpload = (e) => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = this.uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    render() {
        const { oldPassword, newPassword, confirmPassword, isMakingRequest } = this.state;
        return (
            <>
                {/* <UserHeader /> */}
                {/* Page content */}
                <br />
                <br />
                <br />
                <br />
                <Container className="mb-3" fluidx>
                    <Row>
                        <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                            <Card className="card-profile shadow">
                                <CardBody className="pt-0 pt-md-4">
                                    <div className="text-left">
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/profile">
                                                My Profile
                                            </a>{' '}
                                            <i
                                                style={{ float: 'right' }}
                                                class="fa fa-user"></i>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/orders">
                                                My Orders{' '}
                                                <i
                                                    style={{ float: 'right' }}
                                                    class="fa fa-shopping-cart"></i>
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/favorites">
                                                My Saved/Favorite Items{' '}
                                                <i
                                                    style={{ float: 'right' }}
                                                    class="fa fa-heart"></i>
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-600">
                                            <a href="/myaccount/changepassword">
                                                Change Password{' '}
                                                <i
                                                    style={{ float: 'right' }}
                                                    class="fa fa-lock"></i>
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/paymentmethods">
                                                Payment Methods{' '}
                                                <i
                                                    style={{ float: 'right' }}
                                                    class="fa fa-credit-card"></i>
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/contactpreferences">
                                                Contact Preferences{' '}
                                                <i
                                                    style={{ float: 'right' }}
                                                    class="fa fa-address-card"></i>
                                            </a>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="h6 font-weight-300">
                                            <a href="/myaccount/socialaccounts">
                                                Social Accounts{' '}
                                                <i
                                                    style={{ float: 'right' }}
                                                    class="fa fa-share-alt-square"></i>
                                            </a>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="order-xl-1" xl="8">
                            <Card className="bg-light shadow">
                                <CardHeader className="bg-secondary border-0">
                                    <Row className="align-items-center">
                                        <Col xs="12">
                                            <h5 className="mb-0">
                                                Change Password
                                            </h5>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <input
                                            type="hidden"
                                            value="this is here to stop chrome from autocompleting the form"
                                        />
                                        <h6 className="heading-small text-muted mb-4">
                                            Feel free to update your password so
                                            your woozeee account stays secure.
                                        </h6>
                                        <div className="pl-lg-4">
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-first-name">
                                                            Current Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-first-name"
                                                            placeholder="password"
                                                            type="text"
                                                            value={oldPassword}
                                                            name="oldPassword"
                                                            onChange={(e) =>
                                                                this.handleChange(e)
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-last-name">
                                                            New Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-last-name"
                                                            placeholder="password"
                                                            type="password"
                                                            value={newPassword}
                                                            name="newPassword"
                                                            onChange={(e) =>
                                                                this.handleChange(e)
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup>
                                                        <label
                                                            className="form-control-label"
                                                            htmlFor="input-email">
                                                            Confirm New Password
                                                        </label>
                                                        <Input
                                                            className="form-control-alternative"
                                                            id="input-email"
                                                            placeholder="password"
                                                            type="password"
                                                            name="confirmPassword"
                                                            value={confirmPassword}
                                                            onChange={(e) =>
                                                                this.handleChange(e)
                                                            }
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg="4">
                                                    <Button
                                                        color="primary"
                                                        size="sm"
                                                        type="submit"
                                                        disabled={oldPassword === '' ||
                                                                  newPassword === '' ||
                                                                  confirmPassword === '' ||
                                                                  isMakingRequest === true}
                                                                  
                                                        >
                                                        Save Changes
                                                        {
                                                          isMakingRequest && <Spinner size="sm" color="light" style={{marginLeft: '10px'}} /> 
                                                        }
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <FooterSection />
            </>
        );
    }
}

const mapStateToProps = ({ auth }) => {
  if (auth.user !== null) {
    const {
      user: { firstName, lastName },
      email,
  } = auth;

  return {
      firstName,
      lastName,
      email,
  };
  }
    
};


const mapDispatchToProps = (dispatch) => ({
  updatePassword: (passwordObject) => dispatch(handleUpdatePassword(passwordObject))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

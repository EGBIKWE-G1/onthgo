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
import './Profile.css';
import { handleOnlyNameUpdate, handleProfileUpdate } from '../../actions/userProfile';

class Profile extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    isMakingRequest: false
  };

  componentDidMount() {
    const { firstName, lastName, email } = this.props;
    this.setState({
      firstName,
      lastName,
      email,
    })
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    const {
      firstName,
      lastName,
      email,
    } = this.state;
    if (this.props.email === email && this.props.firstName === firstName && this.props.lastName === lastName) {
      return;
    }
    this.setState(prevState => ({isMakingRequest: !prevState.isMakingRequest}))
    this.handleApiCalls(email, firstName, lastName)
  }

  handleApiCalls = (email, firstName, lastName) => {
    if (this.props.email === email) {
      this.props.updateNameOnly({ firstName, lastName })
      this.setState(prevState => ({isMakingRequest: !prevState.isMakingRequest}))
      return;
    }

    this.props.updateUser({ firstName, lastName, email })
    this.setState(prevState => ({isMakingRequest: !prevState.isMakingRequest}))
  }



  render() {
    const { firstName, lastName, email, isMakingRequest } = this.state;
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
                    <div className="h6 font-weight-600">
                      <a href="/profile">My Profile</a>{' '}
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
                    <div className="h6 font-weight-300">
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
                      <h5 className="mb-0">My account</h5>
                      <span style={{ fontSize: '13px' }}>
                        Feel free to edit any of your
                        details below so your woozeee
                        account is totally up to date.
                                            </span>
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
                      User information
                                        </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name">
                              First name
                                                        </label>
                            <Input
                              className="form-control-alternative"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                              value={firstName}
                              name="firstName"
                              onChange={(e) =>
                                this.handleChange(
                                  e
                                )
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name">
                              Last name
                                                        </label>
                            <Input
                              className="form-control-alternative"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                              value={lastName}
                              name="lastName"
                              onChange={(e) =>
                                this.handleChange(
                                  e
                                )
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
                              Email address
                                                        </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="amoshood@fczmedia.com"
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) =>
                                this.handleChange(
                                  e
                                )
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
                            disabled={firstName === '' || lastName === '' || email === '' || isMakingRequest === true}
                          >
                            Save Changes
                            {
                              isMakingRequest && <Spinner size="sm" color="light" style={{ marginLeft: '10px' }} />
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
      user: { firstName, lastName, email },
    } = auth;

    return {
      firstName,
      lastName,
      email,
    };
  }

};

const mapDispatchToProps = (dispatch) => ({
  updateNameOnly: (name) => dispatch(handleOnlyNameUpdate(name)),
  updateUser: (userObject) => dispatch(handleProfileUpdate(userObject))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

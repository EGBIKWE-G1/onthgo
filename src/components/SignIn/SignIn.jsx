import React, { Component, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { FacebookProvider, Login as LoginCustom } from 'react-facebook'
import PropTypes from 'prop-types';
import { handleSignInWithSocials, login } from '../../actions/auth';
import { toastr } from 'react-redux-toastr'

import '../../assets/plugins/nucleo/css/nucleo.css';
// import '../ForgotPassword/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
// import "../assets/scss/woozeee-admin-dashboard.scss";
// import '../../assets/css/woozeee-admin-dashboard.css'

// import { reactLocalStorage } from 'reactjs-localstorage';

// reactstrap components
import {
  Button,
  Row,
  Card,
  CardHeader,
  CardBody,
  Container,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Spinner,
  // Row,
  Col,
} from 'reactstrap';

import { useHistory } from 'react-router-dom';

import FooterSection from '../FooterSection/FooterSection';
import { Loader } from 'react-bootstrap-typeahead';
import Content from '../Loader';

const Login = ({ isAuthenticated, login, signInWithSocialsCredentials }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMakingRequest, setIsMakingRequest] = useState(false)

  //     useEffect(() => {

  //         if (isAuthenticated) {
  //           return <Redirect to='/' />;
  //         }
  //   },[isAuthenticated]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };
    setIsMakingRequest(true)
    login(newUser).then(res => {
      if (res === 'done') {
        history.push('/')
      }
      setIsMakingRequest(false)
    })
  };

  //   static propTypes = {
  //     login: PropTypes.func.isRequired,
  //     isAuthenticated: PropTypes.bool
  //   }

  const responseGoogle = (response) => {
    if (response.profileObj) {
      const { profileObj: { email, familyName, givenName, googleId, imageUrl } } = response;
      const userObject = {
        oAuthId: googleId,
        firstName: givenName,
        lastName: familyName,
        email,
        imageUrl,
        phone: null,
        accountType: 'customer'
      }
      setIsMakingRequest(true)
      signInWithSocialsCredentials(userObject, 'google').then(res => {
        if (res === true) {
          history.push('/');
        }
        setIsMakingRequest(false)
      })
      return;
    } else {
      console.log(response)
      toastr.error(`An error occured with google, ${response}`, {
        timeOut: 6000,
        showCloseButton: true,
      })
    }
  };

  const handleFacebookResponse = (response) => {
    if (response.profile) {
      const { profile: { email, first_name, id, last_name, picture: { data: { url } } } } = response;
      const userObject = {
        oAuthId: id,
        firstName: first_name,
        lastName: last_name,
        email,
        imageUrl: url,
        phone: null,
        accountType: 'customer'
      }

      setIsMakingRequest(true)
      signInWithSocialsCredentials(userObject, 'facebook').then(res => {
        if (res === true) {
          history.push('/');
        }
        setIsMakingRequest(false)
      })
    }
  }

  const handleFacebookError = (response) => {
    toastr.error(`An error occured with facebook, ${response}`, {
      timeOut: 6000,
      showCloseButton: true,
    })
  }

  if (isAuthenticated) {
    return <Redirect to='/' />
  }




  return (
    <div
      style={{
        backgroundColorx: '#043f7c',
        backgroundSize: 'cover',
      }}>
      <Content />
      <Container
        className=""
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // margin: '0 auto',
          height: '50vh',
          width: '150vh',
          // backgroundColor: '#043f7c',
          // backgroundSize: 'cover',
          maxWidth: '100%',
        }}>
        <Col lg="4" md="7">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Card className="bg-light shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <br />
              <div className="text-center text-muted mb-4">
                <small
                  style={{
                    color: '#000000',
                    fontSize: '15px',
                    opacity: '0.6',
                  }}>
                  Sign in with
                </small>
              </div>
              <div className="btn-wrapper text-center">

                <FacebookProvider appId="642788952951796">
                  <LoginCustom
                    scope="email"
                    onCompleted={handleFacebookResponse}
                    onError={handleFacebookError}
                  >
                    {({ loading, handleClick, error, data }) => (
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        onClick={handleClick}>
                        <span className="btn-inner--icon">
                          <img
                            alt="..."
                            src={require('../../assets/img/icons/facebook.svg')}
                          />
                        </span>
                        <span className="btn-inner--text">
                          Facebook
                  </span>
                      </Button>
                    )}
                  </LoginCustom>
                </FacebookProvider>
                <GoogleLogin
                  clientId="1062482767572-eqhvrdf71e04nivvnk62s3a6lsvp4a72.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}>
                      <span className="btn-inner--icon">
                        <img
                          alt="..."
                          src={require('../../assets/img/icons/google.svg')}
                        />
                      </span>
                      <span className="btn-inner--text">
                        Google
                      </span>
                    </Button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small
                  style={{
                    color: '#000000',
                    fontSize: '15px',
                    opacity: '0.6',
                  }}>
                  or sign in with credentials
                </small>
              </div>
              <Form role="form" onSubmit={onSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      // defaultValue={email}
                      placeholder="Email"
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      type="email"
                      name="email"
                      value={email}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      // defaultValue={password}
                      placeholder="Password"
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      type="password"
                      name="password"
                      value={password}
                      required
                    />
                  </InputGroup>
                </FormGroup>
                {/* <hr className="text-center" style={{width: '100%', margin: '0 auto'}} /> */}
                <div className="text-center">
                  <Button
                    style={{
                      backgroundColor: '#ff5757',
                      width: '100%',
                    }}
                    className="my-4"
                    color="danger"
                    disabled={isMakingRequest === true}

                    type="submit">
                    Sign in
                    {
                      isMakingRequest && <Spinner size="sm" color="light" style={{marginLeft: '10px'}} /> 

                    }
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="/resetpassword"
              // onClick={(e) => e.preventDefault()}
              >
                <small style={{ color: '#043f7c' }}>
                  Forgot password?
                </small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="/signup"
              // onClick={(e) => e.preventDefault()}
              >
                <small style={{ color: '#043f7c' }}>
                  Create new account
                </small>
              </a>
            </Col>
          </Row>
        </Col>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterSection />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  if (state.auth.user.accessToken !== null) {
    return {
      isAuthenticated: state.auth.user.accessToken
    }

  } 
};

const mapDispatchToProps = (dispatch) => ({
  signInWithSocialsCredentials: (userObject, social) => dispatch(handleSignInWithSocials(userObject, social)),
  login: (newUser) => dispatch(login(newUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React, { Component, useState, select, Switch } from 'react';
// import {
//     Jumbotron,
//     Container,
//     Row,
//     Col,
//     Image,
//     Button,
//     ButtonGroup,
//     Card,
//     InputGroup,
//     Form,
//     FormControl,
//     FormCheck,
// } from 'react-bootstrap';
import axios from '../../config/axios';

import '../../assets/plugins/nucleo/css/nucleo.css';
// import '../ForgotPassword/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
// import "../assets/scss/woozeee-admin-dashboard.scss";
// import '../../assets/css/woozeee-admin-dashboard.css'

import { reactLocalStorage } from 'reactjs-localstorage';
import {toastr} from 'react-redux-toastr'


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
    // Row,
    Col,
} from 'reactstrap';

import { useHistory } from 'react-router-dom';

import FooterSection from '../FooterSection/FooterSection';

const ResetPassword = () => {

    const [activeUI, setActiveUI] = useState('reset_password');


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [verificationCode, setVerificationCode] = useState('');

    let history = useHistory();

    const handleUpdatePassword = async () => {
      if (password !== confirmPassword) {
        alert('passwords do not match')
        return;
      }
        if (
            verificationCode === '' ||
            verificationCode === undefined ||
            password === '' ||
            password === undefined
        ) {
            alert('invalid email');
        } else {
            const request_data = {
                password,
                verificationCode,
            };


                axios.put('https://scalable-commerce-backend.herokuapp.com/api/v1/auth/reset-password', request_data)

                .then((response) => {
                    history.push('/signin');
                    toastr.success('', 'Password successfully updated', {
                      timeOut: 5000,
                      showCloseButton: true, 
                    })
                })
                .catch((error) => {
                    alert('invalid verification code');
                    console.log(error, 'error');
                });
        }
    };

    const handleResetPassword = async () => {
        if (email == '' || email == undefined) {
            alert('invalid email');
        } else {
            const request_data = {
                email,
            };

            console.log(request_data, 'sending');
            await axios
                .put('https://scalable-commerce-backend.herokuapp.com/api/v1/auth/verify', request_data)
                .then((response) => {
                    setActiveUI('update_password');
                })
                .catch((error) => {
                    alert('invalid email or password');
                    console.log(error, 'error');
                });
        }
    };

    return (
        <>
            {activeUI == 'reset_password' && (
                <div
                    style={{
                        backgroundColorx: '#043f7c',
                        backgroundSize: 'cover',
                    }}>
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
                            maxWidth: '100%',
                        }}>
                        <Col lg="4" md="7">
                            <Card className="bg-light shadow border-0">
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small
                                            style={{
                                                color: '#000000',
                                                fontSize: '15px',
                                                opacity: '0.6',
                                            }}>
                                            Reset Password with valid email
                                            address
                                        </small>
                                    </div>
                                    <Form role="form">
                                        <FormGroup className="mb-3">
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-email-83" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Email"
                                                    onChange={(event) =>
                                                        setEmail(
                                                            event.target.value,
                                                        )
                                                    }
                                                    type="email"
                                                    autoComplete="new-email"
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
                                                onClick={handleResetPassword}
                                                className="my-4"
                                                color="danger"
                                                type="button">
                                                Reset
                                            </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                            <Row className="mt-3">
                                <Col xs="6">
                                    <a
                                        className="text-light"
                                        href="/signin"
                                    >
                                        <small style={{ color: '#043f7c' }}>
                                            Remember Password? <b>Sign In</b>
                                        </small>
                                    </a>
                                </Col>
                                <Col className="text-right" xs="6">
                                    <a
                                        className="text-light"
                                        href="/signup"
                                    >
                                        <small style={{ color: '#043f7c' }}>
                                            Create new account
                                        </small>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </div>
            )}

            {activeUI == 'update_password' && (
                <div
                    style={{
                        backgroundColorx: '#043f7c',
                        backgroundSize: 'cover',
                    }}>
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
                            maxWidth: '100%',
                        }}>
                        <Col lg="4" md="7">
                            <Card className="bg-light shadow border-0">
                                {/* <CardHeader className="bg-transparent pb-5">
                                <div className="btn-wrapper text-center">
                                    <br />
                                    <a href="/">
                                        <img
                                            width="200px"
                                            alt="..."
                                            src={require('../../assets/img/woozeee.png')}
                                        />
                                    </a>
                                </div>
                            </CardHeader> */}
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small
                                            style={{
                                                color: '#000000',
                                                fontSize: '15px',
                                            }}>
                                            Enter verification code sent to your
                                            email address
                                        </small>
                                    </div>
                                    <Form role="form">
                                        <FormGroup className="mb-3">
                                            <InputGroup className="input-group-alternative">
                                                {/* <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon> */}
                                                <Input
                                                    defaultValue={
                                                        verificationCode
                                                    }
                                                    placeholder="verification code"
                                                    onChange={(event) =>
                                                        setVerificationCode(
                                                            event.target.value,
                                                        )
                                                    }
                                                    type="number"
                                                    autoComplete="new-email"
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="mb-3">
                                            <InputGroup className="input-group-alternative">
                                                {/* <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon> */}
                                                <Input
                                                    defaultValue={password}
                                                    placeholder="password"
                                                    onChange={(event) =>
                                                        setPassword(
                                                            event.target.value,
                                                        )
                                                    }
                                                    type="password"
                                                    autoComplete="new-email"
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="mb-3">
                                            <InputGroup className="input-group-alternative">
                                                {/* <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon> */}
                                                <Input
                                                    defaultValue={password}
                                                    placeholder="confirm password"
                                                    onChange={(event) =>
                                                        setConfirmPassword(
                                                            event.target.value,
                                                        )
                                                    }
                                                    value={confirmPassword}
                                                    type="password"
                                                    autoComplete="new-email"
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
                                                onClick={handleUpdatePassword}
                                                className="my-4"
                                                color="danger"
                                                type="button">
                                                Update Password
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
                                    >
                                        <small style={{ color: '#043f7c' }}>
                                            Create new account
                                        </small>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Container>
                </div>
            )}
            <FooterSection />
        </>
    );
};

export default ResetPassword;

// import React from 'react';

// const SignIn = () => {
//     return (
//         <div>

//         </div>
//     );
// }

// export default SignIn;

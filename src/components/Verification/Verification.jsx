/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/woozeee-admin-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/woozeee-admin-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

const Verification = () => {
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    let history = useHistory();

    const handleResetPassword = async () => {
        const request_data = {
            email,
        };
        await axios
            .post('/auth/reset-password', request_data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert('invalid email or password');
                console.log(error, 'error');
            });
    };

    // render() {
    return (
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
                                    Enter verification code sent to your email
                                    address
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
                                            placeholder="verification code"
                                            onChange={(event) =>
                                                setEmail(event.target.value)
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
                                            placeholder="password"
                                            onChange={(event) =>
                                                setEmail(event.target.value)
                                            }
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
                                        onClick={handleResetPassword}
                                        className="my-4"
                                        color="danger"
                                        type="button">
                                        Verify
                                    </Button>
                                </div>
                            </Form>
                        </CardBody>
                    </Card>
                    <Row className="mt-3">
                        <Col xs="6">
                            <a
                                className="text-light"
                                href="/forgotpassword"
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
            <FooterSection />
        </div>
    );
    // }
};

export default Verification;

// import React from 'react';

// const SignIn = () => {
//     return (
//         <div>

//         </div>
//     );
// }

// export default SignIn;

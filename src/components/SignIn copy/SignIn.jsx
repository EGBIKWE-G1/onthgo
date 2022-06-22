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
import './node_modules/@fortawesome/fontawesome-free/css/all.min.css';
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

class SignIn extends React.Component {
    handleLogin = () => {
        const request_data = {
            email: 'emeka@gmail.com',
            password: 'emeka',
        };

        axios
            .post('auth/signin', request_data)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);

                reactLocalStorage.set('token', response.user);
                // reactLocalStorage.get('var', true);
                // reactLocalStorage.setObject('var', { test: 'test' });
                // reactLocalStorage.getObject('var');
                // reactLocalStorage.remove('var');
                // reactLocalStorage.clear();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    render() {
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
                        margin: '0 auto',
                        height: '100vh',
                        width: '150vh',
                        // backgroundColor: '#043f7c',
                        // backgroundSize: 'cover',
                        maxWidth: '100%',
                        maxWidth: '100%',
                    }}>
                    <Col lg="4" md="7">
                        <Card className="bg-light shadow border-0">
                            <CardHeader className="bg-transparent pb-5">
                                {/* <div className="text-muted text-center mt-2 mb-3">
                                <small>Sign in with</small>
                            </div> */}
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
                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small style={{ color: '#000000' }}>
                                        Sign in with credentials
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
                                                type="email"
                                                autoComplete="new-email"
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
                                                placeholder="Password"
                                                type="password"
                                                autoComplete="new-password"
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
                                            onClick={this.handleLogin}
                                            className="my-4"
                                            color="danger"
                                            type="button">
                                            Sign in
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
                                    onClick={(e) => e.preventDefault()}>
                                    <small style={{ color: '#043f7c' }}>
                                        Forgot password?
                                    </small>
                                </a>
                            </Col>
                            <Col className="text-right" xs="6">
                                <a
                                    className="text-light"
                                    href="/signup"
                                    onClick={(e) => e.preventDefault()}>
                                    <small style={{ color: '#043f7c' }}>
                                        Create new account
                                    </small>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default SignIn;

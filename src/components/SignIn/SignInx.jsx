import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';

import axios from "../../config/axios"

function SignIn() {
    
        const [validated, setValidated] = useState(false);
    
        const handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);
        };

        const handleLogin = async () => {

            const request_body = {
                "email": "kossy@yahoo.com",
                "password": "123456"
            }

            await axios.post('/auth/signin', request_body)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error, "error")
            })
        }

        

        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: '250px' }}>
                <Card style={{ backgroundColor: '#ffffff', padding: '20px', border: 'none'}}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row className="justify-content-md-center">
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label> <h6>Email Address <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValue="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label> <h6>Password <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <Form.Control required type="text" defaultValue="Otto" />
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Button onClick={() => handleLogin()} variant="danger">Submit</Button> {' '}
                        </Form.Row>
                    </Form>
            </Card>
            </div>
        );
    }

export default SignIn;

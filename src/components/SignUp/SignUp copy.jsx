import React, { Component, useState, select, Switch } from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image,
    Button,
    ButtonGroup,
    Card,
    Form,
    InputGroup,
    FormControl,
    FormCheck,
} from 'react-bootstrap';
import * as Formik from 'formik';
import axios from '../../config/axios';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({});

function SignUp() {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('emeka');
    const [lastName, setLastName] = useState('emeka');
    const [accountType, setAccountType] = useState('staff');
    const [email, setEmail] = useState('emeka1@gmail.com');
    const [phone, setPhone] = useState('00001');
    const [password, setPassword] = useState('emeka');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [attributes, setAttributes] = useState({ company: 'Google' });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const handleSignup = async () => {
        await axios
            .post('/auth/signup', {})
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error, 'error');
            });
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '150px',
            }}>
            <Card style={{ padding: '30px' }}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom01">
                            <Form.Label>
                                {' '}
                                <h6>First name</h6>{' '}
                            </Form.Label>
                            <Form.Control
                                onChange={(event) =>
                                    setFirstName(event.target.value)
                                }
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue={firstName}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom02">
                            <Form.Label>
                                {' '}
                                <h6>Last name</h6>{' '}
                            </Form.Label>
                            <Form.Control
                                onChange={(event) =>
                                    setLastName(event.target.value)
                                }
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue={lastName}
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustomUsername">
                            <Form.Label>
                                {' '}
                                <h6>email</h6>{' '}
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">
                                        @
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    type="email"
                                    // placeholder="email"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                    defaultValue={email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom03">
                            <Form.Label>
                                {' '}
                                <h6>Phone</h6>{' '}
                            </Form.Label>
                            <Form.Control
                                onChange={(event) =>
                                    setPhone(event.target.value)
                                }
                                type="tel"
                                // placeholder="+2347060460216"
                                required
                                defaultValue={phone}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom04">
                            <Form.Label>
                                {' '}
                                <h6>Password</h6>{' '}
                            </Form.Label>
                            <Form.Control
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                type="password"
                                // placeholder="•••••••"
                                required
                                defaultValue={password}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationCustom05">
                            <Form.Label>
                                {' '}
                                <h6>Confirm Password</h6>{' '}
                            </Form.Label>
                            <Form.Control
                                onChange={(event) =>
                                    setConfirmPassword(event.target.value)
                                }
                                // type="password"
                                // placeholder="•••••••"
                                required
                                type="password"
                                defaultValue={password}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid password.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    {/* <Form.Group>
                    <Form.Check style={{fontSize: '6px'}}
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                    />
                </Form.Group> */}
                    <Button type="submit">Submit</Button>
                </Form>
            </Card>
        </div>
    );
}

export default SignUp;

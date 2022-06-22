import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
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
    Col,
    Spinner
} from 'reactstrap';
import * as Formik from 'formik';
// import axios from '../../config/axios';
// import { reactLocalStorage } from 'reactjs-localstorage';
// import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import FooterSection from '../FooterSection/FooterSection';

const SignupSchema = Yup.object().shape({});

export class SignUp extends Component {
    // const [validated, setValidated] = useState(false);
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [accountType, setAccountType] = useState('staff');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [attributes, setAttributes] = useState({ company: 'Google' });

    state = {
        firstName: '',
        phone: '',
        accountType: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isMakingRequest: false
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log('here');
        const {
            firstName,
            phone,
            accountType,
            lastName,
            email,
            password,
            confirmPassword,
        } = this.state;

        if (password !== confirmPassword) {
            alert('Password do not match');
        } else {
          this.setState(prevState => ({ isMakingRequest: !prevState.isMakingRequest}))
            const newUser = {
                firstName,
                phone,
                accountType: 'customer',
                lastName,
                email,
                password,
            };
            this.props.registerUser(newUser).then((res) => {
                if (res === 'done') {
                    this.props.history.push('/signin');
                }
                this.setState(prevState => ({ isMakingRequest: !prevState.isMakingRequest}))
            });
        }
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value,
        });

    render() {
        const {
            firstName,
            phone,
            accountType,
            lastName,
            email,
            password,
            confirmPassword,
            attributes,
            isMakingRequest
        } = this.state;

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
                        height: '70vh',
                        width: '150vh',
                        // backgroundColor: '#043f7c',
                        // backgroundSize: 'cover',
                        maxWidth: '100%',
                    }}>
                    <Col sm="12" md="7">
                        <Card className="bg-light shadow border-0">
                            <CardBody className="px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small
                                        style={{
                                            color: '#000000',
                                            fontSize: '15px',
                                            opacity: '0.6',
                                        }}>
                                        Sign up with credentials
                                    </small>
                                </div>
                                <Form role="form" onSubmit={this.onSubmit}>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-single-02" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="firstName"
                                                        onChange={this.onChange}
                                                        value={firstName}
                                                        required
                                                        placeholder="Firstname"
                                                        type="text"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-single-02" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="lastName"
                                                        onChange={this.onChange}
                                                        value={lastName}
                                                        required
                                                        placeholder="Lastname"
                                                        type="text"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup className="mb-3">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-email-83" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="email"
                                                        onChange={this.onChange}
                                                        value={email}
                                                        required
                                                        placeholder="Email"
                                                        type="email"
                                                        autoComplete="new-email"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="fa fa-phone" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="phone"
                                                        onChange={this.onChange}
                                                        value={phone}
                                                        required
                                                        placeholder="Phone"
                                                        type="phone"
                                                        autoComplete="phone"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="password"
                                                        onChange={this.onChange}
                                                        value={password}
                                                        required
                                                        placeholder="Password"
                                                        type="password"
                                                        autoComplete="new-password"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-lock-circle-open" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        name="confirmPassword"
                                                        onChange={this.onChange}
                                                        value={confirmPassword}
                                                        required
                                                        placeholder="Confirm Password"
                                                        type="password"
                                                        autoComplete="new-password"
                                                    />
                                                </InputGroup>
                                            </FormGroup>
                                        </Col>
                                        {/* <hr className="text-center" style={{width: '100%', margin: '0 auto'}} /> */}
                                        <div className="text-center">
                                            <Button
                                                style={{
                                                    backgroundColor: '#ff5757',
                                                    width: '100%',
                                                }}
                                                // onClick={this.handleLogin}
                                                type="submit"
                                                className="my-4"
                                                disabled={isMakingRequest === true}
                                                aria-disabled="true"
                                                color="danger">
                                                Sign up
                                                {
                                                  isMakingRequest && <Spinner size="sm" color="light" style={{marginLeft: '10px'}} /> 
                                                }
                                            </Button>
                                        </div>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                        <Row className="mt-3">
                            {/* <Col xs="6">
                                <a
                                    className="text-light"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}>
                                    <small style={{color: '#043f7c'}}>Forgot password?</small>
                                </a>
                            </Col> */}
                            <Col classNamex="text-right" xs="6">
                                <a
                                    className="text-light"
                                    href="/signin"
                                    // onClick={(e) => e.preventDefault()}
                                >
                                    <small style={{ color: '#043f7c' }}>
                                        Have an account? <b>signin</b>{' '}
                                    </small>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Container>
                <FooterSection />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
    registerUser: (user) => dispatch(register(user)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

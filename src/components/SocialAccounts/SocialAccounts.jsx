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
} from 'reactstrap';
import FooterSection from '../FooterSection/FooterSection';
// core components
// import UserHeader from "components/Headers/UserHeader.js";
// import '../../assets/plugins/nucleo/css/nucleo.css';
import img from '../../assets/img/avatar.jpg';
import './SocialAccounts.css';

class SocialAccounts extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
    };
    uploadedImage = React.createRef(null);
    imageUploader = React.createRef(null);

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        console.log('clicked');
        const {
            firstName,
            lastName,
            email,
            currentPassword,
            newPassword,
            confirmPassword,
            address,
            city,
            country,
            postalCode,
        } = this.state;

        if (newPassword !== confirmPassword) {
            alert('New Passwords do not match');
            return;
        }
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
        const { firstName, lastName, email } = this.props;
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
                                        <div className="h6 font-weight-600">
                                            <a href="/myaccount/socialaccountss">
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
                                                Social Accounts
                                            </h5>
                                            <span style={{ fontSize: '13px' }}>
                                                Use your social media accounts
                                                to make it even easier to log
                                                in.
                                            </span>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <input
                                            type="hidden"
                                            value="this is here to stop chrome from autocompleting the form"
                                        />
                                        <h6 className="heading-small text-center text-muted mb-4">
                                            
                                            <br />
                                            <Row>
                                                <Col lgx="4">
                                                    <Button
                                                        className="btn-neutral btn-icon"
                                                        color="default">
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
                                                </Col>
                                                <Col lg="4">
                                                    <Button
                                                        className="btn-neutral btn-icon"
                                                        color="default">
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
                                                </Col>
                                                <Col lg="4">
                                                    <Button
                                                        className="btn-neutral btn-icon"
                                                        color="default">
                                                        <span className="btn-inner--icon">
                                                            <img
                                                                alt="..."
                                                                src={require('../../assets/img/icons/twitter.svg')}
                                                            />
                                                        </span>
                                                        <span className="btn-inner--text">
                                                            Twitter
                                                        </span>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </h6>
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
    const {
        user: { firstName, lastName },
        email,
    } = auth;

    return {
        firstName,
        lastName,
        email,
    };
};

export default connect(mapStateToProps)(SocialAccounts);

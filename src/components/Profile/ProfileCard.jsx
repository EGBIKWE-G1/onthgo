import React, { Component, useState, select, Switch } from 'react';
import {
    Jumbotron,
    Modal,
    Container,
    Row,
    Col,
    Image,
    Button,
    ButtonGroup,
    Card,
    InputGroup,
    Form,
    FormControl,
    FormCheck,
} from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar';
// import ButtonToggle from './ButtonToggle'
import TravelInsuranceImg from '../../assets/img/icons/onthego/travelinsurance.png';

function ProfileCard() {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setastName] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div>
            <Card>
                <div style={{ backgroundColor: '#ffffff', padding: '20px' }}>
                    <p style={{ color: '#043f7c' }}>
                        {' '}
                        <b>Account Information</b>{' '}
                    </p>
                    <hr style={{ color: '#043f7c' }} />
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustom01">
                                <Form.Label>
                                    {' '}
                                    <h6>First Name</h6>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    defaultValue="Mark"
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
                                    <h6>Last Name</h6>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    defaultValue="Otto"
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
                                    <h6>
                                        Phone Number{' '}
                                        <span style={{ color: 'red' }}>*</span>
                                    </h6>
                                </Form.Label>
                                <InputGroup>
                                    <InputGroup.Append>
                                        <Button
                                            style={{
                                                borderTopLeftRadius: '3px',
                                                borderBottomLeftRadius: '3px',
                                            }}
                                            variant="secondary">
                                            {/* <i class="nigeria flag"></i> */}
                                            NGN
                                        </Button>
                                    </InputGroup.Append>
                                    <Form.Control
                                        required
                                        type="tel"
                                        defaultValue="Otto"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {' '}
                                        Enter a valid phone number.{' '}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustom02">
                                <Form.Label>
                                    {' '}
                                    <h6>Email Address</h6>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    defaultValue="Otto"
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
                                    <h6>
                                        Sex{' '}
                                        <span style={{ color: 'red' }}>*</span>
                                    </h6>
                                </Form.Label>
                                <Row>
                                    <Col md="12">
                                        <Form.Control as="select">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="6"
                                controlId="validationCustom02">
                                <Form.Label>
                                    {' '}
                                    <h6>Date of Birth</h6>
                                </Form.Label>
                                <Row>
                                    <Col md="4">
                                        <Form.Control as="select">
                                            <option>Day</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                            <option>05</option>
                                            <option>06</option>
                                            <option>07</option>
                                            <option>08</option>
                                            <option>09</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md="4">
                                        <Form.Control as="select">
                                            <option>Month</option>
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>August</option>
                                            <option>September</option>
                                            <option>October</option>
                                            <option>November</option>
                                            <option>December</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md="4">
                                        <Form.Control as="select">
                                            <option>Year</option>
                                            <option>Abia</option>
                                            <option>Adamawa</option>
                                            <option>Akwa Ibom</option>
                                            <option>Anambra</option>
                                            <option>Bauchi</option>
                                            <option>Bayelsa</option>
                                            <option>Benue</option>
                                            <option>Borno</option>
                                            <option>Cross River</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <Form.Control.Feedback>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="success">Save Changes</Button>{' '}
                    </Form>
                </div>
            </Card>
        </div>
    );
}

export default ProfileCard;

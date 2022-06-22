import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'

function FormSections() {
    const [validated, setValidated] = useState(false);
    
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label> <h6>Title <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control required type="text" placeholder="Mr" defaultValue="Mark" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label> <h6>Surname <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control required type="text" placeholder="Enter Surname" defaultValue="Mark" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label> <h6>First name <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control required type="text" placeholder="Enter Firstname" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label> <h6>State <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control as="select">
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Form.Control>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label> <h6>Email Address <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control required type="text" placeholder="amoshood@fczmedia.com" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label> <h6>Date of Birth <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Row>
                            <Col md='3'>
                                <Form.Control as='select'>
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
                            <Col md='5'>
                                <Form.Control as='select'>
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
                            <Col md='4'>
                                <Form.Control as='select'>
                                    <option>Year</option>
                                    <option>2005</option>
                                    <option>2004</option>
                                    <option>2003</option>
                                    <option>2002</option>
                                    <option>2001</option>
                                    <option>2000</option>
                                    <option>1999</option>
                                    <option>1998</option>
                                    <option>1997</option>
                                    <option>1996</option>
                                    <option>1995</option>
                                    <option>1994</option>
                                    <option>1993</option>
                                    <option>1992</option>
                                    <option>1991</option>
                                    <option>1990</option>
                                    <option>1989</option>
                                    <option>1988</option>
                                    <option>1987</option>
                                    <option>1986</option>
                                    <option>1985</option>
                                    <option>1984</option>
                                    <option>1983</option>
                                    <option>1982</option>
                                    <option>1981</option>
                                    <option>1980</option>
                                    <option>1979</option>
                                    <option>1978</option>
                                    <option>1977</option>
                                    <option>1976</option>
                                    <option>1975</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label> <h6>Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <PhoneInput style={{width: '700px'}} inputProps={{ name: 'phone', required: true, autoFocus: false }} />
                                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                            </InputGroup.Prepend>
                            {/* <Form.Control type="text" placeholder=" +2347060460216 " aria-describedby="inputGroupPrepend" required /> */}
                            <Form.Control.Feedback type="invalid"> Please choose a username. </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    
                    <Form.Group as={Col} md="8" controlId="validationCustom02">
                        <Form.Label> <h6>Residential Address <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control required type="text" placeholder="Enter Address" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label> <h6>State <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control as="select">
                            <option>Abia</option>
                            <option>Adamawa</option>
                            <option>Akwa Ibom</option>
                            <option>Anambra</option>
                            <option>Bauchi</option>
                            <option>Bayelsa</option>
                            <option>Benue</option>
                            <option>Borno</option>
                            <option>Cross River</option>
                            <option>Delta</option>
                            <option>Ebonyi</option>
                            <option>Edo</option>
                            <option>Ekiti</option>
                            <option>Enugu</option>
                            <option>Gombe</option>
                            <option>Imo</option>
                            <option>Jigawa</option>
                            <option>Kaduna</option>
                            <option>Kano</option>
                            <option>Katsina</option>
                            <option>Kebbi</option>
                            <option>Kogi</option>
                            <option>Kwara</option>
                            <option>Lagos</option>
                            <option>Nasarawa</option>
                            <option>Niger</option>
                            <option>Ogun</option>
                            <option>Ondo</option>
                            <option>Osun</option>
                            <option>Oyo</option>
                            <option>Plateau</option>
                            <option>Rivers</option>
                            <option>Sokoto</option>
                            <option>Taraba</option>
                            <option>Yobe</option>
                            <option>Zamfara</option>
                        </Form.Control>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label> <h6>ID Type <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control required type="text" placeholder="Enter Type" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label> <h6>ID Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                        <Form.Control required type="text" placeholder="Enter ID Number" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                </Form.Row>
                
                {/* <br/>
                
                <Button variant='danger' style={{width: '100%'}} type="submit">Review Details </Button> */}
            </Form>
        </div>
    )
}

export default FormSections

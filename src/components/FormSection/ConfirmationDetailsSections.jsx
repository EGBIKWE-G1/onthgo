import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
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
                        <Form.Label>First name <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="Ayodeji" defaultValue="Mark" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="Moshood" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Middle name <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="Ismail" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Date of Birth <span style={{color: 'red'}}>*</span></Form.Label>
                        {/* <DatePicker selected={this.state.date} onChange={this.handleChange} /> */}
                        <DatePicker />
                        {/* <Form.Control required type="text" placeholder="amoshood@fczmedia.com" defaultValue="Otto" /> */}
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Email Address <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="amoshood@fczmedia.com" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Phone Number <span style={{color: 'red'}}>*</span></Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <PhoneInput style={{width: '700px'}} inputProps={{ name: 'phone', required: true, autoFocus: true }} />
                                {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                            </InputGroup.Prepend>
                            {/* <Form.Control type="text" placeholder=" +2347060460216 " aria-describedby="inputGroupPrepend" required /> */}
                            <Form.Control.Feedback type="invalid"> Please choose a username. </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="8" controlId="validationCustom02">
                        <Form.Label>Residential Address <span style={{color: 'red'}}>*</span></Form.Label>
                        <Form.Control required type="text" placeholder="Abuja, Tincan - Apapa, Lagos" defaultValue="Otto" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>State <span style={{color: 'red'}}>*</span></Form.Label>
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
                </Form.Row>
                <br/>
                <Form.Group>
                    <Form.Check type="switch" id="custom-switch" label="Is there a preferred beneficiary?" />
                </Form.Group>
                
                <br/>
                {/* <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="State" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="text" placeholder="Zip" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row> */}
                <Form.Group>
                    <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting." />
                </Form.Group>
                <Button type="submit">Proceed <i className="fa fa-arrow-right"></i></Button>
            </Form>
        </div>
    )
}

export default FormSections

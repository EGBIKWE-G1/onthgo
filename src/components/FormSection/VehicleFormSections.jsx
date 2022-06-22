import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Utilities/Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'

function VehicleFormSections() {
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
            <Card>
                <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                    <p style={{color: '#043f7c'}}> <b>Additional Vehicle Information</b> </p>
                    <hr style={{color: '#043f7c'}}/>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label> <h6>License Plate Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" placeholder="Enter License Plate Number" defaultValue="Mark" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label> <h6>Chasis Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" placeholder="Enter Chasis Number" defaultValue="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label> <h6>Engine Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <Form.Control required type="text" placeholder="Enter Engine Number" defaultValue="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                        </Form.Row>
                    </Form>
                </div>
            </Card>
        </div>
        
    )
}

export default VehicleFormSections

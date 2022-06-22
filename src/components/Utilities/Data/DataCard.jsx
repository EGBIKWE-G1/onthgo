import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
import ButtonToggle from '../../SearchTabFormSection/ButtonToggle'

function DataCard() {

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
            
            <Card style={{ backgroundColor: '#ffffff', padding: '20px', border: 'none'}}>
                {/* <div style={{ backgroundColor: '#ffffff', padding: '20px'}}> */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row className="justify-content-md-center">
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Network Operator <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                
                                    <Form.Control as='select'>
                                        <option>Network</option>
                                        <option>MTN</option>
                                        <option>Airtel</option>
                                        <option>9mobile</option>
                                        <option>Glo</option>
                                    </Form.Control>
                                
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                            {/* <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6>Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <InputGroup.Prepend>
                                        <PhoneInput style={{width: '500px'}} inputProps={{ name: 'phone', required: true, autoFocus: false }} />
                                    </InputGroup.Prepend>
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group> */}
                            <Form.Group as={Col} md="7" controlId="validationCustomUsername">
                                <Form.Label> <h6>Phone Number <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup >
                                    <InputGroup.Append>
                                        <Button style={{borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px'}} variant="secondary">
                                            {/* <i class="nigeria flag"></i> */}
                                            NGN
                                        </Button>
                                    </InputGroup.Append>
                                    <Form.Control required type="text" defaultValue="Otto" />
                                    <Form.Control.Feedback type="invalid"> Enter a valid phone number. </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>How Much Airtime Do You Want To Buy? <span style={{color: 'red'}}>*</span></h6></Form.Label>
                                <InputGroup className="">
                                <InputGroup.Append>
                                    <Button style={{borderTopLeftRadius: '3px', borderBottomLeftRadius: '3px'}} variant="secondary">
                                        &#8358;
                                    </Button>
                                </InputGroup.Append>
                                <Form.Control required type="text" defaultValue="Otto" />
                                </InputGroup>
                                
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group as={Col} md="7" controlId="validationCustom02">
                                <Form.Label> <h6>Email Address <span style={{fontSize: '12px'}}>(Optional)</span></h6></Form.Label>
                                <Form.Control required type="text" defaultValue="Otto" />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            
                        </Form.Row>
                    </Form>
                {/* </div> */}
            </Card>
        </div>
        
    )
}

export default DataCard

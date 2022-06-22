import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'

import MotorInsuranceInnerTabPanel from '../SearchTabFormSection/MotorInsuranceInnerTabPanel'
import GoogleMap from './GoogleMap';
import MultiStepper from '../MultiStepper/MultiStepper'

function SelectTab() {
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
        // <div>
        //     <Container className='p-4' as={Col} lg={12} style={{maxWidth: '100%' }}>
        <div fluid>
            <Container style={{backgroundColor: '#043f7c', paddingTop: '20px'}} direction='row' classNamexx='p-4' fluid>
                <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                    <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} stylex={{height: '100px'}}>
                            <Form.Row>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="From:" required type='text' defaultValue='Third Party' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='Private' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='Honda' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='Accord' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                {/* <Form.Group as={Col} md="2" controlId="validationCustom02">
                                    <Form.Control required type="text" placeholder="Passengers" defaultValue="Mark" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="1">
                                    <Button href='onthego/flightsearch' variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group> */}
                                <InputGroup className="mb-4" as={Col} md="2" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="From:" required type='text' defaultValue='Sedan' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="1" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='2012' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='1 Year' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                <InputGroup className="mb-4" as={Col} md="3" >
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                        <i class='fa fa-map-marker'></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl style={{borderTopRightRadius: '4px', borderBottomRightRadius: '4px'}} id="inlineFormInputGroup" placeholder="To:" required type='text' defaultValue='&#8358;500,000 - &#8358;1,000,000' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </InputGroup>
                                
                                <Form.Group as={Col} md="3">
                                    <Button hrefxx='onthego/flightsearch' variant='danger' style={{width: '100%'}} type="submit"> Search </Button>
                                </Form.Group>
                            </Form.Row>
                            {/* <Form.Row style={{marginTop: '-25px'}}>
                                
                            </Form.Row> */}
                        </Form>
                    </Card.Body>
                </Card>
                
            </Container>
            <Container fluid>
                <Col lg={12}>
                    <Row>
                        <Col md={8}>
                            <MotorInsuranceInnerTabPanel />
                            {/* <InnerTabPanel /> */}
                        </Col>
                        <Col md={4}>
                            <br/>
                            <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
                                <h6 style={{fontSizexx: '14px', color: '#043f7c'}}> <b>Policy Information</b> </h6>
                                <hr/>
                                <p><span> <b>Cover Type:</b> Third Party </span></p>
                                <p><span> <b>Vehicle Category:</b> Private </span></p>
                                <p><span> <b>Vehicle Make:</b> Honda </span></p>
                                <p><span> <b>Vehicle Model:</b> Accord </span></p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Container>
            
        </div>
    )
}

export default SelectTab

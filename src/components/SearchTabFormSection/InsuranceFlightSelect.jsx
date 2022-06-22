import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'

import MotorInsuranceInnerTabPanel from './MotorInsuranceInnerTabPanel'
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

import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../Calendar'
// import Stepper from 'react-stepper-horizontal'

import TicketInnerTabPanel from './TicketInnerTabPanel'
import FlightSearchMultiStepper from '../MultiStepper/FlightSearchMultiStepper'
import GoogleMap from './GoogleMap';

function SelectTicketOptionTab() {
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
            
            {/* <br/> */}
            <Container fluid>
                <Col lg={12}>
                    <Row>
                        <Col md={8}>
                            <TicketInnerTabPanel />
                        </Col>
                        <Col md={4}>
                            {/* <GoogleMap /> */}
                        </Col>
                    </Row>
                </Col>
            </Container>
            {/* <Container>
                <InnerTabPanel />
            </Container> */}
            
        </div>
    )
}

export default SelectTicketOptionTab

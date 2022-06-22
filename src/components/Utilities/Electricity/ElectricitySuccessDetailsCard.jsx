import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ConfirmationElectricitySuccessDetailsCard from './ConfirmationElectricitySuccessDetailsCard';
import ConfirmationElectricitySuccessDetailsCard2 from './ConfirmationElectricitySuccessDetailsCard2';

function ElectricitySuccessDetailsCard() {

    // const [validated, setValidated] = useState(false);
    
    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    // setValidated(true);
    // };
   
    return (
        <div>
            <Card style={{backgroundColor: 'transparent', border: 'none'}}>
                {/* <div style={{ backgroundColor: 'transparent', padding: '20px'}}>
                    <Col lg={12}> */}
                        <Row>
                            <Col md={6} style={{backgroundColor: 'white'}}>
                                <ConfirmationElectricitySuccessDetailsCard />
                            </Col>
                            {/* <Col className='verticalline'>
                            </Col> */}
                            <Col md={6} style={{backgroundColor: 'white'}}>
                                <ConfirmationElectricitySuccessDetailsCard2 />
                            </Col>
                        </Row>
                        
                    {/* </Col>
                </div> */}
            </Card>
        </div>
    )
}

export default ElectricitySuccessDetailsCard

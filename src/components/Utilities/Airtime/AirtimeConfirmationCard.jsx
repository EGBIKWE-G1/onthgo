import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function AirtimeConfirmationCard() {

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
            <Card  style={{backgroundColor: '#ffffff', border: 'none'}}>
                <div className="justify-content-md-center" style={{ backgroundColor: 'transparent', padding: '20px', widthxx:'600px'}}>
                    <p style={{color: '#043f7c'}}> <b>Airtime Details</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></p>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p><b>Network Operator:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>MTN </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Phone Number:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>07060460216 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Amount:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>&#8358;2,000 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Email:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>amoshood@fczmedia.com </p>
                        </Col>
                    </Row>
                </div>
                {/*  */}
                
            </Card>
        </div>
        
    )
}

export default AirtimeConfirmationCard;

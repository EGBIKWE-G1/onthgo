import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function InternetConfirmationCard() {

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
            <Card align='center' style={{backgroundColor: '#ffffff', border: 'none'}}>
                <div style={{ backgroundColor: 'transparent', padding: '20px', widthx: '500px'}}>
                    <span style={{color: '#043f7c'}}><b style={{float: 'left'}}>Internet Details</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></span>
                    <br/>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Internet Operator:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>Smile </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Customer ID:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>1242 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Preferred Package:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>&#8358;4000 = 100GB Bumpa Value</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Phone Number:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>07060460216 </p>
                        </Col>
                    </Row>
                </div>
                {/*  */}
                
            </Card>
        </div>
        
    )
}

export default InternetConfirmationCard;

import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function ElectricityConfirmationCard() {

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
                    <span style={{color: '#043f7c'}}><b style={{float: 'left'}}>Electricity Details</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></span>
                    <br/>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>State:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>Eko Electricity Distribution Company plc </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Meter Number:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>123456789098765432 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Account/Meter Package:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>Prepaid</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p style={{float: 'left'}}><b>Unit Amount:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>&#8358;20,000 </p>
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
                    {/* <br/>
                    <Row>
                        <Col align='center' md={12}>
                            <Button variant='danger' type="submit" style={{width: '300px'}}><span style={{fontSize: 'small'}}>Buy Now</span> </Button>
                        </Col>
                    </Row> */}
                </div>
                {/*  */}
                
            </Card>
        </div>
        
    )
}

export default ElectricityConfirmationCard;

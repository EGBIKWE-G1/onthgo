import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Data/node_modules/react-phone-input-2/lib/style.css'

function CableTvConfirmationCard() {

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
                    <p style={{color: '#043f7c'}}> <b>CableTv Details</b> <span style={{float: 'right'}}>Edit &nbsp; <i className="fa fa-pencil"></i></span></p>
                    <hr style={{color: '#043f7c', borderTop: '1px dashed'}}/>
                    <Row>
                        <Col md={6}>
                            <p><b>TV Operator:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>DSTv </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Smartcard Number:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>07060460216 </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <p><b>Preferred Package:</b> </p>
                        </Col>
                        <Col md={6}>
                            <p style={{float: 'right'}}>&#8358;2,000 </p>
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
                </div>
                {/*  */}
                
            </Card>
        </div>
        
    )
}

export default CableTvConfirmationCard;

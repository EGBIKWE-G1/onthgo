import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ConfirmationAirtimeSuccessDetailsCard from './ConfirmationAirtimeSuccessDetailsCard';
import ConfirmationAirtimeSuccessDetailsCard2 from './ConfirmationAirtimeSuccessDetailsCard2';

function AirtimeSuccessDetailsCard() {

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
        // <div>
        //     <Card style={{backgroundColor: 'transparent', border: 'none'}}>
        //         <Row>
        //             <Col md={6} style={{backgroundColor: 'white'}}>
        //                 <ConfirmationAirtimeSuccessDetailsCard />
        //             </Col>
        //             <Col md={6} style={{backgroundColor: 'white'}}>
        //                 <ConfirmationAirtimeSuccessDetailsCard2 />
        //             </Col>
        //         </Row>
        //     </Card>
        // </div>
        <div>
            <Card style={{backgroundColor: '#ffffff', border: 'none'}}>
                <Row>
                    <Col md={6} style={{backgroundColor: 'white'}}>
                        <ConfirmationAirtimeSuccessDetailsCard />
                    </Col>
                    <Col md={6} style={{backgroundColor: 'white'}}>
                        <ConfirmationAirtimeSuccessDetailsCard2 />
                    </Col>
                </Row>
                
                {/*  */}
                
            </Card>
        </div>
        
    )
}

export default AirtimeSuccessDetailsCard;

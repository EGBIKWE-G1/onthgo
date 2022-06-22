import React, { Component, useState, select, Switch } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import emailicon from '../../../assets/img/icons/email-icon.png'

function ConfirmationDataSuccessDetailsCard2() {

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
        <div style={{ backgroundColor: 'transparent', padding: '20px', marginTop: '50px'}} align='center'>
            {/* <Card style={{backgroundColor: 'transparent', border: 'none'}}> */}
                {/* <div style={{ backgroundColor: 'transparent', padding: '20px', marginTop: '50px'}} align='center'> */}
                    <br/>
                    <img src={emailicon} alt=""/>
                    <br/>
                    <br/>
                    <h4> <b>Check your email</b> </h4>
                    <br/>
                    <span> for your transaction receipt and further instructions </span>
                {/* </div> */}
                {/*  */}
                
            {/* </Card> */}
        </div>
        
    )
}

export default ConfirmationDataSuccessDetailsCard2

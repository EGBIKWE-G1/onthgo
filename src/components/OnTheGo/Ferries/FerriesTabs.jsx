import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav, TabContent } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import DatePicker from '../Calendar'
import FerriesTabForm from './FerriesTabForm';
// import FerriesTabForm from '../FerriesTab/FerriesTabForm';

function FerriesTabs() {
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
        <div>
            {/* <Container classNamexx='d-none d-lg-block' style={{marginTop: '-95px', maxWidth: '100%'}}> */}
                <FerriesTabForm />
            {/* </Container> */}
            {/* <Container className='d-lg-none' style={{marginTop: '-95px', maxWidth: '100%'}}>
                <MobileFerriesTabForm />
            </Container> */}
        </div>
    )
}

export default FerriesTabs

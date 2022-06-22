import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
import InternetMultiStepper from '../../MultiStepper/InternetMultiStepper'

class BuyInternetFormSection extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <InternetMultiStepper />
            </div>
        );
    }
}

export default BuyInternetFormSection;

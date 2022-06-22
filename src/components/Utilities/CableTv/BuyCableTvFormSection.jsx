import React, { Component, useState } from 'react';
import { Jumbotron, Container, Row, Col, Image, Button, ButtonGroup, Card, InputGroup, Form, FormControl, FormCheck, Nav } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
// import '../Data/node_modules/react-phone-input-2/lib/style.css'
import DatePicker from '../../Calendar'
// import Stepper from 'react-stepper-horizontal'

// import SelectTabForm from './FlightSelectTab'
import CableTvMultiStepper from '../../MultiStepper/CableTvMultiStepper'

class BuyCableTvFormSection extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/* <div className='container-fluid'> */}
                {/* <Container style={{marginTop: '-107px', width: '1115px' }}> */}
                    <CableTvMultiStepper />
                {/* </Container> */}
                {/* <FlightSearchMultiStepper /> */}
                
                
            {/* </div> */}
            </div>
        );
    }
}

export default BuyCableTvFormSection;
